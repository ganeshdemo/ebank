import React, { Component } from 'react';
import Footer from '../core/footer';
import { NavLink } from "react-router-dom";

class BankDetails extends Component {
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
                      style={{ fontSize: '25px', marginTop: '-10px' }}
                    ></span>
                  </a>
                </li>
                <li>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '5px' }}
                  >
                    logout
                  </button>
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
        <div className="container-fluid">
          <div className="row main bank-d">
            <div className="col-md-3">
              <div className="user-dataH">
                <p className="userName">Ganesh Madhukar Jamdade</p>
                <div className="user-detail">
                  <i className="glyphicon glyphicon-user"></i>
                  <div className="links">
                    <a href="#" className="redBtn">
                      Personal Details
                    </a>
                    <a href="#" className="redBtn">
                      Generate Card Pin
                    </a>
                  </div>
                  <p className="smallTxt">
                    Last visited 02/07/2021 13:38:45 IST
                  </p>
                </div>
              </div>
              <div className="serv-H">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <i className="glyphicon glyphicon-user"></i>
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Accounts
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">Work In Progress</div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <i className="glyphicon glyphicon-user"></i>
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Deposits
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">Work In Progress</div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <i className="glyphicon glyphicon-user"></i>
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Eva Savings
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">Work In Progress</div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <i className="glyphicon glyphicon-user"></i>
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          Pockets
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFour"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFour"
                    >
                      <div className="panel-body">Work In Progress</div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          <i className="glyphicon glyphicon-user"></i>
                          <i className="more-less glyphicon glyphicon-plus"></i>
                          PPF Account
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseFive"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingFive"
                    >
                      <div className="panel-body">Work In Progress</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="quick-linksH">
                <h4>Quick Links</h4>
                <a href="#" className="link-btn redBtn">
                  Customize Links
                </a>
                <ul className="linkH">
                  <li>
                    <a href="#">Bank Account e-statment</a>
                  </li>
                  <li>
                    <a href="#">Credit Card e-statment</a>
                  </li>
                  <li>
                    <a href="#">Cheque Book Request</a>
                  </li>
                  <li>
                    <a href="#">Fund Transfer</a>
                  </li>
                  <li>
                    <a href="#">Pay Bills</a>
                  </li>
                  <li>
                    <a href="#">Recharge</a>
                  </li>
                  <li>
                    <a href="#">Reward Points</a>
                  </li>
                  <li>
                    <a href="#">Open Deposits</a>
                  </li>
                  <li>
                    <a href="#">e-statment</a>
                  </li>
                  <li>
                    <a href="#">Buy Gold/Silver</a>
                  </li>
                  <li>
                    <a href="#">PPF Accounts</a>
                  </li>
                  <li>
                    <a href="#">Service Requests</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <div className="totalBalH">
                <div className="totalFstH">
                  <div className="title">Total Balance</div>
                  <div className="row">
                    <div className="col-md-6">
                      <i></i> <span>Saving INR</span> 12,12,334
                    </div>
                    <div className="col-md-6">
                      <span>insta Flexicash Limit : Rs. 310000, </span>
                      <a href="#">Avail Now</a>
                    </div>
                  </div>
                </div>
                <div className="totalScdH">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Select</th>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Available Balance</th>
                        <th>Linked FD Balance</th>
                        <th>Total Available Balance</th>
                        <th>Status as of</th>
                        <th>Currency</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="radio" name="" />
                        </td>
                        <td>Ganesh Madhukar Jamdade</td>
                        <td>120003456</td>
                        <td>12,12,334</td>
                        <td>0.00</td>
                        <td>12,12,334</td>
                        <td>
                          <date>05/07/2021</date> <time>14:07:53</time>
                        </td>
                        <td>INR</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="8">
                          <a href="#">View Mini Statement</a>&nbsp;&nbsp;&nbsp;
                          <a href="#">View Detailed Statement</a>
                          &nbsp;&nbsp;&nbsp;
                          <a href="#">Add Fund</a>&nbsp;&nbsp;&nbsp;
                          <select>
                            <option>Cheque Status Inquiry</option>
                            <option>Open status</option>
                            <option>Closed status</option>
                          </select>
                        </th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="detail-download">
                  Download Details As:
                  <select>
                    <options>Cheque Status Inquiry</options>
                    <options></options>
                    <options></options>
                  </select>
                  <a href="#">Ok</a>
                </div>
              </div>
              <div className="preQuaOffers">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <i></i> Salary OD
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Avail Now</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i></i> Two Wheeler Loan
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Insta Sanction</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i></i> Car Loan
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Insta Sanction</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i></i> Consumer Durables
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Avail Now</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i></i> Credit Card
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Insta Sanction</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i></i> Personal Loan
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Avail Now</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i></i> Pay Later
                      </td>
                      <td>
                        Click here to get an Insta Flexicash Limit of
                        Rs.3,10,000
                      </td>
                      <td>
                        <a href="#">Insta Sanction</a>
                      </td>
                      <td>
                        <a href="#">Know More</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="allDetailsH">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Branch</th>
                      <th>All Bank Accounts</th>
                      <th>All Deposit Accounts</th>
                      <th>Total Balance</th>
                      <th>Total Assets</th>
                      <th>Status as of</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pune Fatimanager,</td>
                      <td>12,12,334 INR</td>
                      <td>Not Available</td>
                      <td>12,12,334 INR</td>
                      <td>12,12,334 INR</td>
                      <td>
                        <date>05/07/2021</date> <time>14:07:53</time>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default BankDetails;
