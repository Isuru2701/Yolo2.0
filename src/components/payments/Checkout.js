import React, {useState} from "react";
import '../../styles/checkout.css';
import { useLocation } from "react-router";

export default function Checkout() {
    
    const [type, setType] = useState('premium');

    const location = useLocation();

    
    const query = new URLSearchParams(location.search);
    const product = query.get('t');

    const handlePayment = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        //fetch payment
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/checkout`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "product": product })
            });

            if (response.ok) {
                //redirect
                window.location.href = "/success";
            } else {
            }
        } catch (error) {
        }
    }

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
                <footer>*recurring monthly</footer>

            </div>
            <div className='amt-info'>
                <h1 className='amt'>$4.99</h1>
                <hr style={{color: 'black'}}/>
                <button className='checkout-btn'>Checkout With Stripe</button>
            </div>

        </div>
    );
}