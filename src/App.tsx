import { Theme } from '@radix-ui/themes';
import './App.css'
import Navbar from '@/components/Navbar'
import '@radix-ui/themes/styles.css';
import LandingPage from '@/components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <Theme>
      <Navbar />
      <LandingPage />
      <Footer />
    </Theme>
  )
}

export default App
