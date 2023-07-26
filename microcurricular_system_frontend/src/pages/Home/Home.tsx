import { NavBar, HeaderPage, Modal } from "../../components";
import { Table, Form } from "./components";
import { Container } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeaderPage name="Notes" />
      <Container>
        <Table />
        <Modal>
          <Form isEditing />
        </Modal>
      </Container>
    </>
  );
};

export default Home;
