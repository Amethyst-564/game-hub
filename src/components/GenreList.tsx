import { Button, Heading, HStack, Image, List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {isLoading && skeletons.map(skeleton =>
          <ListItem key={skeleton} paddingY='5px'>
            <HStack>
              <Skeleton height='32px' width='32px' borderRadius={8} />
              <SkeletonText flex="1" fontSize='lg' />
            </HStack>
          </ListItem>
        )}
        {data.map(genre =>
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)} />
              <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectGenre(genre)} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg' variant="link">{genre.name}</Button>
            </HStack>
          </ListItem>
        )}
      </List>
    </>
  )
}

export default GenreList