import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Ribbon from "./component/Ribbon/Ribbon";
import Topcard from "./component/Topcard/Topcard";
import Featurecard from "./component/Featurecard/Featurecard";
import Footer from "./component/Footer/Footer";
function App() {
  const [show, setShow] = useState(0);
  const [width,setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  },[])
  return (
    <div className="App">
      <Navbar />
      <Ribbon show={show} setShow={setShow}/>
      <div className="middlescreen">
        <Topcard show={show} screenWidth={width}/>
        <Featurecard setShow={setShow} show={show}/>
        <Footer show={show} setShow={setShow}/>
      </div>
    </div>
  );
}

export default App;
