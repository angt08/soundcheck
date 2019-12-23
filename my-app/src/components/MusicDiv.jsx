import React, { Component } from 'react';
import audioOne from '../audioOne.mp3';


export default class MusicDiv extends Component {
  constructor() {
    super();
  }
  render() {
    let aOne = new Audio(audioOne);

    return (
      <div id="main-div">

        <button onClick={async () =>
        await aOne.play()}>
      aOne
        </button>

        <button onClick={async () =>
        await aOne.play()}>
      aTwo
        </button>

        <button>
     aThree
        </button>

        <button>
      aFour
        </button>

        <button>
      aFive
        </button>

        <button>
      aSix
        </button>



      </div>
    )
  }
}
