import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Router } from './Router';
import { UserProvider } from './util/User.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <UserProvider>
        <Router>
            <App />
        </Router>
    </UserProvider>
)
