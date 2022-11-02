import { useEffect } from 'react';

function App() {
  function greeting(name: string) {
    console.log(`hello ${name}`);
  }

  useEffect(() => {
    greeting('Jobin');
  }, []);
  
  return (
    <div>
      hello world
    </div>
  );
}

export default App;
