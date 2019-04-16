import React, {Component} from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif}/>);
  }

  render () {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
};


export default GifList;

// Also works with an array of the id's

// const gifs = ["j1gDGxFWrAaRbzbMx5","iDfP8wxwqu248uPo17"];

// renderList = () => {
//     return this.props.gifIds.map(gifId => {
//       return <Gif id={gifId} key={gifId}/>
//     })
//   }
