import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { readData } from '../service';
import { AxiosRequestHeaders } from 'axios';

export const useInfinite = <T extends { nextPage: number }>({
    queryKey,
    url,
    headers,
    staleTime = 1000 * 60 * 60 * 5,
    initialPageParam = 1,
}: {
    queryKey: QueryKey;
    url: string;
    headers?: AxiosRequestHeaders;
    staleTime?: number;
    initialPageParam?: number;
}) => {
    const {
        data,
        error,
        isFetchingNextPage,
        isFetching,
        fetchNextPage,
        hasNextPage,
        refetch,
    } = useInfiniteQuery({
        queryKey,
        queryFn: ({ pageParam }) =>
            readData<T>(`${url}?page=${pageParam}`, headers),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam,
        staleTime,
    });

    return {
        data,
        error,
        isFetchingNextPage,
        isFetching,
        fetchNextPage,
        hasNextPage,
        refetch,
    };
};
