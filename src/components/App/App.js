import './App.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;
