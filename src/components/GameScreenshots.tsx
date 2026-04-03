import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number
}
const GameScreenshots = ({ gameId }: Props) => {

  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  console.log(data);

  return (
    // <div>GameScreenshot</div>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map(screenshot =>
        <Image key={screenshot.id} src={screenshot.image} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots