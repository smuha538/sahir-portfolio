import * as React from 'react';
import Home from './components/home';
import './App.css'
import Portfolio from './components/portfolio';
import Navbar from './components/navBar';
import SideNavBar from './components/sideNavBar';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen min-w-screen transition-opacity duration-700 bg-[url(/images/bg.svg)] bg-repeat bg-contain">
      <Navbar setSideMenuHandler={setSideMenuOpen} />
      <SideNavBar sideMenuOpen={sideMenuOpen} setSideMenuHandler={setSideMenuOpen}/>
      <Home />
      <About />
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
