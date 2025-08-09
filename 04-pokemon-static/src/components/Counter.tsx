import { createSignal, type Component, type JSXElement } from "solid-js";

// Props para el componente Counter sirve para poder inicializar el contador con un valor específico enviado 
// desde el componente padre 
interface Props {
    initialCount: number;
    children?: JSXElement
}

// Componente contador lo utilizamos en SolidJs como una integración a Astro npx astro add solid
export const Counter:Component<Props> = (props) => {
    const [count, setCount] = createSignal(props.initialCount );
    

    return (
        <>

        {/* <h1 class= 'text-4xl'>Contador</h1> */}
        {props.children}
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