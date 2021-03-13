import React, { Component } from 'react';
import './app.scss'
import Header from './component/header'
import Headline from './component/headline'


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <div className="main">
          <Headline header='posty' desc='opisy sdofsofsfdsdf' />
        </div>


      </div>

    )
  }
}

export default App