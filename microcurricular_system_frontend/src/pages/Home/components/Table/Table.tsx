import { useState, useEffect } from "react";
import axios from "axios";
import { TableBody, TableHeader, Pagination } from "./components";
import {
  Container,
  ContainerTitle,
  TableStyled,
  TableTitle,
  ContainerTable,
} from "./Table.styles";

const Table: React.FC = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/notas/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/api/notas/${id}/`);
      setData((prevData) => prevData.filter((item: any) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item with ID:", id);
      console.error(error);
    }
  };  

  return (
    <Container>
      <ContainerTitle>
        <TableTitle>
          Notes <span>{data.length} assignatures</span>
        </TableTitle>
      </ContainerTitle>

      <ContainerTable>
        <TableStyled>
          <TableHeader />
          <TableBody items={currentItems} handleDelete={handleDelete} />
        </TableStyled>
      </ContainerTable>
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Table;
