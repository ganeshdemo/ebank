import React, { Component } from 'react';
import Footer from '../core/footer';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  accountBalanceToggle(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      if (e.target.id == 'off') {
        e.target.id = 'on';
        e.target.innerHTML = '<span>ON</span> Hide Balance';
        document.querySelectorAll('.toggleAmount').forEach(element => {
          var request = new XMLHttpRequest();
          request.open(
            'GET',
            'http://mobilefoundation.dgsl-mfs-sng01-vs-8x32-91fe099d4c12f7021911cbcfe3d01cf2-0000.sng01.containers.appdomain.cloud/mfp/api/adapters/AccountServiceAdapter/resource/accountBalance?userid=11'
          );
          request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
              element.innerHTML = this.responseText;
            }
          };
          request.send();
        });
      } else {
        e.target.id = 'off';
        e.target.innerHTML = 'Show Balance <span>OFF</span>';
        document.querySelectorAll('.toggleAmount').forEach(element => {
          element.innerHTML = '******';
        });
      }
    } else {
      e.target.parentNode.click();
    }
  }

  getCIBILScore() {
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      'http://mobilefoundation.dgsl-mfs-sng01-vs-8x32-91fe099d4c12f7021911cbcfe3d01cf2-0000.sng01.containers.appdomain.cloud/mfp/api/adapters/AccountServiceAdapter/resource/getCIBILScore?pan=dsds'
    );
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        //return this.responseText;
        document.getElementById('cibilScoreId').innerHTML = this.responseText;
      }
    };
    request.send();
  }
  creditBalanceToggle(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      if (e.target.id == 'off') {
        e.target.id = 'on';
        e.target.innerHTML = '<span>ON</span> Hide Balance';
        document.getElementById('availableLimit').innerHTML = 'Rs. 7,39,001';
        document.getElementById('outstandingLimit').innerHTML = 'Rs. 10,998';
        document.getElementById('prevBalance').innerHTML = 'Rs. 0';
      } else {
        e.target.id = 'off';
        e.target.innerHTML = 'Show Balance <span>OFF</span>';
        document.getElementById('availableLimit').innerHTML = '******';
        document.getElementById('outstandingLimit').innerHTML = '******';
        document.getElementById('prevBalance').innerHTML = '******';
      }
    } else {
      e.target.parentNode.click();
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar" style={{ padding: '10px 0px 0px 0px' }}>
          <div className="container-fluid">
            <div className="col-sm-2">
              <div className="navbar-header" style={{ marginTop: '-15px' }}>
                <a href="/" title="Home" rel="home" className="navbar-brand">
                  {' '}
                  <img
                    src="https://www.equitasbank.com/sites/default/files/equitas-logo.png"
                    width="150px"
                    height="41px"
                    alt="Home"
                  />{' '}
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a data-toggle="tab" href="#home">
                    Banking
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#menu1">
                    Shopping
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <div
                id="search_bar"
                className="navbar-left"
                style={{ marginLeft: '-435px' }}
              >
                {' '}
                <img
                  src="https://icicibanksmartsearch.senseforth.com/ICICI/Images/search-input-blue.svg"
                  className="search_icon_image"
                />
                <input
                  autoComplete="off"
                  id="search"
                  placeholder="Search for products, services..."
                />{' '}
              </div>
              <ul
                className="nav navbar-nav navbar-right"
                style={{ margin: '-4px' }}
              >
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-user"></span> Welcome
                    Ganesh
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      className="glyphicon glyphicon-bell"
                      style={{ fontSize: '25px', marginTop: '-2px' }}
                    ></span>
                  </a>
                </li>
                <li>
                       <NavLink exact to="/login">
                         <button
                    className="btn btn-primary"
					style={{ marginTop: '-10px' }}
                  >
                    logout
                  </button>
                      </NavLink>
                    </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <ul className="nav nav-pills" style={{ margin: '10px 30px' }}>
                <li className="dropdown" style={{ padding: '0 20px' }}>
                  {' '}
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Overview
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                       <NavLink exact to="/dashboard">
                        My View
                      </NavLink>
                    </li>
                    
                    <li>
                       <NavLink exact to="/bankdetails">
                        Account Summary
                      </NavLink>
                    </li>
                    <li>
                      <a href="#">Financial Journey</a>
                    </li>
					<li>
                      <a href="#">Personal Details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" style={{ padding: '0 20px' }}>
                  {' '}
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Bank Accounts
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Account</a>
                    </li>
                    <li>
                      <a href="#">Deposits</a>
                    </li>
                    <li>
                      <a href="#">Pockets</a>
                    </li>
                    <li>
                      <a href="#">PPF Account</a>
                    </li>
                    <li>
                      <a href="#">PayLater</a>
                    </li>
                    <li>
                      <a href="#">e-Statments</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" style={{ padding: '0 20px' }}>
                  {' '}
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Payments & Transfer
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Funds Transfer</a>
                    </li>
                    <li>
                      <a href="#">Pay Bills</a>
                    </li>
                    <li>
                      <a href="#">Recharge</a>
                    </li>
                    <li>
                      <a href="#">Buy / Recharge fastag</a>
                    </li>
                    <li>
                      <a href="#">Tax Centre</a>
                    </li>
                    <li>
                      <a href="#">My transactions</a>
                    </li>
                    <li>
                      <a href="#">Manage Payees</a>
                    </li>
                    <li>
                      <a href="#">Received Funds</a>
                    </li>
                    <li>
                      <a href="#">Shopping</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" style={{ padding: '0 20px' }}>
                  {' '}
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Cards & Loans
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Credit Cards</a>
                    </li>
                    <li>
                      <a href="#">Debit / ATM card</a>
                    </li>
                    <li>
                      <a href="#">Loans</a>
                    </li>
                    <li>
                      <a href="#">Apply Online</a>
                    </li>
                    <li>
                      <a href="#">Forex and Prepaid Cards</a>
                    </li>
                    <li>
                      <a href="#">CIBIL Report</a>
                    </li>
                    <li>
                      <a href="#">Redeem Reward Points</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" style={{ padding: '0 20px' }}>
                  {' '}
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Investments & Insurance
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">National Pension System</a>
                    </li>
                    <li>
                      <a href="#">Guaranteed Pension Plan</a>
                    </li>
                    <li>
                      <a href="#">Life Insurance</a>
                    </li>
                    <li>
                      <a href="#">General Insurance</a>
                    </li>
                    <li>
                      <a href="#">Invest Online</a>
                    </li>
                    <li>
                      <a href="#">Buy Mutual Funds</a>
                    </li>
                    <li>
                      <a href="#">Loan against MF</a>
                    </li>
                    <li>
                      <a href="#">Demat</a>
                    </li>
                    <li>
                      <a href="#">Digital Gold</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown" style={{ padding: '0 20px' }}>
                  {' '}
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Customer Service
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Service Request</a>
                    </li>
                    <li>
                      <a href="#">My Mailbox</a>
                    </li>
                    <li>
                      <a href="#">e-Locker</a>
                    </li>
                    <li>
                      <a href="#">Tax Centre</a>
                    </li>
                    <li>
                      <a href="#">Digital Locker</a>
                    </li>
                    <li>
                      <a href="#">Offer Zone</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="menu1" className="tab-pane fade">
              <h3>Menu 1</h3>
              <p>Some content in menu 1.</p>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="containt-bg">
          <div className="container-fluid">
            <div className="row main">
              <div className="col-md-2">
                <div className="white-bg">
                  <div className="financial-score">
                    <div className="top-card-financial">
                      <h6>Your Financial Journey</h6>
                    </div>
                    <p>Here are next steps for you</p>
                    <a
                      href=""
                      data-isexcluded="true"
                      id="exploreNow"
                      className="cta"
                    >
                      Explore now
                    </a>
                  </div>
                </div>
                <div
                  id="C25"
                  className=" dash-rvmp-widget bs-box border-bottom sevices-pad"
                >
                  <div className="widget-content listingcol empty-widget">
                    <div className="topservices">
                      <div className="sec-head">
                        <p>
                          <span className="title">Services</span>
                          <span className="link" title="View All">
                            <a
                              href="#"
                              title="View All"
                              className="sr-view-all"
                            >
                              View all
                            </a>
                          </span>
                        </p>
                      </div>
                      <div className="sec-cont">
                        <div className="services-list">
                          <ul className="list">
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Increase Debit Card Limit
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Upgrade your Debit Card
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Generate Card PIN
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Block or Unblock ATM/Debit Card
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Subscribe to Email Statement
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Stop Cheque
                                  </span>
                                </a>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="mod-services ">
                                <a href="#">
                                  <span className="services-link">
                                    Change your address
                                  </span>
                                </a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="C24" className=" dash-rvmp-widget bs-box typ-bg">
                  <div className="widget widget-small">
                    <div className="widget-content listingcol empty-widget">
                      <div className="sec-head">
                        <span className="title" id="Caption6411112">
                          Recommended for You
                        </span>
                      </div>
                      <div
                        id="RetailUserDashboard_DRWNW__1:WidgetForm.SubSection3"
                        className="sec-cont"
                      >
                        <div
                          className="benifits-list"
                          id="RetailUserDashboard_DRWNW__1:WidgetForm.Rowset9"
                        >
                          <ul className="list">
                            <li className="list-item">
                              <a href="#" className="mod-title-desc">
                                <h3 className="title ">
                                  Watch out for exciting deals!
                                </h3>
                                <span className="desc">
                                  {' '}
                                  <p>
                                    10% off on Seiko watches with NetBanking!
                                    T&amp;C apply{' '}
                                  </p>{' '}
                                </span>{' '}
                              </a>
                            </li>
                            <li className="list-item">
                              <a href="#" className="mod-title-desc">
                                <h3 className="title ">
                                  Avail a Rs.500 Big Basket voucher.
                                </h3>
                                <span className="desc">
                                  <p>
                                    Simply make a payment using Net Banking.
                                    T&amp;C apply.{' '}
                                  </p>
                                </span>{' '}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div
                  id="C213"
                  className="dash-rvmp-widget bs-graph ui-sortable bs-box"
                >
                  <div className="bal-h">
                    <span className="title">Account</span>{' '}
                    <span
                      className="sh-bal"
                      onClick={this.accountBalanceToggle}
                      id="off"
                    >
                      {' '}
                      Show Balance <span>OFF</span>{' '}
                    </span>
                  </div>
                  <div className="row d-flex">
                    <div className="col-md-4 info-h">
                      <div className="card-H">
                        <div>
                          <h4>Total Balance</h4>
                          <div className="toggleAmount">******</div>
                        </div>
                        <div className="d-flex">
                          <div className="chart-h">
                            <span>100%</span>
                          </div>
                          <div>
                            <h4 className="red-txt">Savings</h4>
                            <div className="toggleAmount">******</div>
                            <h4 className="blue-txt">Deposit</h4>
                            <div className="toggleAmount">******</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 info-h">
                      <div className="card-H">
                        <div>
                          <h4>Savings</h4>
                          <div>****************</div>
                          <div>**4036</div>
                          <p>
                            <a href="#">View Statement </a>
                          </p>
                        </div>
                        <div>Upgrade your Debit card</div>
                      </div>
                    </div>
                    <div className="col-md-4 info-h box-color">
                      <div className="card-H">
                        <h4>Deposits</h4>
                        <div className="red-txt">
                          Get flexible Fixed Deposit centuries with amount
                          starting as low as Rs. 10,000
                        </div>
                        <a href="#" className="white-btn">
                          Apply now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row acc-opt">
                    <div className="col-xs-4 col-sm-2 col-md-2">
                      <a href="#" className="bg-blue-i" >
                        {' '}
                        <i>
                          <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                        </i>{' '}
                        View your spendings
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-2 col-md-2">
                      <a href="#" className="bg-blue-i">
                        {' '}
                        <i>
                          <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                        </i>{' '}
                        Manage limits
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-2 col-md-2">
                      <a href="#" className="bg-red-i">
                        {' '}
                        <i>
                          <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                        </i>{' '}
                        Recharge Now
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-2 col-md-2">
                      <a href="#" className="bg-red-i">
                        {' '}
                        <i>
                          <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                        </i>{' '}
                        Send money
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-2 col-md-2">
                      <a href="#" className="bg-red-i">
                        {' '}
                        <i>
                          <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                        </i>{' '}
                        Open FD
                      </a>
                    </div>
                    <div className="col-xs-4 col-sm-2 col-md-2">
                      <a href="#" className="bg-red-i">
                        {' '}
                        <i>
                          <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                        </i>{' '}
                        Debit/ATM card
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  id="C22"
                  className=" dash-rvmp-widget bs-quick-links swiper-container bs-box"
                >
                  <ul className="transaction-h">
                    <li>
                      <a href="#" className="active">
                        Bill Payments
                      </a>
                    </li>
                    <li>
                      <a href="#">Frequent Internet Transactions</a>
                    </li>
                    <li>
                      <a href="#">Recent Transactions</a>
                    </li>
                  </ul>
                  <div className="transaction-opt">
                    <div className="row d-flex">
                      <div className="col-xs-4 col-sm-4 col-md-4 card-H">
                        <a href="#" className="bg-red-i">
                          {' '}
                          <i>
                            <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                          </i>{' '}
                          <span className="tras-text">Fastag</span>
                        </a>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-4 card-H">
                        <a href="#" className="bg-red-i">
                          {' '}
                          <i>
                            <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                          </i>{' '}
                          <span className="tras-text">Mutual Funds</span>
                        </a>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-4 card-H">
                        <a href="#" className="bg-red-i">
                          {' '}
                          <i>
                            <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                          </i>{' '}
                          <span className="tras-text">DTH</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dash-rvmp-widget bs-graph ui-sortable bs-box">
                  <div className="advertise-h">
                    <div className="row d-flex">
                      <div className="col-sm-12 col-md-8 credit-h">
                        <div className="bal-h">
                          <span className="title">My Credit Cards</span>{' '}
                          <span
                            className="sh-bal pull-right"
                            onClick={this.creditBalanceToggle}
                            id="off"
                          >
                            {' '}
                            Show Balance <span>OFF</span>
                          </span>
                        </div>
                        <div className="card-H">
                          <div>
                            <figure>
                              <img src="images/card.jpg" alt="card" />
                            </figure>{' '}
                            <span className="subtitle">
                              9865 4253 6585 1258
                            </span>{' '}
                            <a href="#" className="white-btn pull-right">
                              Modify Limit
                            </a>
                          </div>
                          <div>
                            <ul className="credit-info">
                              <li>
                                <p className="subtitle">Available Limit</p>
                                <p id="availableLimit">******</p>
                                <a href="#" className="white-btn">
                                  Modify Limit
                                </a>
                              </li>
                              <li>
                                <p className="subtitle">Outstanding Balance</p>
                                <p id="outstandingLimit">******</p>
                                <a href="#" className="white-btn">
                                  Modify Limit
                                </a>
                              </li>
                              <li>
                                <p className="subtitle">Due Balance</p>
                                <p id="prevBalance">******</p>
                                <a href="#" className="white-btn">
                                  Modify Limit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 card-H">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="add-card-h">
                              <h4 className="red-txt">Have a card with us?</h4>
                              <div>
                                Link your credit card with us and get more
                                benefits from your card
                              </div>
                              <a href="#" className="color-btn">
                                Link card
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img src="images/card-hand.jpg" alt="card" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div id="cibilScoreId" className="score-init">
                  {' '}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={this.getCIBILScore}
                >
                  {' '}
                  Get CIBIL Score Now
                </button>

                <div
                  id="C215"
                  className=" dash-rvmp-widget bs-box loan-box loan-summary main-loan"
                >
                  <div className="sec-head">
                    <span className="title" id="Caption6411112">
                      My Loans
                    </span>
                  </div>
                  <div className="loan-h bg-blue-i">
                    <i>
                      <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                    </i>{' '}
                    <a href="#">
                      {' '}
                      <p style={{ margin: 'margin: 0 0 0px' }}>
                        buy your dream car
                      </p>{' '}
                      <span className="grey-text">Loan upto Rs.20,00,000</span>
                    </a>
                  </div>
                  <div className="loan-h bg-blue-i">
                    <i>
                      <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                    </i>{' '}
                    <a href="#">
                      {' '}
                      <p style={{ margin: 'margin: 0 0 0px' }}>
                        {' '}
                        Personal Loan{' '}
                      </p>{' '}
                      <span className="grey-text">
                        Upto Rs.20,00,000 in 3sec
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  id="C217"
                  className=" dash-rvmp-widget bs-box loan-box invest-m"
                >
                  <div className="sec-head">
                    <span className="title" id="Caption6411112">
                      My Investments
                    </span>
                  </div>
                  <div className="loan-h bg-blue-i">
                    <i>
                      <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                    </i>{' '}
                    <a href="#">
                      {' '}
                      <p style={{ margin: 'margin: 0 0 0px' }}>
                        Mutual Funds{' '}
                      </p>{' '}
                      <span className="grey-text">
                        Investment in Mutual Fund is simple and hassel-free{' '}
                      </span>
                    </a>
                  </div>
                  <div className="loan-h bg-blue-i">
                    <i>
                      <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                    </i>{' '}
                    <a href="#">
                      {' '}
                      <p style={{ margin: 'margin: 0 0 0px' }}>PPF </p>{' '}
                      <span className="grey-text">
                        Opening a PPF account is simple and hassel-free
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  id="C216"
                  className=" dash-rvmp-widget bs-box loan-box insurance-box border"
                >
                  <div className="sec-head">
                    <span className="title" id="Caption6411112">
                      My Insurances
                    </span>
                  </div>
                  <div className="loan-h bg-blue-i">
                    <i>
                      <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                    </i>{' '}
                    <a href="#">
                      {' '}
                      <p style={{ margin: 'margin: 0 0 0px' }}>
                        Immediate Pension Plan{' '}
                      </p>
                      <span className="grey-text">
                        Get Rs.70,000 p.a for Life! *T&ampC Apply
                      </span>
                    </a>
                  </div>
                  <div className="loan-h bg-blue-i">
                    <i>
                      <span className="glyphicon glyphicon glyphicon-star-empty"></span>
                    </i>{' '}
                    <a href="#">
                      {' '}
                      <p style={{ margin: 'margin: 0 0 0px' }}>
                        {' '}
                        Health Insurance{' '}
                      </p>{' '}
                      <span className="grey-text">
                        Family cover upto Rs.25 Lakhs *T&ampC Apply
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
