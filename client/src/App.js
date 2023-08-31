
import './App.css';
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
function App() {
  const clientId="222422854999-2o08ogfu6ipesh1pr19herd4pnutg7ct.apps.googleusercontent.com";
  return (
      <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
      </GoogleOAuthProvider>
  );
}

export default App;
