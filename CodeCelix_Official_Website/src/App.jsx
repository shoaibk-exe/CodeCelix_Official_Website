import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router';
import Logo from '/Logo/CodeCelix_Logo.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header logo={Logo} />
      <Outlet />
      <Footer logo={Logo} />
    </div>
  );
}

export default App;
