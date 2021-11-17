import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      oddsType: 'american',
      americanOdds: '',
      decimalOdds: '',
    }

    this.onAmericanOddsChange = this.onAmericanOddsChange.bind(this);
    this.onDecimalOddsChange = this.onDecimalOddsChange.bind(this);
    this.calcAmericanToDecimals = this.calcAmericanToDecimals.bind(this);
    this.calcDecimalToAmerican = this.calcDecimalToAmerican.bind(this);

  }



  onAmericanOddsChange(e) {
    this.setState({
      americanOdds: e.target.value
    }, () => {
      if (this.state.americanOdds.length >= 3) {
      const decimalOdds = this.calcAmericanToDecimals(this.state.americanOdds);
      this.setState({
        decimalOdds: decimalOdds
      })} else {
        this.setState({decimalOdds: ''})
      }
    })
  }

  onDecimalOddsChange(e) {
    this.setState({
      decimalOdds: e.target.value
    }, () => {
      if (this.state.decimalOdds > 1) {
        const americanOdds = this.calcDecimalToAmerican(this.state.decimalOdds);
        this.setState({
          americanOdds: americanOdds
        })
      } else {
        this.setState({
          americanOdds: ''
        })
      }
    })
  }

  calcAmericanToDecimals(num) {
    if (num >= 100) {
      return Math.ceil(((num / 100) + 1) * 100) / 100
    } else if (num < -100) {
      return Math.ceil((1 - (100 / num)) * 100) / 100
    }
  }

  calcDecimalToAmerican(num) {
    if (num >= 2) {
      return Math.round((num - 1) * 100)
    } else if (num < 2 || num > 1) {
      return Math.round(-100/(num - 1))
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Betting Odds Calculator</h1>

        <div className="odds-input-container">
          <label className="type-odds-label">American Odds</label>
          <input className="odds-input"
            type='text'
            value={this.state.americanOdds}
            onChange={this.onAmericanOddsChange}
          />
        </div>

        <div className="odds-input-container">
          <label className="type-odds-label">Decimal Odds</label>
          <input className="odds-input"
            type='text'
            value={this.state.decimalOdds}
            onChange={this.onDecimalOddsChange}

          />
        </div>

      </div>
    )
  }
}

export default App;