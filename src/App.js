import React from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Dashbord from './components/Dashbord';
import Profile from './components/Profile';
import ExchangeCurrency from './components/ExchangeCurrency';
import MoneyTransfer from './components/MoneyTransfer';
import WithdrawMoney from './components/WithdrawMoney';
import Support from './components/Support';
import Error from './components/Error';
import Blog from './components/Blog'
import BlogDEtail from './components/BlogDEtail';
import ContactUs from './components/ContactUs';
import Invoice from './components/Invoice';
import RequestMoney from './components/RequestMoney'
import TransactionLog from './components/TransactionLog'
import Voucher from './components/Voucher'
import { Redirect, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
     <Route exact path='/' component={Landing} />
     <Route exact path='/contact-us' component={ContactUs} />
     <Route exact path='/blog' component={Blog} />
     <Route exact path='/create-account' component={Register}/>
     <Route exact path='/dashboard' component={Dashbord} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/exchange-currency' component={ExchangeCurrency}/>
     <Route exact path='/money-transfer' component={MoneyTransfer}/>
     <Route exact path='/profile' component={Profile}/>
     <Route exact path='/vouchers' component={Voucher}/>
     <Route exact path='/transaction-log' component={TransactionLog} />
     <Route exact path='/support' component={Support}/>
     <Route exact path='/invoice' component={Invoice}/>
     <Route exact path='/withdraw-money' component={WithdrawMoney} />
     <Route exact path='/request-money' component={RequestMoney} />
     <Route exact path='*' component={Error}/>
     </Switch>
     <Newsletter />
     <Footer />
    </div>
  );
}

export default App;
