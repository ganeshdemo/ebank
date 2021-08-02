import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="row" style={{background: '#333', color: '#fff', margin: '0px 0px'}}>       
            <div className="col-sm-3">
            <h4>EXPLORE</h4>
            <p><a href="#">Investor Relations</a></p>
            <p><a href="#">Regulatory Disclosure Section</a></p>
            <p><a href="#">Equitas Bank Answers</a></p>
            <p><a href="#">Safe Banking</a></p>
            <p><a href="#">RBI Circuler</a></p>
            <p><a href="#">RBI: Fraud Alerts</a></p>
            <p><a href="#">Money Transfer to India</a></p>
            <p><a href="#">Internet Banking</a></p>
            <p><a href="#">Mobile Banking</a></p>
            </div>
            <div className="col-sm-3">
            <h4>POPULAR PRODUCTS</h4>
            <p><a href="#">Savings Accounts</a></p>
            <p><a href="#">Women's Accounts</a></p>
            <p><a href="#">Senior Citizen Account</a></p>
            <p><a href="#">Current Accounts</a></p>
            <p><a href="#">Credit Cards</a></p>
            <p><a href="#">Home Loan</a></p>
            <p><a href="#">Personal Loan</a></p>
            <p><a href="#">Car Loan</a></p>
            <p><a href="#">Gold Loan</a></p>
            </div>
            <div className="col-sm-3">
            <h4>CALCULATORS</h4>        
            <p><a href="#">Personal Loan EMI Calculator</a></p>
            <p><a href="#">Car Loan EMI Calculator</a></p>
            <p><a href="#">Two Wheeler EMI Calculator</a></p>
            <p><a href="#">Home Loan EMI Calculator</a></p>
            <p><a href="#">Recurring Deposit EMI Calculator</a></p>
            <p><a href="#">Fixed Deposit EMI Calculator</a></p>
            <p><a href="#">More Calculators</a></p>
            </div>  
            <div className="col-sm-3">
                <h4>OTHERS</h4>        
                <p><a href="#">Customer Care</a></p>
            <p><a href="#">List of Unclaimed Accounts</a></p>
            <p><a href="#">Form Center</a></p>
            <p><a href="#">Notice Board</a></p>
            <p><a href="#">News Room</a></p>
            <p><a href="#">Online Dispute Resolution</a></p>
            <p><a href="#">Compliments and Complaints</a></p>
            </div>        
        </div>
        );
    }
}

export default Footer;