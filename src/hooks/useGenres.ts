import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: ['genres'],
  queryFn: () =>
    apiClient.get('/genres')
      .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000,  // 24h
  initialData: { count: genres.length, results: genres }
})

export default useGenres;