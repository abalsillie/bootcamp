// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    // can't render more than one parent element, therefore have to fragment
    <> 
      <Nav />
      {/* Nav is a parent component */}
      <main className="mx-3">
        <Outlet />
        {/* placeholder */}
      </main>
    </>
  );
}

export default App;
