export default function home({data}) {
    return (
     
      <div>
  {
    data.map((id,name,email)=>(
      <div key={id}>
       <p>{id} - {name}</p>
       <p>{email}</p>
  </div>
    ))
  }
    
    </div>
  
  
    )
  }


   
export async function getStaticProps() {
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data= await res.json();
      return {
        props: {
          data,
        
      },
    };
    }catch(error){
      console.log(error);
    }
  }