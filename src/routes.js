import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import LoginV from "./pages/login.page";
import SignupV from "./pages/signup.page";
import SignupC from "./pages/college.signup.page";
import ProfileV from "./pages/profile.page";
import Dashboard from "./pages/Dashboard";

function Routes({ loggedin, setuser, setloggedin, user }) {
  const [music, setmusic] = useState({
    title: "Default title",
    notation: "CDEF GABc|",
  });
  return (
    <Switch>
      <Route path="/dashboard">
        {loggedin ? (
          <Dashboard user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path="/login">
        {loggedin ? (
          <Dashboard user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path="/signup">
        {loggedin ? (
          <Dashboard user={user} />
        ) : (
          <SignupV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path="/collegeSignup">
        {loggedin ? (
          <Dashboard user={user} />
        ) : (
          <SignupC setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path="/profile">
        {loggedin ? (
          <ProfileV user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path="/test">
        {loggedin ? (
          <Dashboard user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path="/*">
        {loggedin ? (
          <Dashboard user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
    </Switch>
  );
}

export default Routes;
