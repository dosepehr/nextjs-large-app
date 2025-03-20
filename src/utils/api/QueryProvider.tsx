'use client';
import React, { FC, PropsWithChildren } from 'react';
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            console.log(error);
            // show notification
        },
    }),
    mutationCache: new MutationCache({
        onError: (error) => {
            console.log(error);
            // show notification
        },
    }),
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            throwOnError: false,
            gcTime: 1000 * 60 * 60 * 24, // 24h after this time, if data is inactive,react query deletes the cache,must be bigger that staleTime
            staleTime: 1000 * 60 * 60 * 5, // 5h after this time,we send request again & cache the result
        },
    },
});
const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                {children}
            </QueryClientProvider>
        </>
    );
};

export default QueryProvider;
