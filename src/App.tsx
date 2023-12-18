import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
    <Navbar />
      <div className="font-lexend w-screen">
        <div className="p-[30px] w-full h-full">
          <div className="w-full h-full border-[5px] border-black">
            <Home />
            <About />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
