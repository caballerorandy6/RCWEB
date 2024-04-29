import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed w-screen top-0 flex justify-around items-center mx-auto header-nav">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
