import "./App.css";
import Faq from "./components/Faq";
import FirstBody from "./components/FirstBody";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";
import SecondBody from "./components/SecondBody";
import Services from "./components/Services";
import ThirdBody from "./components/ThirdBody";

function App() {
  return (
    <>
      <div className="w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-3 border-green-300">
        <div className=" container mx-auto">
          <Navbar />
          <Head />
          <FirstBody />
          <Services />
          <OurClients />
          <SecondBody />
          <Faq />
          <ThirdBody />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
