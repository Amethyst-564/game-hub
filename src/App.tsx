import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from "./components/NavBar";
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import type { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import type { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import './index.css';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`  // 1024px
  }}
    templateColumns={{
      base: '1fr',
      lg: '260px 1fr'
    }}
  >
    <GridItem area="nav">
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </GridItem>
    </Show>
    <GridItem area="main" >
      <HStack spacing={5} paddingLeft={2} marginBottom={5}>
        <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
        <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </HStack>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
}

export default App
