import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// Views
import Home from './Views/Home/Home'
import Footer from './Components/Footer/Footer'
import AboutUs from './Views/AboutUs/AboutUs'
import Services from './Views/Services/Services'
import ScrollToTop from './ScrollToTop'
import Contact from './Views/Contact/Contact'
import NavBarUser from './Components/NavBar/NavBarUser'
import Register from './Views/Contact/Register'
import Tracking from './Views/Tracking/Tracking'
import Partners from './Views/Partners/Partners'
import ContactPage from './Views/Partners/ContactPage'
import PrivacyPolicy from './Views/PrivacyPolicy/PrivacyPolicy'
import CustomerForm from './Views/CustomerForm/CustomerForm'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBarUser />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs />
        </Route>
        <Route path="/services" exact>
          <Services />
        </Route>
        <Route path="/drivers" exact>
          <Partners />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/tracking">
          <Tracking />
        </Route>
        <Route path="/driver-register">
          <ContactPage />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/:wefleet_id/:token/customer-form">
          <CustomerForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
