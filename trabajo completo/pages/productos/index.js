// pages/productos/index.js
import Link from 'next/link';
import ProductoCard from '../../components/productos/ProductoCard';

function PaginaListadoProductos({ productos }) {
  console.log("Datos de productos que se pasan a ProductoCard:", productos);
  return (
    <div>
      <h1>Listado de Productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <ProductoCard
              nombre={producto.nombre}
              precio={producto.precio}
              descripcion={producto.descripcion} // Pasando la descripción
              imagen={producto.imagenUrl}       // Pasando la URL de la imagen (si existe)
            />
            <Link href={`/productos/detalle/${producto.id}`}>
              Ver Detalle Producto {producto.id}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">
        Volver al Inicio
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  // Simulación de carga de datos (ahora con más información)
  const productos = [
    { id: 1, nombre: 'Laptop Ultrabook', precio: 1200, descripcion: 'Potente y ligera.', imagenUrl: '/images/laptop.jpg' },
    { id: 2, nombre: 'Teclado Inalámbrico', precio: 75, descripcion: 'Cómodo y silencioso.', imagenUrl: '/images/teclado.png' },
    { id: 3, nombre: 'Monitor 4K', precio: 450, descripcion: 'Imágenes nítidas y colores vibrantes.', imagenUrl: '/images/monitor.jpeg' },
  ];

  return {
    props: {
      productos,
    },
  };
}

export default PaginaListadoProductos;