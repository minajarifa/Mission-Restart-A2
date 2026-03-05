import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="my-20">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
