import { useRouter } from 'next/router';

const MyComponent = () => {
  const router = useRouter();

  const navigateToAboutPage = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Página de inicio</h1>
      <button onClick={navigateToAboutPage}>Ir a la página Acerca de</button>
    </div>
  );
};

export default MyComponent;
