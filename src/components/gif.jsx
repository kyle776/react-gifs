import React, {Component} from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.id)
  }


  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div >
        <img className="gif" src={src} alt="" onClick={this.handleClick}/>
      </div>
    );
  }
};


export default Gif;
