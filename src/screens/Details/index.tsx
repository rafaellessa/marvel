import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import ComicItem from "../../components/ComicItem";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import CharacterService from "../../data/services/characters";
import useFavorites from "../../hooks/useFavorites";
import { Character } from "../../redux/types/types.characters";
import { Comics } from "../../redux/types/types.comics";
import {
  CharacterDescription,
  CharacterImage,
  CharacterName,
  ComicsList,
  ComicsWrapper,
  Container,
  Content,
  Footer,
  TitleCommics,
} from "./styles";

const Details: React.FC = () => {
  const routes = useRoute();
  const character = routes.params.character as Character;
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState<Comics[]>([]);

  const { addFavorite, favorites } = useFavorites();
  const isFavorite = favorites.some((favorite) => character.id === favorite.id);

  useEffect(() => {
    fetchComics();
  }, []);

  const fetchComics = async () => {
    const response = await CharacterService.getComics(character.id);
    if (response.status === "success") {
      setComics(response.data);
      setLoading(false);
    }
  };

  const handlePressButton = async () => {
    await addFavorite(character);
    console.tron.log("Favorites: ", favorites);
  };

  const renderContent = () => (
    <Container>
      <PageHeader title="Personagem" rightIcon />
      <Content>
        <CharacterImage
          source={{
            uri: character.thumbnail,
          }}
        />
        <CharacterName>{character.name}</CharacterName>
        <CharacterDescription>{character.description}</CharacterDescription>
        <ComicsWrapper>
          <TitleCommics>Comics</TitleCommics>
          <ComicsList
            data={comics}
            renderItem={({ item }) => <ComicItem urlImage={item.thumbnail} />}
            horizontal
          />
        </ComicsWrapper>
        <Footer>
          <Button
            title={isFavorite ? "Deslike" : "Like"}
            onPress={handlePressButton}
          />
        </Footer>
      </Content>
    </Container>
  );

  const validateRender = () => {
    if (loading) {
      return <Loading />;
    }
    return renderContent();
  };

  return validateRender();
};

export default Details;
