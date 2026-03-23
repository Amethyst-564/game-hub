import { HStack, Image, List, ListItem, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  return (
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
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      )}
    </List>
  )
}

export default GenreList