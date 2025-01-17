import { ThemeProvider, ToastContainer } from '@confeti/design-system';
import Router from '@shared/router/router';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './shared/utils/query-client';
import { rootStyle } from '@confeti/design-system/styles';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <div className={rootStyle}>
            <Router />
            <ToastContainer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
