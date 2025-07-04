import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { type Publication } from "@/types/researcher";

const ResearchTable: React.FC<{ data: Publication[] }> = ({ data }) => (
  <Card className="p-4">
    <h3 className="mb-4 text-base font-semibold">Research Areas</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Subtitle</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.subtitle}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default ResearchTable;
