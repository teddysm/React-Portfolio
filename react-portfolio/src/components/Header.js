import Nav from "./Navigation"; 

function Header({ setPage }) {
  return (
    <header>
      <Nav setPage={setPage} />
    </header>
  );
}

export default Header;
