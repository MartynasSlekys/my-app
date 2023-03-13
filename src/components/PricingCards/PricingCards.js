import '../PricingCards/PricingCards.scss';

import React from 'react'
import { Link } from 'react-router-dom';

const PricingCards = () => {
  return (
    <div className='cards-wrapper'>
        <div className='cards-content-wrapper'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='card-line'></span>
                <p className='card-currency-title'>$ 100</p>
                <p>- 3 days -</p>
                <p>- 2 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>ORDER NOW</Link>
            </div>
            <div className='card'>
                <h3>- Premium -</h3>
                <span className='card-line'></span>
                <p className='card-currency-title'>$ 200</p>
                <p>- 6 days -</p>
                <p>- 4 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>ORDER NOW</Link>
            </div>
            <div className='card'>
                <h3>- Business -</h3>
                <span className='card-line'></span>
                <p className='card-currency-title'>$ 300</p>
                <p>- 12 days -</p>
                <p>- 6 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>ORDER NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCards;