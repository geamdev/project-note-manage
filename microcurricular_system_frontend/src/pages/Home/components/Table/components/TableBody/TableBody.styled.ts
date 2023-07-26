import styled from '@emotion/styled';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface ITDProps {
  isGray?: boolean;
}

export const TableBodyStyled = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  background-color: #fff;
`;

export const TableRowStyled = styled.tr`
  background-color: #fff;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const TableDataStyled = styled.td<Partial<ITDProps>>`
  display: table-cell;
  vertical-align: start;
  padding: 20px 0;
  padding-left: 30px;
  background-color: ${(props) => (props.isGray ? '#fff' : '#f9f9f9')};
  &:first-of-type {
    width: 600px;
    font-size: 14px;
  }
  &:nth-of-type(2) {
    width: 600px;
  }
`;

export const Actions = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit2)`
  color: #1e90ff;
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  color: #ff0000;
`;
