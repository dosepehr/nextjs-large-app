import {
    useMutation,
    MutationKey,
    useQueryClient,
} from '@tanstack/react-query';
import { createData, updateData, deleteData } from '../service';
import { AxiosRequestHeaders } from 'axios';

type MutationMethod = 'POST' | 'PUT' | 'DELETE';

interface MutationConfig<TData> {
    mutationKey: MutationKey;
    url: string;
    method?: MutationMethod;
    headers?: AxiosRequestHeaders;
    onSuccess?: (data: TData) => void;
    onError?: (error: unknown) => void;
    invalidateQueries?: string[];
}

export const useCustomMutation = <TVariables, TData = void>({
    mutationKey,
    url,
    method = 'POST',
    headers,
    onSuccess,
    onError,
    invalidateQueries = [],
}: MutationConfig<TData>) => {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey,
        mutationFn: async (variables: TVariables): Promise<TData> => {
            switch (method) {
                case 'POST':
                    return await createData<TVariables, TData>(
                        url,
                        variables,
                        headers
                    );
                case 'PUT':
                    return await updateData<TVariables, TData>(
                        url,
                        variables,
                        headers
                    );
                case 'DELETE':
                    await deleteData(url, headers);
                    return {} as TData;
                default:
                    throw new Error(`Unsupported mutation method: ${method}`);
            }
        },
        onSuccess: async (data) => {
            await Promise.all(
                invalidateQueries.map((queryKey) =>
                    queryClient.invalidateQueries({ queryKey: [queryKey] })
                )
            );
            onSuccess?.(data);
        },
        onError,
    });

    return { mutate, isPending };
};
