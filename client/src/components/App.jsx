import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      oddsType: 'american',
      americanOdds: '',
      decimalOdds: '',
      impliedProbability: ''
    }

    this.onAmericanOddsChange = this.onAmericanOddsChange.bind(this);
    this.onDecimalOddsChange = this.onDecimalOddsChange.bind(this);
    this.onProbablityChange = this.onProbablityChange.bind(this);

    this.calcAmericanToDecimals = this.calcAmericanToDecimals.bind(this);
    this.calcDecimalToAmerican = this.calcDecimalToAmerican.bind(this);
    this.calcDecimalToProbability = this.calcDecimalToProbability.bind(this);
    this.calcProbabilityToDecimal = this.calcProbabilityToDecimal.bind(this);

  }

  onAmericanOddsChange(e) {
    this.setState({
      americanOdds: e.target.value
    }, () => {
      if (this.state.americanOdds.length >= 3) {
      const decimalOdds = this.calcAmericanToDecimals(this.state.americanOdds);
      const impliedProbability = this.calcDecimalToProbability(decimalOdds);
      this.setState({
        decimalOdds: decimalOdds,
        impliedProbability: impliedProbability
      })} else {
        this.setState({
          decimalOdds: '',
          impliedProbability: ''
        })
      }
    })
  }

  onDecimalOddsChange(e) {
    this.setState({
      decimalOdds: e.target.value
    }, () => {
      if (this.state.decimalOdds > 1) {
        const americanOdds = this.calcDecimalToAmerican(this.state.decimalOdds);
        const impliedProbability = this.calcDecimalToProbability(this.state.decimalOdds)
        this.setState({
          americanOdds: americanOdds,
          impliedProbability: impliedProbability
        })
      } else {
        this.setState({
          americanOdds: '',
          impliedProbability: ''
        })
      }
    })
  }

  onProbablityChange(e) {
    this.setState({
      impliedProbability: e.target.value
    }, () => {
      if (this.state.impliedProbability > 0) {
        const decimalOdds = this.calcProbabilityToDecimal(this.state.impliedProbability);
        const americanOdds = this.calcDecimalToAmerican(decimalOdds);
        this.setState({
          americanOdds: americanOdds,
          decimalOdds: decimalOdds
        })} else {
          this.setState({
            americanOdds: '',
            decimalOdds: ''
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

  calcDecimalToProbability(num) {
    return Math.ceil(((100/num)) * 100) / 100;
  }

  calcProbabilityToDecimal(num) {
    return 100/num
  }

  render() {
    return (
      <div className="app">
        <h1>Betting Odds Calculator</h1>

        <div className="odds-input-container">
          <label className="type-odds-label">American Odds</label>
          <input className="odds-input"
            type='number'
            value={this.state.americanOdds}
            onChange={this.onAmericanOddsChange}
          />
        </div>

        <div className="odds-input-container">
          <label className="type-odds-label">Decimal Odds</label>
          <input className="odds-input"
            type='number'
            value={this.state.decimalOdds}
            onChange={this.onDecimalOddsChange}
          />
        </div>

        <div className="odds-input-container">
          <label className="type-odds-label">Implied Probability</label>
          <input className="odds-input"
            type='number'
            value={this.state.impliedProbability}
            onChange={this.onProbablityChange}
          />
        </div>

      </div>
    )
  }
}

export default App;