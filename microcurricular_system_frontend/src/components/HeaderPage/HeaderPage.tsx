import { useState } from "react";
import { Container, Text, TextSecond } from "./HeaderPage.styles";
import { GrAdd } from "react-icons/gr";
import { Modal } from "..";
import { Form } from "../../pages/Home/components";

interface HeaderPageProps {
  name: string;
}
const HeaderPage: React.FC<HeaderPageProps> = ({ name }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  return (
    <Container>
      <Text>{name}</Text>
      <TextSecond onClick={openModal}>
        <GrAdd />
      </TextSecond>
      {showModal && (
        <Modal showModal={showModal} onClose={() => setShowModal(false)}>
          <Form />
        </Modal>
      )}
    </Container>
  );
};

export default HeaderPage;
