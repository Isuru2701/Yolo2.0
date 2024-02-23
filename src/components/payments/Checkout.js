import React from "react";
import '../../styles/checkout.css';

export default function Checkout() {
    return (

        <div className='checkout-container'>
            <div className='item-info-container'>
                <div className='item-info'>
                    <div classname='product-title'>
                        <h1>TITLE</h1>
                        <hr/>
                    </div>
                    <div classname='product-benefits'>
                        <ul>
                            <li>benefit</li>
                            <li>benefit</li>
                            <li>benefit</li>
                            <li>benefit</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='amt-info'>
                <h1 className='amt'>$4.99</h1>
                <hr style={{color: 'black'}}/>
                <button className='checkout-btn'>Checkout With Stripe</button>
            </div>

        </div>
    );
}