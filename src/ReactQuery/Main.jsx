import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();

const Main = () => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Home />
            <ReactQueryDevtools initialIsOpen={false}/>
         </QueryClientProvider>

      </>
   )
}

export default Main