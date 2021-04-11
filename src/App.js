import "./App.css";
import Routes from "./Pages/Routes";
import styled from "styled-components";

function App() {
  return (
    <AppElem className="App">
      <Routes />
    </AppElem>
  );
}

const AppElem = styled.div``;

export default App;
