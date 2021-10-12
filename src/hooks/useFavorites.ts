import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "./../redux/types/types.characters";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const localFavorites = await AsyncStorage.getItem("favorites");
    const parsedFavorites =
      localFavorites && (JSON.parse(localFavorites) as Character[]);

    if (parsedFavorites) {
      setFavorites(parsedFavorites);
    }
  };

  const handleAddFavorite = async (character: Character) => {
    if (favorites) {
      const isAlreadyFavorite = favorites.some(
        (favorite) => favorite.id === character.id
      );

      if (isAlreadyFavorite) {
        const filteredFavorites = favorites.filter(
          (favorite) => favorite.id !== character.id
        );

        setFavorites(filteredFavorites);
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify([...filteredFavorites])
        );
      } else {
        await AsyncStorage.setItem(
          "favorites",
          JSON.stringify([...favorites, character])
        );
        setFavorites([...favorites, character]);
      }
    }
  };

  return {
    favorites,
    addFavorite: (character: Character) => handleAddFavorite(character),
    getFavorites: () => fetchFavorites(),
  };
};

export default useFavorites;
