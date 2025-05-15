import React, { useEffect, useState } from 'react';
import api from '../../modules/services/api'; // asegúrate de que esta ruta es correcta

interface Props {
  children?: React.ReactNode;
}

export default function AboutPage({ children }: Props) {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    api.get('/hello') // asegúrate de que este endpoint exista en tu backend
      .then((res) => setMessage((res.data as { message: string }).message))
      .catch((err) => {
        console.error('Error al conectar con el backend:', err);
      });
  }, []);

  return (
    <main className="">
      {children}

      <section style={{ marginTop: '2rem' }}>
        <h2>Respuesta del backend:</h2>
        {message ? <p>{message}</p> : <p>Cargando...</p>}
      </section>
    </main>
  );
}
