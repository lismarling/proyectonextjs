import Navbar from '../components/Navbar';
import Image from 'next/image';
import React from 'react';



export default function home() {
  return (
   
    <div>

      <Navbar />
      
      <div class="jumbotron text-center pres">

  <h1>Bienvenido a nuestra Cafetería</h1>
        <p>Disfruta de nuestras deliciosas bebidas y alimentos.</p>
</div>

<div class="container">   
    <div class="card-group mt-3">

      <div class="card text-center border-info">
      <Image className="card-img-top" 
        src="/image/pos.jpeg"
        alt="Imagen"
        width={300}
        height={200}
        style={{ width: '300px', height: '200px' ,justify:'center'}}
      />
        <div class="card-body">
          <h4 class="card-title">Postres</h4>
          <a href="#" class="btn btn-warning">ver</a>
        </div>
      </div>          

      <div class="card text-center border-info">
      <Image className="card-img-top" 
        src="/image/capu2.jpeg"
        alt="Imagen"
        width={300}
        height={200}
        style={{ width: '300px', height: '200px' ,justify:'center'}}
      />
        <div class="card-body">
          <h4 class="card-title">Bebidas Frías</h4>
          <p class="card-text">Refrescate con nuestras bebidas frías como batidos, smoothies y jugos naturales.</p>
          <a href="#" class="btn btn-warning">ver</a>
        </div>
      </div>          
  
      <div class="card text-center border-info">
      <Image className="card-img-top" 
        src="/image/capu.jpeg"
        alt="Imagen"
        width={300}
        height={200}
        style={{ width: '300px', height: '200px' ,justify:'center'}}
      />
        <div class="card-body">
          <h4 class="card-title">Bebidas calientes</h4>
          <p class="card-text"> Ofrecemos una variedad de bebidas calientes como café, té y chocolate caliente.</p>
          <a href="#" class="btn btn-warning">ver</a>
        </div>
      </div>          

    </div>
  </div>  


        </div>


  )
}

 




