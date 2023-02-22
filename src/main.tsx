import { GlobalStyles } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorElement from './errorElement';
import { globalStyles } from './globalStyles';
import AppInfoPage from './pages/AppInfoPage';
import EntryPage from './pages/EntryPage';
import HitsPage from './pages/HitsPage';
import HomePage from './pages/HomePage';
import LinkPage from './pages/LinkPage';
import MikroblogPage from './pages/MikroblogPage';
import SettingsPage from './pages/SettingsPage';
import TagPage from './pages/TagPage';
import UpcomingPage from './pages/UpcomingPage';
import { ROUTE } from './routes';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { path: `${ROUTE.HOME}/:sort?`, element: <HomePage /> },
      { path: `${ROUTE.UPCOMING}/:sort?`, element: <UpcomingPage /> },
      { path: `${ROUTE.HITS}/:sort?/:year?/:month?`, element: <HitsPage /> },
      { path: `${ROUTE.MIKROBLOG}/:sort?/:lastUpdate?`, element: <MikroblogPage /> },
      { path: `${ROUTE.LINK}/:id/:slug?`, element: <LinkPage /> },
      { path: `${ROUTE.ENTRY}/:id/:slug?`, element: <EntryPage /> },
      { path: `${ROUTE.TAG}/:tag`, element: <TagPage /> },
      { path: ROUTE.SETTINGS, element: <SettingsPage /> },
      { path: ROUTE.APP_INFO, element: <AppInfoPage /> },
      { path: ROUTE.ANY, element: <Navigate to={ROUTE.HOME} /> },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles styles={globalStyles} />
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>
);
