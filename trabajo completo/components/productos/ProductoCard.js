// components/productos/ProductoCard.js
function ProductoCard(props) {
  console.log("Props recibidas en ProductoCard:", props);
  // O para ver props específicas:
  console.log("Nombre del producto:", props.nombre);
  console.log("Precio del producto:", props.precio);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{props.nombre}</h3>
      <p>Precio: ${props.precio}</p>
      {props.descripcion && <p>Descripción: {props.descripcion}</p>}
      {props.imagen && <img src={props.imagen} alt={props.nombre} style={{ maxWidth: '100px' }} />}
    </div>
  );
}

export default ProductoCard;