import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import LoginV from "./pages/login.page";
import SignupV from "./pages/signup.page";

function Routes({ loggedin, setuser, setloggedin, user }) {
  return (
    <Switch>
      <Route path='/dashboard'>
        {/*
        {loggedin ? (
          <AllTracks flag={1} user={user} setmusic={setmusic} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
        */}
        <Route path='/login'>
          {loggedin ? (
            "Dashboard"
          ) : (
            <LoginV setuser={setuser} setloggedin={setloggedin} />
          )}
        </Route>
        <Route path='/signup'>
          {loggedin ? (
            "Dashboard"
          ) : (
            <SignupV setuser={setuser} setloggedin={setloggedin} />
          )}
        </Route>
        {/*
      <Route path='/profile'>
        {loggedin ? (
          <ProfileV user={user} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/test'>
        {loggedin ? (
          <Player user={user} notation={music.notation} title={music.title} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
      </Route>
      <Route path='/*'>
        {loggedin ? (
          <AllTracks user={user} setmusic={setmusic} />
        ) : (
          <LoginV setuser={setuser} setloggedin={setloggedin} />
        )}
        */}
      </Route>
    </Switch>
  );
}

export default Routes;
