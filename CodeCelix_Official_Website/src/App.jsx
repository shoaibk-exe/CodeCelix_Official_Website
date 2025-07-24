import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Logo from '/Logo/CodeCelix_Logo.jpg';

function App () {
  return (
    <div className="min-h-screen">
      <Header logo={Logo} />
      <HeroSection />
      <Footer logo={Logo} />
    </div>
  );
}

export default App;
