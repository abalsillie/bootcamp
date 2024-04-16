import { useState, useEffect } from 'react';
import ResultList from './ResultList'; // result list component

// Import our search method
import search from '../utils/API'; // helper func, search function

const SearchResultContainer = () => { // functional component
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]); // useState empty array for results

  // Method to get search results and set state
  const searchGiphy = async (query) => { // async func taking in query
    const { data } = await search(query); // destructure data
    setResults(data.data); // sets state
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => { // useEffect runs searchGiphy func for kittens
    searchGiphy('kittens');
  }, []); // empty array means renders every time

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <ResultList results={results} />
    </div>
  );
};

export default SearchResultContainer;
