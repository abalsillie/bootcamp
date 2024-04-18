// Todo: Bring in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* Todo: Fill in the appropriate component so that the user will conditionally see the appropriate view based on the URL */}
      {/* add outlet as placeholder to be filled by react router depending on route*/}
    </>
  );
}

export default App;
