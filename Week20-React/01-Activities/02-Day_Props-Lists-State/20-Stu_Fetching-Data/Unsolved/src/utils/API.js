import axios from 'axios';

const search = async (query) =>
  axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

export default { search };

// axios another option for fetching data from API, AJAX query
// passing query parametre into search func
