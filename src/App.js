import "./App.scss";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
