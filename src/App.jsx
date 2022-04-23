import React from "react";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import HomePage from "./pages/homePage/HomePage";
import AboutUsPage from "./pages/about/AboutUsPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import CardPanel from "./pages/cards/CardPanel";
import CardInfoPage from "./pages/cards/CardInfoPage";
import CreateNewBizCard from "./pages/cards/CreateNewBizCard";
import FooterComponent from "./components/Footer/FooterComponent";
import AuthGuardRoute from "./components/AuthGuardRoute";

function App() {
  return (
    <div className="container-app">
      <NavBarComponent></NavBarComponent>
      <ToastContainer />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
          <HomePage></HomePage>
        </Route>

        <AuthGuardRoute path="/home" exact component={HomePage} />

        <Route path="/about" exact component={AboutUsPage} />

        <Route path="/login" exact component={LoginPage} />

        <Route path="/signUp" exact component={SignUpPage} />

        <AuthGuardRoute path="/cardPanel" exact component={CardPanel} />

        <AuthGuardRoute
          path="/createNewBizCard"
          exact
          component={CreateNewBizCard}
        />
      </Switch>

      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
