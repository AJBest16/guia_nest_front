// pages/usuarios/perfil/[username].js
import { useRouter } from 'next/router';
import Link from 'next/link';

function PaginaPerfilUsuario({ usuario }) {
  const router = useRouter();
  const { username } = router.query;

  if (router.isFallback) {
    return <div>Cargando perfil...</div>;
  }

  if (!usuario) {
    return (
      <div>
        <h1>Usuario con username '{username}' no encontrado.</h1>
        <Link href="/usuarios">
          Volver al listado de usuarios
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
      <h1>Perfil de: {usuario.nombre}</h1>
      <p>Username: {username}</p>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
      <Link href="/usuarios">
        Volver al listado de usuarios
      </Link>
      <br />
      <Link href="/">
        Volver al Inicio
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.params;
  const usuariosSimulados = {
    'usuarioEjemplo': { id: 'u001', nombre: 'Usuario Ejemplo', email: 'ejemplo@test.com', rol: 'Miembro' },
    'anaCoder': { id: 'u002', nombre: 'Ana Coder', email: 'ana@test.com', rol: 'Admin' },
  };

  const usuario = usuariosSimulados[username] || null;

  if (!usuario) {
    return {
      props: { usuario: null },
    };
  }

  return {
    props: {
      usuario,
    },
  };
}

export default PaginaPerfilUsuario;