import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import APIClient from "../services/api-client";
import type { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useInfiniteQuery({
  queryKey: ['games', gameQuery],
  queryFn: ({ pageParam }) =>
    apiClient.get({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
  placeholderData: keepPreviousData,  // v5
  getNextPageParam: (lastpage, allPages) => {
    return lastpage.next ? allPages.length + 1 : undefined;
  },
  initialPageParam: 1,
  staleTime: 24 * 60 * 60 * 1000  // 24h
})

export default useGames;