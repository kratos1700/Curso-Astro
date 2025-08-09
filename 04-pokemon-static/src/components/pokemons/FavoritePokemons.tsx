import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";
import type { FavoritePokemon } from "@interfaces/FavoritePokemon";


const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    return favorites;
};

export const FavoritePokemons = () => {

    const [favoritePokemons, setFavoritePokemons] = createSignal(getLocalStoragePokemons());
    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
          <For each={favoritePokemons()} fallback={<div>No hay pokémons favoritos</div>}>
            {(pokemon) => (
             <FavoritePokemonCard pokemon={pokemon} />
            )}
          </For>
        </div>
    );
};
