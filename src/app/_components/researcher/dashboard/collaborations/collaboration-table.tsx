import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import type { Collaborator } from "@/types/researcher";
import { Button } from "@/components/ui/button";

interface CollaborationTableProps {
  collaborators: Collaborator[];
  onConnectClick: (id: string) => void;
}
const CollaborationTable: React.FC<CollaborationTableProps> = ({
  collaborators,
  onConnectClick,
}) => (
  <Card className="p-4">
    <h3 className="text-primary mb-4 text-base font-semibold">
      Potential Research Collaborations
    </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Affiliation</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {collaborators.map((collaborator, idx) => (
          <TableRow key={idx}>
            <TableCell>{collaborator.name}</TableCell>
            <TableCell>{collaborator.affiliation}</TableCell>
            <TableCell className="text-right">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onConnectClick(collaborator.id)}
              >
                Connect
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default CollaborationTable;
