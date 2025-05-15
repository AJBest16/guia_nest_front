// pages/usuarios/index.js
import Link from 'next/link';
import PerfilUsuarioMini from '../../components/usuarios/PerfilUsuarioMini';

function PaginaListadoUsuarios({ usuarios }) {
  return (
    <div>
      <h1>Listado de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <PerfilUsuarioMini
              nombre={usuario.nombre}
              email={usuario.email}
              username={usuario.username}
            />
            <Link href={`/usuarios/perfil/${usuario.username}`}>
              Ver Perfil de '{usuario.username}'
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

export async function getServerSideProps(context) {
  const usuarios = [
    { id: 'u001', username: 'usuarioEjemplo', nombre: 'Usuario Ejemplo', email: 'ejemplo@test.com' },
    { id: 'u002', username: 'anaCoder', nombre: 'Ana Coder', email: 'ana@test.com' },
  ];

  return {
    props: {
      usuarios,
    },
  };
}

export default PaginaListadoUsuarios;