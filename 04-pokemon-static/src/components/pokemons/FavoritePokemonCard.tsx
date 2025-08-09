
import type { FavoritePokemon } from "@interfaces/FavoritePokemon";

import { createSignal, Show, type Component } from "solid-js";


interface Props {

    pokemon: FavoritePokemon

}


export const FavoritePokemonCard: Component<Props> = (props) => {
    const [isVisible, setIsVisible] = createSignal(true);
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`;

    const deleteFavorite = () => {

        const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];


        const newFavorites = favorites.filter((p) => p.id !== props.pokemon.id);


        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        setIsVisible(false);


    };

    // Al eliminarlo del localStorage, este no actualiza  la vista automaticamente y tenemos que manejarlo manualmente ocultándolo
    //  con el <Show> asi el usuario ve una animación de eliminación, pero el componente sigue en el DOM hasta que se recarga la página
    return (
        <Show when={isVisible()}>


            <div class='flex flex-col justify-center items-center'>
                <a href={`/pokemons/${props.pokemon.name}`}>
                    <img src={imgSrc} alt={props.pokemon.name} class='w-32 h-32' />

                    <p class="capitalize">#{props.pokemon.id} - {props.pokemon.name}</p>
                </a>


                <button onClick={deleteFavorite} class="text-red-400 hover:text-red-600">Borrar</button>
            </div>

        </Show>

    );
};
