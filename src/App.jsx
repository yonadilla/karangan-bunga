import "./App.css";
import "./components/desing__karangan/desing.css";
import Nav from "./components/nav/nav";
import Hero from "./components/hero/hero";
import Design from "./components/desing__karangan/design";
import Footer from "./components/footer/footer";

function App({ products }) {
  return (
    <div className="">
      <Hero />
      <Design products={products} />
    </div>
  );
}

export default App;
