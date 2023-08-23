
import { useRouter } from 'next/router';

const postre = () => {
  const router = useRouter();
  const { id } = router.query;

  // Aquí puedes realizar una solicitud a tu API o base de datos para obtener los datos del producto según su ID
  // Por ahora, simplemente mostraremos el ID del producto
  return (
    <div>
      <h1> ID de postre: {id}</h1>

    </div>
  );
};

export default postre;
