import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetail = () => {

  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);  // slug! tell ts compiler slug never be null

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetail