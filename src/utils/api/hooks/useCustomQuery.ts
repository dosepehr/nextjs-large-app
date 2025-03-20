import { useQuery, QueryKey } from '@tanstack/react-query';
import { readData } from '../service';
import { AxiosRequestHeaders } from 'axios';

export const useCustomQuery = <T>({
    queryKey,
    url,
    headers,
    staleTime = 1000 * 60 * 60 * 5,
}: {
    queryKey: QueryKey;
    url: string;
    headers?: AxiosRequestHeaders;
    staleTime?: number;
}) => {
    const { data, isLoading } = useQuery({
        queryKey,
        queryFn: () => readData<T>(url, headers),
        staleTime,
    });
    return { data, isLoading };
};
