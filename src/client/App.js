import React, { Component } from 'react';
import Header from './core/header';
import Footer from './core/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="item active">
                <img
                  src="images/eva1.jpg"
                  alt="Los Angeles"
                />
              </div>

              <div className="item">
                <img
                  src="images/eva2.jpg"
                  alt="Chicago"
                />
              </div>

              <div className="item">
                <img
                  src="images/eva4.jpg"
                  alt="New york"
                />
              </div>
            </div>
            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>

            <div className="col-sm-4">
              <div className="column">
                <div className="card">
                  <h3>Secure Transactions</h3>
                  <p>
                    <img src="https://www.equitasbank.com/sites/default/files/inline-images/Secure-Transactions.png" />
                  </p>
                  <p>
                    Transact in a safe and secure environment with enhanced
                    security features like Secret Q&A or OTP to safeguard your
                    details
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="column">
                <div className="card">
                  <h3>Anywhere & Anytime</h3>
                  <p>
                    <img src="https://www.equitasbank.com/sites/default/files/inline-images/Anywhere-Anytime.png" />
                  </p>
                  <p>Transact from anywhere at anytime.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="column">
                <div className="card">
                  <h3>Easy Login</h3>
                  <p>
                    <img src="https://www.equitasbank.com/sites/default/files/inline-images/easy-login.png" />
                  </p>
                  <p>Login Using MPIN or FRS (Face Recognition System)</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '75px' }}>
            <div className="container-fluid text-center interest-rates">
              <h3>INTEREST RATES</h3>
              <div className="row">
                <div className="col-sm-3">
                  <h5>Starting From</h5>
                  <i
                    className="glyphicon glyphicon-ok-circle"
                    style={{ fontSize: '50px' }}
                  ></i>
                  <h4 data-max="5">% Savings Accounts</h4>
                </div>
                <div className="col-sm-3">
                  <h5>Starting From</h5>
                  <i
                    className="glyphicon glyphicon-thumbs-up"
                    style={{ fontSize: '50px' }}
                  ></i>
                  <h4 data-max="5.5">% Fixed Deposit</h4>
                </div>
                <div className="col-sm-3">
                  <h5>Starting From</h5>
                  <i
                    className="glyphicon glyphicon-user"
                    style={{ fontSize: '50px' }}
                  ></i>
                  <h4 data-max="10.50">% personal Loan </h4>
                </div>
                <div className="col-sm-3">
                  <h5>Starting From</h5>
                  <i
                    className="glyphicon glyphicon-home"
                    style={{ fontSize: '50px' }}
                  ></i>
                  <h4 data-max="6.75" id="test">
                    % Home Loan
                  </h4>
                </div>
              </div>
            </div>

            <ul
              className="nav nav-pills"
              style={{ paddingLeft: '35%', backgroundColor: '#eee' }}
            >
              <li className="active">
                <a data-toggle="pill" href="#home">
                  Find the right product for you
                </a>
              </li>
              <li>
                <a data-toggle="pill" href="#menu1">
                  Life Stage Solutions
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="home" className="tab-pane fade in active">
                <h3 className="text-center" style={{ color: '#19438d' }}>
                  GREAT OFFERS FOR GREAT EXPERIENCES
                </h3>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <h4>Get 20% discount on food order on Swiggy</h4>
                      <div className="image-text">
                        <p>Pay using Equitas Bank Net Banking</p>
                        <p>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: '#d01e2e',
                              color: '#fff'
                            }}
                          >
                            {' '}
                            Know More{' '}
                            <i className="glyphicon glyphicon-arrow-right"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <h4>Zomato Offer - 60% off up to Rs. 200</h4>
                      <div className="image-text">
                        <p>Pay using Equitas Bank Net Banking or Pockets</p>
                        <p>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: '#d01e2e',
                              color: '#fff'
                            }}
                          >
                            {' '}
                            Know More{' '}
                            <i className="glyphicon glyphicon-arrow-right"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <h4>Pepperfry Offer - Get additional 5% off</h4>
                      <div className="image-text">
                        <p>Pay using Equitas Bank Credit or Debit Card</p>
                        <p>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: '#d01e2e',
                              color: '#fff'
                            }}
                          >
                            {' '}
                            Know More{' '}
                            <i className="glyphicon glyphicon-arrow-right"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 text-center">
                  <button
                    className="btn"
                    style={{ backgroundColor: '#d01e2e', color: '#fff' }}
                  >
                    {' '}
                    View All{' '}
                  </button>
                </div>
              </div>
              <div id="menu1" className="tab-pane fade">
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <p style={{ float: 'right' }}>
                        <img src="https://www.icicibank.com/assets/images/tabs1/startingacareer-thumb-new.png" />
                      </p>
                      <div className="image-text">
                        <h4>Starting a Career</h4>
                        <p className="ic-more">
                          <a href="#">View Solutions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <p style={{ float: 'right' }}>
                        <img src="https://www.icicibank.com/assets/images/tabs1/workingprofessional-thumb-new.png" />
                      </p>
                      <div className="image-text">
                        <h4>Working Professional</h4>
                        <p className="ic-more">
                          <a href="#">View Solutions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <p style={{ float: 'right' }}>
                        <img src="https://www.icicibank.com/assets/images/tabs1/earlyparent-thumb-new.png" />
                      </p>
                      <div className="image-text">
                        <h4>Early Parent </h4>
                        <p className="ic-more">
                          <a href="#">View Solutions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <p style={{ float: 'right' }}>
                        <img src="https://www.icicibank.com/assets/images/tabs1/familyperson-thumb-new.png" />
                      </p>
                      <div className="image-text">
                        <h4>Family Person</h4>
                        <p className="ic-more">
                          <a href="#">View Solutions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <p style={{ float: 'right' }}>
                        <img src="https://www.icicibank.com/assets/images/tabs1/seniorcitizen-thumb-new.png" />
                      </p>
                      <div className="image-text">
                        <h4>Senior Citizen </h4>
                        <p className="ic-more">
                          <a href="#">View Solutions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="column">
                    <div className="card-second">
                      <p style={{ float: 'right' }}>
                        <img src="https://www.icicibank.com/assets/images/tabs1/working-women-thumb-new.png" />
                      </p>
                      <div className="image-text">
                        <h4>Working Women</h4>
                        <p className="ic-more">
                          <a href="#">View Solutions</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="jumbotron text-center"
          style={{ marginBottom: '0px', marginTop: '10px' }}
        >
          <div className="section-inner">
            <h2
              className="section-title wow fadeInUp"
              style={{ visibility: 'visible' }}
            >
              <strong>We take your security</strong>
              <br />
              seriously !
            </h2>
            <div
              className="content wow fadeInUp"
              style={{ visibility: 'visible' }}
            >
              <div className="block">
                <p>
                  Peace of mind for you as we have the most advanced technology
                  &amp; protection
                </p>
              </div>
              <div className="col-sm-4">
                <div className="block">
                  <span className="icon">
                    <img
                      alt="2 Factor"
                      src="https://www.icicibank.com/assets/images/icons/two_factor_icon.png"
                    />
                  </span>
                  <h4>2 Factor i-safe authentication</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="block">
                  <span className="icon">
                    <img
                      alt="End-to-end 256 bit Encryption"
                      src="https://www.icicibank.com/assets/images/icons/e_to_e_en.png"
                    />
                  </span>
                  <h4>End-to-end 256 bit Encryption</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="block">
                  <span className="icon">
                    <img
                      alt=""
                      src="https://www.icicibank.com/assets/images/icons/secure_contact.png"
                    />
                  </span>
                  <h4>We make you feel special</h4>
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

export default App;
