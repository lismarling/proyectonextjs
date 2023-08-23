
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const paginas = () => {
  const postres = [
    { id: '1', nombrep: 'pastel de fresa' },
    { id: '2', nombrep: 'donas' },
    { id: '3', nombrep: 'Helados' },
    { id: '4', nombrep: 'banana' },
    { id: '5', nombrep: 'flan' },
  ];

  return (
    <div>
      <h1>POSTRES</h1>
      <ul>
        {postres.map((postre) => (
          <li key={postre.id}>
            <Link className="nav-link" href="/postres/[id]" as={`/postres/${postre.id}`}>
              {postre.nombrep}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default paginas;
