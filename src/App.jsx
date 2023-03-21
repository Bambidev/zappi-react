import Categorias from "./components/categorias/Categorias";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Navbar from "./components/navbar/Navbar";
import Productos from "./components/productos/Productos";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Categorias/>
        <Productos />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
