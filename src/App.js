import Cupcake from "./Cupcake";
import foto from "./images/Pasteles.jpg";
import "./css/index.css"

function App() {
  return (
    <div className="contenedor">
      <Cupcake color="rosa" sabor="vainilla"  foto={foto}/>
      <Cupcake color="azul" sabor="chocolate"  foto={foto} />
      <Cupcake color="azul" sabor="chocolate"  foto={foto} />
    </div>
  );
}

export default App;
