import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  slug: string;
  description_raw: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
    // placeholderData: keepPreviousData,  // v5
    getNextPageParam: (lastpage, allPages) => {
      return lastpage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms('24h'),
  })
}

export default useGames;