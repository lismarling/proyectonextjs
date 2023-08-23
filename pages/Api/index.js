import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MiPagina({ user }) {
  return (
    <div>
    <h5 style={{display:'flex'}}>DATOS DE USUARIOS DE API jsonplaceholder  </h5>
    <table class="table table-striped">
  <thead>
    <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Compañia</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
  {user.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
            {/* Agrega más celdas según tus datos */}
          </tr>
        ))}

 
  </tbody>
</table>
  </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default MiPagina;
