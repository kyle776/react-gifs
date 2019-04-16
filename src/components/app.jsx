import React, {Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "j1gDGxFWrAaRbzbMx5"
    };
  }

  search = (query) => {
    giphy('BQv1gLdGtb5RNCrioIUOq3E9diDZkpxd').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
        // Res contains gif data!
        this.setState({
          gifs: res.data
        });
    });
  }

  setGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.setGif}/>
        </div>
      </div>
    );
  }
};


export default App;
