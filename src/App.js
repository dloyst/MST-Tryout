import React, { Component } from 'react';
import { observer } from 'mobx-react';
import mst from './junk/myImage.png';
import './junk/App.css';

import { Layout, TileWrapper, Tile } from './styled';

class App extends Component {
  render() {
    const { model } = this.props; 

    return (
      <div className="App">
        <header className="App-header">
          <img src={mst} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Mobx State Tree</h1>
        </header>

        <button onClick={(e) => {
          e.stopPropagation();
          model.addBox();
        }}>
          More Tiles
        </button>

        <div>Number ON:  { model.numberOn()  }</div>
        <div>Number OFF: { model.numberOff() }</div>

        <Layout>
          { model.tiles.map(tile => (
            <TileWrapper key={tile.id}>
              <Tile style={{backgroundColor: tile.bgColor}} onClick={tile.toggleNeighbors}>{tile.id}</Tile>
            </TileWrapper>
          )) }
        </Layout>
      </div>
    );
  }
}

export default observer(App);
