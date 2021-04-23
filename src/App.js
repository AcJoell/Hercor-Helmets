import { Header } from "./components/header/Header";
import { ContCategoria } from "./components/contCategoria/contCategoria";
import { ContProducto } from "./components/contProducto/contProducto";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ContCategoria />
      <Footer />
    </div>
  );
}

export default App;
