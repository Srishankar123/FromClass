import React from "react"
import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import Home from "../home/Home"
import Contact from "../contact/contact";
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom"
import About from "../about/About"
import PP from "../pp/pp.jsx"
import FAQ from "../faq/faq.jsx"
import TC from "../tc/tc.jsx"
import Story from "../story/story"
import Contents from "../Contents/contentplayer";
import CustomerCrud from "../admin/CustomerCrud";
import LLogin from "../loginsignup/Login"
import Register from "../loginsignup/Register";
import BookManagement from "../admin/BookManagement";
import ControlPlayer from "../Contents/contentplayer";

const Pages = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/pp" component={PP} />
      <Route exact path="/faq" component={FAQ} />
      <Route exact path="/tc" component={TC} />
      <Route exact path="/" component={LLogin} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/story" component={Story} />
      <Route exact path="/content" component={Contents} />
      <Route exact path="/controlplayer/:videoId" component={ControlPlayer} /> {/* New route for ControlPlayer */}

      {/* <Footer /> */}
    </Router>
  );
};

export default Pages;