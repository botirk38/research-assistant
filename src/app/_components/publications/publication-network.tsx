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
import { useCallback, useMemo, useState } from "react";
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
          className="min-w-[200px] cursor-pointer rounded-lg border bg-white p-4 shadow hover:bg-gray-50"
          onClick={() => setIsOpen(true)}
        >
          <Handle type="target" position={Position.Top} />

          <div className="space-y-2">
            <h3 className="truncate text-sm font-medium">
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
            <h2 className="mb-2 text-xl font-semibold">
              {data.publication.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              Published in {data.publication.year}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Journal</h3>
            <p className="text-muted-foreground text-sm">
              {data.publication.journal}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Authors</h3>
            <div className="flex flex-wrap gap-1">
              {data.publication.coAuthors.map((author) => (
                <span
                  key={author}
                  className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                >
                  {author}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm">Citations</p>
                <p className="text-lg font-medium">
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
  // Create initial nodes and edges
  const { initialNodes, initialEdges } = useMemo(() => {
    const initialNodes: PublicationNode[] = publications.map((pub, index) => {
      // Calculate the number of nodes and use it to determine the radius and spacing
      const nodeCount = publications.length;
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
    const initialEdges: Edge[] = [];

    initialNodes.forEach((sourceNode, index) => {
      initialNodes.slice(index + 1).forEach((targetNode) => {
        const pub1 = sourceNode.data.publication;
        const pub2 = targetNode.data.publication;

        const sharedAuthors = pub1.coAuthors.filter((author) =>
          pub2.coAuthors.includes(author),
        );

        if (sharedAuthors.length > 0) {
          initialEdges.push({
            id: `${pub1.title}-${pub2.title}`,
            source: pub1.title,
            target: pub2.title,
            sourceHandle: "coauthors",
            label: `${sharedAuthors.join(", ")}`, // Add label showing shared authors
            style: { stroke: "#10b981" }, // Green color for co-author connections
            labelStyle: {
              fontSize: "10px",
              fill: "#374151", // Gray text color
              fontWeight: 500,
            },
            labelBgStyle: {
              fill: "white",
              fillOpacity: 0.8,
              stroke: "#e5e7eb", // Light gray border
              strokeWidth: 1,
              borderRadius: 4,
            },
            labelBgPadding: [4, 4], // Padding around the label
            data: {
              sharedAuthorCount: sharedAuthors.length,
              sharedAuthors: sharedAuthors,
            },
          });
        }
      });
    });

    return { initialNodes, initialEdges };
  }, [publications]);

  const [nodes, setNodes] = useNodesState<PublicationNode>(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onNodesChange: OnNodesChange<PublicationNode> = useCallback(
    (changes) =>
      setNodes((nds) => {
        return changes.reduce(
          (acc, change) => {
            // Apply all changes directly
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
      }),
    [setNodes],
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setEdges((eds) =>
        changes.reduce(
          (acc, _change) => {
            // Handle edge changes here if needed
            return acc;
          },
          [...eds],
        ),
      ),
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
    <div className="h-[600px] w-full">
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
        defaultEdgeOptions={{
          style: { strokeWidth: 2 },
        }}
      >
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
