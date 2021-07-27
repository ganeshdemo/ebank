import React, { Component } from 'react';
import Header from '../core/header';
import Footer from '../core/footer';

class Login extends Component {
  constructor(props) {
    super(props);
    //this.state={inputfield: "no value"};
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = this.state = {
      loginusername: '',
      loginpassword: '',
      pinusername: '',
      otpusername: '',
      otppassword: '',
      twofactorusername: '',
      twofactorpin: '',
      twofactorotp: ''
    };
  }

  generateOTP() {
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      'http://10.254.8.218:9080/mfp/api/adapters/javaAdapter/resource/generateOTP'
    );
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('tempOTP').innerHTML = this.responseText;
        //otpFirst = this.responseText;
      }
    };
    request.send();
  }
  generateOTP1() {
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      'http://10.254.8.218:9080/mfp/api/adapters/javaAdapter/resource/generateOTP'
    );
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('tempOTP1').innerHTML = this.responseText;
        //otpSecond = this.responseText;
      }
    };
    request.send();
  }
  handleClick = event => {
    event.preventDefault();

    if (event.target.id == 'loginForm') {
      var url =
        'http://10.254.8.218:9080/mfp/api/adapters/javaAdapter/resource/loginPost';
      var mythis = this;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          var statusStr = this.responseText;
          var status = JSON.parse(statusStr);
          if (status.Status == 'Success') {
            mythis.props.history.push('/dashboard');
          } else {
            document.getElementById('loginStatusMsg').innerHTML =
              'Username Or Password wrong';
          }
        }
      };
      var myForm = document.getElementById('loginForm');
      var formData = new FormData(myForm);
      request.send(formData);
    } else if (event.target.id == 'pinForm') {
      var url =
        'http://10.254.8.218:9080/mfp/api/adapters/javaAdapter/resource/pinAuth';
      var mythis = this;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          //document.getElementById("statusOTP").innerHTML = this.responseText;
          var statusStr = this.responseText;
          var status = JSON.parse(statusStr);
          if (status.Status == 'Success') {
            mythis.props.history.push('/dashboard');
          } else {
            document.getElementById('pinStatusMsg').innerHTML = 'PIN is wrong';
          }
        }
      };
      var myForm = document.getElementById('pinForm');
      var formData = new FormData(myForm);
      request.send(formData);
    } else if (event.target.id == 'optForm') {
      var url =
        'http://10.254.8.218:9080/mfp/api/adapters/javaAdapter/resource/otpAuth';
      // var myOtp = document.getElementById('tempOTP').innerHTML;
      var mythis = this;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          //document.getElementById("statusOTP").innerHTML = this.responseText;
          var statusStr = this.responseText;
          var status = JSON.parse(statusStr);
          if (status.Status == 'Success') {
            mythis.props.history.push('/dashboard');
          } else {
            document.getElementById('otpStatusMsg').innerHTML = 'OTP is Wrong';
          }
        }
      };
      var myForm = document.getElementById('optForm');
      var formData = new FormData(myForm);
      request.send(formData);
    } else if (event.target.id == 'twofactorForm') {
      var url =
        'http://10.254.8.218:9080/mfp/api/adapters/javaAdapter/resource/twoFactorAuth';
      var mythis = this;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          //document.getElementById("statusOTP").innerHTML = this.responseText;
          var statusStr = this.responseText;
          var status = JSON.parse(statusStr);
          if (status.Status == 'Success') {
            mythis.props.history.push('/dashboard');
          } else {
            document.getElementById('twoFactorStatusMsg').innerHTML =
              'Two factor authentication failed';
          }
        }
      };
      var myForm = document.getElementById('twofactorForm');
      var formData = new FormData(myForm);
      request.send(formData);
    }
  };

  updateInputValue(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <section className="banner">
            <img
              alt="Bill Pay Banner"
              className="banner-img"
              src="https://www.icicibank.com//managed-assets/images/personal/safe-banking/bill-pay-start-of-the-month-primer-1.jpg"
            />
            <div
              id="login-overlay"
              className="modal-dialog"
              style={{ marginRight: '10px', minHeight: '455px' }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a data-toggle="tab" href="#home">
                        Login
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu1">
                        Pin
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu2">
                        OTP
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#menu3">
                        2 Factor
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="tab-content">
                        <div id="home" className="tab-pane fade in active">
                          <div className="well">
                            <form
                              id="loginForm"
                              onSubmit={evt => this.handleClick(evt)}
                            >
                              <div className="form-group">
                                <label
                                  htmlFor="username"
                                  className="control-label"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  name="username"
                                  defaultValue=""
                                  required=""
                                  title="Please enter you username"
                                  placeholder=""
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="password"
                                  className="control-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  defaultValue=""
                                  required=""
                                  title="Please enter your password"
                                  placeholder="****"
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <div id="loginStatusMsg"></div>
                              <button
                                type="submit"
                                className="btn btn-block"
                                style={{
                                  backgroundColor: '#d01e2e',
                                  color: '#fff'
                                }}
                              >
                                Login
                              </button>
                              <a href="#" className="btn btn-default btn-block">
                                Help to login
                              </a>
                            </form>
                          </div>
                        </div>
                        <div id="menu1" className="tab-pane fade">
                          <div className="well">
                            <form
                              id="pinForm"
                              onSubmit={evt => this.handleClick(evt)}
                            >
                              <div className="form-group">
                                <label
                                  htmlFor="username"
                                  className="control-label"
                                >
                                  Pin
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="pin"
                                  name="pin"
                                  defaultValue=""
                                  required=""
                                  title="Please enter you username"
                                  placeholder="****"
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-block"
                                style={{
                                  backgroundColor: '#d01e2e',
                                  color: '#fff'
                                }}
                              >
                                Login
                              </button>
                              <div id="pinStatusMsg"></div>
                              <a href="#" className="btn btn-default btn-block">
                                Help to login
                              </a>
                            </form>
                          </div>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                          <div className="well">
                            <form
                              id="optForm"
                              onSubmit={evt => this.handleClick(evt)}
                            >
                              <div className="form-group">
                                <label
                                  htmlFor="username"
                                  className="control-label"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="otpusername"
                                  name="otpusername"
                                  defaultValue=""
                                  required=""
                                  title="Please enter you username"
                                  placeholder=""
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <div className="form-group">
                                <button
                                  className="btn btn-block"
                                  style={{
                                    backgroundColor: '#d01e2e',
                                    color: '#fff'
                                  }}
                                  type="button"
                                  onClick={this.generateOTP}
                                >
                                  Generate OTP
                                </button>
                              </div>
                              <div id="tempOTP"> </div>
                              <div className="form-group">
                                <label
                                  htmlFor="password"
                                  className="control-label"
                                >
                                  OTP
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="OTP"
                                  name="OTP"
                                  defaultValue=""
                                  required=""
                                  title="Please enter your password"
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-block"
                                style={{
                                  backgroundColor: '#d01e2e',
                                  color: '#fff'
                                }}
                              >
                                Login
                              </button>
                              <div id="otpStatusMsg"></div>
                              <a href="#" className="btn btn-default btn-block">
                                Help to login
                              </a>
                            </form>
                          </div>
                        </div>
                        <div id="menu3" className="tab-pane fade">
                          <div className="well">
                            <form
                              id="twofactorForm"
                              onSubmit={evt => this.handleClick(evt)}
                            >
                              <div className="form-group">
                                <label
                                  htmlFor="username"
                                  className="control-label"
                                >
                                  Username
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="usss"
                                  name="usss"
                                  defaultValue=""
                                  required=""
                                  title="Please enter you username"
                                  placeholder=""
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="password"
                                  className="control-label"
                                >
                                  Pin
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="PIN"
                                  name="PIN"
                                  defaultValue=""
                                  required=""
                                  title="Please enter your password"
                                  placeholder="****"
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <div className="form-group">
                                <button
                                  className="btn btn-block"
                                  style={{
                                    backgroundColor: '#d01e2e',
                                    color: '#fff'
                                  }}
                                  type="button"
                                  onClick={this.generateOTP1}
                                >
                                  Generate OTP
                                </button>
                              </div>
                              <div id="tempOTP1"> </div>
                              <div className="form-group">
                                <label
                                  htmlFor="password"
                                  className="control-label"
                                >
                                  OTP{' '}
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="OTP"
                                  name="OTP"
                                  defaultValue=""
                                  required=""
                                  title="Please enter your password"
                                  placeholder="****"
                                  onChange={evt => this.updateInputValue(evt)}
                                />
                                <span className="help-block"></span>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-block"
                                style={{
                                  backgroundColor: '#d01e2e',
                                  color: '#fff'
                                }}
                              >
                                Login
                              </button>
                              <div id="twoFactorStatusMsg"></div>
                              <a href="#" className="btn btn-default btn-block">
                                Help to login
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="col-sm-8">
              <div className="column">
                <div className="card-third">
                  <div className="info">
                    <h5>Important Notices</h5>
                    <ul>
                      <li>
                        Due to a scheduled maintenance activity, you will be
                        unable to set transaction controls on your Equitas Bank
                        Credit Cards through Internet Banking and iMobile Pay
                        from 23:00:00 on Jun 25, 2021 to 23:59:59 on Jun 30,
                        2021. We regret the inconvenience caused.
                      </li>
                      <li>
                        Effective Apr 01, 2021, due to the merger of Oriental
                        Bank of Commerce and United Bank of India with Punjab
                        National Bank, there will be a change in the IFSC codes.
                        Please check the updated information and update your
                        payee details accordingly, to have a seamless
                        transaction experience.
                      </li>
                      <li>
                        If you are using an old version of Internet Explorer,
                        please update to the latest version immediately, to
                        enjoy a seamless banking experience.
                      </li>
                      <li>
                        As per the RBI guidelines, a Positive Pay feature for
                        Cheque Truncation System shall be applicable from Jan
                        01, 2021. Please{' '}
                        <a
                          className="para-link"
                          href="https://www.icicibank.com/mobile-banking/imobile/imobile-positive-pay.page"
                          target="_blank"
                        >
                          Click Here
                        </a>{' '}
                        for details.
                      </li>
                      <li>
                        As per RBI guidelines, Real-Time Gross Settlement (RTGS)
                        is available 24x7 with effect from Dec 14, 2020. Please{' '}
                        <a
                          className="para-link"
                          href="https://www.icicibank.com/Personal-Banking/onlineservice/online-services/FundsTransfer/neft-rtgs.page"
                          target="_blank"
                        >
                          click here
                        </a>{' '}
                        for details.
                      </li>
                      <li>
                        Introduction of charges for cash deposit in Cash
                        Acceptor/Recycler Machines on bank holidays and post
                        banking hours on working days with effect from Nov 01,
                        2020.{' '}
                        <a
                          className="para-link"
                          href="https://www.icicibank.com/managed-assets/docs/personal/customer-notice-CRM-charging.pdf"
                          target="_blank"
                        >
                          Click here
                        </a>{' '}
                        to know more.
                      </li>
                      <li>
                        As per RBI guidelines, National Electronic Funds
                        Transfer (NEFT) is available 24x7 with effect from Dec
                        16, 2019. Please{' '}
                        <a
                          className="para-link"
                          href="https://www.icicibank.com/Personal-Banking/onlineservice/online-services/FundsTransfer/neft-rtgs.page"
                          target="_blank"
                        >
                          click here
                        </a>{' '}
                        for details.
                      </li>
                      <li>
                        OTP/URN for internet banking transactions for NRI
                        customers which was earlier sent on email, is now sent
                        on SMS at customer’s registered India/International
                        Mobile numbers. Key transactions where OTP/URN will be
                        sent on SMS are- Funds Transfer/Add payee or
                        biller*/Online User id/Password generation and Risk
                        based OTP. Please note that post new payee/biller
                        addition, there will be a 30 minutes cooling period
                        before NRI customers can initiate a transaction to the
                        newly added payee/biller
                      </li>
                      <li>
                        <strong>
                          Please note funds from NRO/Resident accounts cannot be
                          transferred to an NRE account
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="column" style={{ padding: '0 0px' }}>
                <div className="card-third">
                  <div className="info">
                    <div className="heading">
                      <img
                        src="https://www.icicibank.com/assets/img/question.png"
                        alt=" question mark icon"
                      />
                      <h5>Did you know</h5>
                    </div>
                    <ul>
                      <li>
                        Experience the all new Bill Pay! Over 18,000+ Billers to
                        pay from. Simply choose your Biller and pay Bill in few
                        clicks.
                      </li>
                      <li>
                        Have a dream to fulfil or a goal to achieve? Get the
                        funds you need with an Equitas Bank Instant Personal
                        Loan. T&amp;C apply.
                      </li>
                      <li>
                        Cannot save every month? No worries! With iWish Flexible
                        RD you can save any amount, anytime to achieve your
                        wishes.&nbsp;
                        <a
                          className="para-link"
                          href="https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&amp;__START_TRAN_FLAG__=Y&amp;FG_BUTTONS__=LOAD&amp;ACTION.LOAD=Y&amp;AuthenticationFG.LOGIN_FLAG=1&amp;BANK_ID=ICI&amp;CTA_FLAG=IWISH&amp;ITM=nli_cms_primer_didyouknow_iwish"
                          target="_blank"
                        >
                          Create your goal
                        </a>
                        . T&amp;C apply.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
