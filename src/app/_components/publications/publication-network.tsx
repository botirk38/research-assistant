"use client";

import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeProps,
  Handle,
  Position,
  type OnNodesChange,
  type OnEdgesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import type { Publication } from "@/types/researcher";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Define custom node types
type PublicationNodeData = {
  publication: Publication;
};

type PublicationNode = Node<PublicationNodeData, "publication">;

// Custom Node Component with proper typing
function PublicationNode({ data }: NodeProps<PublicationNode>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className="bg-card hover:bg-accent min-w-[200px] cursor-pointer rounded-lg border p-4 shadow-sm"
          onClick={() => setIsOpen(true)}
        >
          <Handle type="target" position={Position.Top} />

          <div className="space-y-2">
            <h3 className="text-foreground truncate text-sm font-medium">
              {data.publication.title}
            </h3>
            <div className="text-muted-foreground space-y-1 text-xs">
              <p>Year: {data.publication.year}</p>
              <p>Citations: {data.publication.citations}</p>
              <p className="truncate">Journal: {data.publication.journal}</p>
            </div>
          </div>

          <Handle
            type="source"
            position={Position.Bottom}
            id="citations"
            className="!bg-blue-500"
          />
          <Handle
            type="source"
            position={Position.Bottom}
            id="coauthors"
            style={{ left: "auto", right: 10, background: "#10b981" }}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-4">
        <div className="space-y-4">
          <div>
            <h2 className="text-foreground mb-2 text-xl font-semibold">
              {data.publication.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              Published in {data.publication.year}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-foreground font-medium">Journal</h3>
            <p className="text-muted-foreground text-sm">
              {data.publication.journal}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-foreground font-medium">Authors</h3>
            <div className="flex flex-wrap gap-1">
              {data.publication.coAuthors.map((author) => (
                <span
                  key={author}
                  className="bg-primary/10 text-primary inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                >
                  {author}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-foreground font-medium">Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm">Citations</p>
                <p className="text-foreground text-lg font-medium">
                  {data.publication.citations}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface PublicationsNetworkProps {
  publications: Publication[];
}

export function PublicationsNetwork({
  publications,
}: PublicationsNetworkProps) {
  // Create layout function to reuse for updates
  const createNodesAndEdges = useCallback((pubs: Publication[]) => {
    const nodes: PublicationNode[] = pubs.map((pub, index) => {
      // Calculate the number of nodes and use it to determine the radius and spacing
      const nodeCount = pubs.length;
      const radius = Math.max(400, nodeCount * 60); // Adjust radius based on number of nodes
      const angle = (2 * Math.PI * index) / nodeCount;

      // Calculate x and y positions in a circular layout
      const x = radius * Math.cos(angle) + radius; // Add radius to center the circle
      const y = radius * Math.sin(angle) + radius;

      return {
        id: pub.title,
        type: "publication",
        data: { publication: pub },
        position: {
          x,
          y,
        },
      };
    });

    const edges: Edge[] = [];

    nodes.forEach((sourceNode, index) => {
      nodes.slice(index + 1).forEach((targetNode) => {
        const pub1 = sourceNode.data.publication;
        const pub2 = targetNode.data.publication;

        const sharedAuthors = pub1.coAuthors.filter((author) =>
          pub2.coAuthors.includes(author),
        );

        if (sharedAuthors.length > 0) {
          edges.push({
            id: `${pub1.title}-${pub2.title}`,
            source: pub1.title,
            target: pub2.title,
            sourceHandle: "coauthors",
            label: `${sharedAuthors.join(", ")}`,
            style: { stroke: "var(--primary)" },
            labelStyle: {
              fontSize: "10px",
              fill: "var(--foreground)",
              fontWeight: 500,
            },
            labelBgStyle: {
              fill: "var(--background)",
              fillOpacity: 0.8,
              stroke: "var(--border)",
              strokeWidth: 1,
              borderRadius: 4,
            },
            labelBgPadding: [4, 4],
            data: {
              sharedAuthorCount: sharedAuthors.length,
              sharedAuthors: sharedAuthors,
            },
          });
        }
      });
    });

    return { nodes, edges };
  }, []);

  // Create initial nodes and edges
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => createNodesAndEdges(publications),
    [publications, createNodesAndEdges],
  );

  const [nodes, setNodes] = useNodesState<PublicationNode>(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  // Update nodes and edges when publications change
  useEffect(() => {
    const { nodes: newNodes, edges: newEdges } =
      createNodesAndEdges(publications);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [publications, createNodesAndEdges, setNodes, setEdges]);

  const onNodesChange: OnNodesChange<PublicationNode> = useCallback(
    (changes) => {
      setNodes((nds) => {
        return changes.reduce(
          (acc, change) => {
            switch (change.type) {
              case "position":
                return acc.map((node) =>
                  node.id === change.id
                    ? { ...node, position: change.position || node.position }
                    : node,
                );
              case "remove":
                return acc.filter((node) => node.id !== change.id);
              case "select":
                return acc.map((node) =>
                  node.id === change.id
                    ? { ...node, selected: change.selected }
                    : node,
                );
              default:
                return acc;
            }
          },
          [...nds],
        );
      });
    },
    [setNodes],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      setEdges((eds) => {
        return changes.reduce(
          (acc, change) => {
            switch (change.type) {
              case "remove":
                return acc.filter((edge) => edge.id !== change.id);
              case "select":
                return acc.map((edge) =>
                  edge.id === change.id
                    ? { ...edge, selected: change.selected }
                    : edge,
                );
              default:
                return acc;
            }
          },
          [...eds],
        );
      });
    },
    [setEdges],
  );

  // Define node types with proper typing
  const nodeTypes = useMemo(
    () => ({
      publication: PublicationNode,
    }),
    [],
  );

  return (
    <div className="bg-background h-[600px] w-full rounded-lg border">
      <ReactFlow<PublicationNode, Edge>
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <Controls className="bg-background border" />
        <Background
          gap={12}
          size={1}
          className="bg-background"
          color="var(--border)"
        />
      </ReactFlow>
    </div>
  );
}
