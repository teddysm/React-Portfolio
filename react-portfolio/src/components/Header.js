import Nav from "./Navigation";

// Context, Reducers, Redux, Redux Toolkit

function Header({ setPage }) {
  //let setPage = props.setPage;
  return (
    <header>
      <h1 style={{color: 'black'}}>Thanh T Doan</h1>
      <Nav setPage={setPage} />
    </header>
  );
}

export default Header;
