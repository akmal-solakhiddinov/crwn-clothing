import React from "react";
import HomePage from "../src/pages/homepage/homePage.comoponent";
import { Route, Routes } from "react-router-dom";
import ShopPage from "../src/pages/shop/shop";
import Header from "../src/components/header/header";
import SignInAndSignUpPage from "../src/pages/sign-in-AND-up-PAGES/sign-in_and_up-page";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = (displatch) => ({
  setCurrentUser: (user) => displatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
