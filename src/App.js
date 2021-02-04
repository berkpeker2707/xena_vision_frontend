import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";
import Reviews from "./components/reviews/Reviews";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/Routing/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
