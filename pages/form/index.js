
import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const presionar = (e) => {
    e.preventDefault();
    router.push(`/resultadobus?inform=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      <h1>Mi formulario de busqueda</h1>
      <form onSubmit={presionar}>
        
        <input  class="form-control mr-sm-2" aria-label="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button class="btn btn-success my-2 my-sm-0"  type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default HomePage;
