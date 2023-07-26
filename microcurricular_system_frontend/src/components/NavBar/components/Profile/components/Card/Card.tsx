import { RiLogoutCircleRLine } from "react-icons/ri";
import { CardContainer, Logout } from "./Card.styles";
import { useNavigate } from "react-router-dom";
import supabase from "../../../../../../supabase/client";

const Card: React.FC = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <CardContainer>
      <Logout color="red" onClick={handleLogOut}>
        <RiLogoutCircleRLine />
        <span>Logout</span>
      </Logout>
    </CardContainer>
  );
};

export default Card;
