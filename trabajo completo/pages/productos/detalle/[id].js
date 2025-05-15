// pages/productos/detalle/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';

function PaginaDetalleProducto({ producto }) {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Cargando detalle del producto...</div>;
  }

  if (!producto) {
    return (
      <div>
        <h1>Producto con ID '{id}' no encontrado.</h1>
        <Link href="/productos">
          Volver al listado
        </Link>
        <br />
        <Link href="/">
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Detalle del Producto: {producto.nombre}</h1>
      <p>ID: {id}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
      <Link href="/productos">
        Volver al listado de productos
      </Link>
      <br />
      <Link href="/">
        Volver al Inicio
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const productosSimulados = {
    '1': { id: 1, nombre: 'Laptop Ultrabook', precio: 1200, descripcion: 'Potente y ligera.' },
    '2': { id: 2, nombre: 'Teclado Inalámbrico', precio: 75, descripcion: 'Cómodo y silencioso.' },
    '3': { id: 3, nombre: 'Monitor 4K', precio: 450, descripcion: 'Imágenes nítidas y colores vibrantes.' },
  };

  const producto = productosSimulados[params.id] || null;

  if (!producto) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      producto,
    },
    revalidate: 60,
  };
}

export default PaginaDetalleProducto;