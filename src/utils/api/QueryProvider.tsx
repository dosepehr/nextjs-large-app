'use client';
import React, { FC, PropsWithChildren } from 'react';
import {
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

    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            throwOnError: false,
            gcTime: 1000 * 60 * 60 * 24, // 24h
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
