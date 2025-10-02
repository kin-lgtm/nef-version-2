import { useState } from 'react'

import Navbar from './components/navbar';
 import { Outlet } from 'react-router-dom';

import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Add this - it renders child routes */}
      </main>
      <Footer />
    </>
  );
}

export default App