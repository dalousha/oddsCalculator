import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      oddsType: 'american',
      odds: null
    }
  }

  render() {
    return (
      <div class="app">
        <h1>Betting Odds Calculator</h1>

        <div class="odds-input-container">
          <label class="type-odds-label">American Odds</label>
          <input class="odds-input"
            type='text'

          />
        </div>

      </div>
    )
  }
}

export default App;