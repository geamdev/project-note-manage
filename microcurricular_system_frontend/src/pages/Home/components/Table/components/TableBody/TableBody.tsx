import {
  Actions,
  DeleteIcon,
  EditIcon,
  TableBodyStyled,
  TableDataStyled,
  TableRowStyled,
} from "./TableBody.styled";

const TableBody: React.FC<TableBody> = ({ items, handleDelete }) => {
  console.log(items);

  return (
    <TableBodyStyled>
      {items.map((item, index) => (
        <TableRowStyled key={item.id}>
          <TableDataStyled isGray={index % 2 === 1}>
            {item.estudiante}
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            {item.asignatura}
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            {item.primer_parcial}
          </TableDataStyled>

          <TableDataStyled isGray={index % 2 === 1}>
            {item.segundo_parcial}
          </TableDataStyled>

          <TableDataStyled isGray={index % 2 === 1}>
            {item.examen}
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            {item.recuperacion}
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            <Actions>
              <DeleteIcon onClick={() => handleDelete(item.id)} />
            </Actions>
            <Actions>
              <EditIcon />
            </Actions>
          </TableDataStyled>
        </TableRowStyled>
      ))}
    </TableBodyStyled>
  );
};

export default TableBody;
