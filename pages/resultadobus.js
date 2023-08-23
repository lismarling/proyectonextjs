// pages/searchResults.js
import { useRouter } from 'next/router';

const resultadoeb = () => {
  const router = useRouter();
  const { inform } = router.query;

  return (
    <div>
      <h1>Resultado de busqueda para "{inform}"</h1>

    </div>
  );
};

export default resultadoeb;
