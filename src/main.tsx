import ReactDOM from 'react-dom/client';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { msalInstance } from './auth/auth-msal.tsx';
import { UnAuthenticatedRedirect } from './auth/unauthenticated-redirect.tsx';
import App from './App.tsx';
import './index.css';
import { Router } from './Router';
import { UserProvider } from './util/User.tsx';

export default function AppProvider() {
  const instance = msalInstance();

  return (
    <MsalProvider instance={instance}>
      <AuthenticatedTemplate>
        <UserProvider>
          <Router>
            <App />
          </Router>
        </UserProvider>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <UnAuthenticatedRedirect />
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppProvider />);

