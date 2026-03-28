
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { type FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
  queryKey: ['platforms'],
  queryFn: () =>
    apiClient.get('/platforms')
      .then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000,  // 24h
  initialData: { count: platforms.length, results: platforms }
})

export default usePlatforms;