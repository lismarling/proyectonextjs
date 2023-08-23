
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/page.module.css';
import Link from 'next/link';

export default function Navbar ()  {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-warning">

  <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link" href="/">
            Inicio
          </Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" href="/about">
    Acerca de nosotros
          </Link>
    
    </li>
    <li className="nav-item">
    <Link className="nav-link" href="/contac">
   Contacto
          </Link>

    </li>
    <li className="nav-item">
    <Link className="nav-link" href="/postres">
   postres
          </Link>

    </li>
  </ul>
  
</nav>




  )
}




