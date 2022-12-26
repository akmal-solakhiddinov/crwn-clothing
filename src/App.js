import React from "react";
import HomePage from "./pages/homepage/homePage.comoponent";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-AND-up-PAGES/sign-in_and_up-page";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          {/* <Route path="/contact" element={<ContactPage />} />b */}
          <Route path="/signIn" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
