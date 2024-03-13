import React, {useState, useEffect} from "react";
import '../../styles/checkout.css';
import { useLocation } from "react-router";
import Cookies from "js-cookie";

export default function Checkout() {
    
    const [type, setType] = useState('premium');

    const location = useLocation();

    
    const query = new URLSearchParams(location.search);
    const product = query.get('t');
    console.log(product);
    const [amount, setAmount] = useState(0);
    const [benefits, setBenefits] = useState([])


        useEffect(() => {
            if(product === 'premium'){
                setType('premium');
                setAmount(10.00);
                setBenefits(['twenty suggestions for each category', 'unlimited access to our collections', 'API access']);
            }
        }, [product]);

        // ... other code ...

    const handlePayment = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        console.log("Payment button clicked");

        if(!Cookies.get('email')) {
            window.location.href = '/login';
        }
        if (Cookies.get('user')['premium'] == true) {
            window.location.href = '/profile';
        }

        //fetch payment
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/payment/create-checkout-session`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ "lookup_key": type })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if(data['success'] == true){
                        window.open(data.url, "_blank");
                }
                
                
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
                        <h1>{type}</h1>
                        <hr/>
                    </div>
                    <div classname='product-benefits'>
                        <ul>
                            {benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                <footer>*recurring monthly</footer>

            </div>
            <div className='amt-info'>
                <h1 className='amt'>${amount}</h1>
                <hr style={{color: 'black'}}/>
            
                <button  onClick= {handlePayment} className='checkout-btn'>Checkout With Stripe</button>
            </div>

        </div>
    );
}