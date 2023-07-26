import { Profile } from './components';
import { NavBarContainer } from './NavBar.styles';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Profile />
    </NavBarContainer>
  );
};

export default NavBar;
