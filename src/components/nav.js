import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/page.module.css';
export default function Nav()  {
  return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="/cliente">
   <Image className="card-img-top" 
        src="/image/logo.jpeg"
        alt="Imagen"
        width={300}
        height={200}
        style={{ width: '205px', height: '70px' ,justify:'center'}}
      /></a>
  <ul className="navbar-nav">
    <li className="nav-item">

      <a className="nav-link" href="producto/producto">productos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/Api">Api</a>
    </li>

  </ul>
  
</nav>




  )
}
