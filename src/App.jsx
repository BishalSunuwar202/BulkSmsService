import "./App.css";
import FirstBody from "./components/FirstBody";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import SecondBody from "./components/SecondBody";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto">
          <Navbar />
          <Head />
          <FirstBody />
          <Services />
          <OurClients />
          <SecondBody />
        </div>
      </div>
    </>
  );
}

export default App;
