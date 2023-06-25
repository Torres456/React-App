
function Cupcake({color,sabor,foto}){
return(
    <div className="Capcake">
        <img src={foto} alt={sabor} />
        <h2>{color}</h2>
        <p>{`sabor: ${sabor}`}</p>
    </div>
)

}

export default Cupcake