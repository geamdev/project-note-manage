import {
  TableHeadStyled,
  TableHeaderStyled,
  TableRowStyled,
} from "./TableHeader.styles";

const TableHeader: React.FC = () => {
  return (
    <TableHeadStyled>
      <TableRowStyled>
        <TableHeaderStyled>Student</TableHeaderStyled>
        <TableHeaderStyled>Assignature</TableHeaderStyled>
        <TableHeaderStyled>First Partial</TableHeaderStyled>
        <TableHeaderStyled>Second Partial</TableHeaderStyled>
        <TableHeaderStyled>Exam</TableHeaderStyled>
        <TableHeaderStyled>Recovery</TableHeaderStyled>
        <TableHeaderStyled>Actions</TableHeaderStyled>
      </TableRowStyled>
    </TableHeadStyled>
  );
};

export default TableHeader;
