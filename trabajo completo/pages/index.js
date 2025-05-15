// pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Página de Inicio </h1>
      <p>seleccion una opcion para continuar</p>
      <div>
        <Link href="/productos">
          Ir al Módulo de Productos
        </Link>
      </div>
      <div>
        <Link href="/usuarios">
          Ir al Módulo de Usuarios
        </Link>
      </div>
    </div>
  );
}