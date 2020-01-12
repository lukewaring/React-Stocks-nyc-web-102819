import React from 'react'
import Stock from '../components/Stock'

class StockContainer extends React.Component {  

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map(stock => <Stock stock={stock} addPortfolio={this.props.addPortfolio} /> )}
      </div>
    )
  }

}

export default StockContainer
