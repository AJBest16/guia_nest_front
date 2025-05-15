// components/usuarios/PerfilUsuarioMini.js
import Link from 'next/link';

function PerfilUsuarioMini({ nombre, email, username }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '8px', margin: '5px' }}>
      <p>{nombre} ({username})</p>
      <p>Email: {email}</p>
      <Link href={`/usuarios/perfil/${username}`}>
        Ver perfil completo
      </Link>
    </div>
  );
}

export default PerfilUsuarioMini;