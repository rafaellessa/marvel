import { getUser } from "./../redux/selectors/selectors.auth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "./../redux/types/types.characters";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const user = useSelector(getUser);
  const favoriteKey = `favorites@${user.id}`;
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const localFavorites = await AsyncStorage.getItem(favoriteKey);
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
          favoriteKey,
          JSON.stringify([...filteredFavorites])
        );
      } else {
        await AsyncStorage.setItem(
          favoriteKey,
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
