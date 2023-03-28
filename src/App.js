import "./App.css";
import Header from "./components/Header";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";

function App() {
  return (
    <>
      <div className="md:mx-40 mx-6">
        <Header />
        <Main1 />
        <Main2 />
      </div>
    </>
  );
}

export default App;
