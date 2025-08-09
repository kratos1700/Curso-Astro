import { createSignal } from "solid-js";


// Componente contador lo utilizamos en SolidJs como una integración a Astro npx astro add solid
export const Counter = () => {
    const [count, setCount] = createSignal(10);
    

    return (
        <>

        <h1 class= 'text-4xl'>Contador</h1>
        <h3 class= 'text-xl'>Valor: {count()}</h3>
        <button 
        onClick={() => setCount((count) => ++count)}
        class='bg-blue-500 p-2 mr-2 rounded' >Incrementar +1</button>
        <button
        onClick={() => setCount((count) => --count)}
        class='bg-blue-500 p-2 mr-2 rounded' >Decrementar -1</button>

        </>
    );

};