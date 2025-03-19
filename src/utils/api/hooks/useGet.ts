import { useQuery, QueryKey } from '@tanstack/react-query';
import { readData } from '../service';
import { AxiosRequestHeaders } from 'axios';

export const useGet = <T>({
    queryKey,
    url,
    headers,
}: {
    queryKey: QueryKey;
    url: string;
    headers?: AxiosRequestHeaders;
}) => {
    const { data, isLoading } = useQuery({
        queryKey,
        queryFn: () => readData<T>(url, headers),
    });
    return { data, isLoading };
};
