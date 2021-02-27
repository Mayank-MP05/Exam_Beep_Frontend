import React, { useState, useEffect } from "react";
import Routes from "./routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import Sidebar from "react-sidebar";
import NavbarV from "./components/general/navbar.component";
import SidebarV from "./components/general/sidebar.component";
import FooterV from "./components/general/footer.component";

const mql = window.matchMedia(`(min-width: 800px)`);

function App() {
  const [dock, setdock] = useState(mql.matches);
  const [Sidebaropen, setSidebaropen] = useState(false);
  const [user, setuser] = useState({});
  const [Balance, setBalance] = useState(0);
  const [dp, setdp] = useState(parseInt(user.profilePic));
  const [loggedin, setloggedin] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebaropen(open);
  };

  const cleanuser = () => {
    setloggedin(false);
    setBalance(0);
    localStorage.removeItem("aimnet-user");
    setuser({});
  };

  useEffect(() => {
    let userLocal = localStorage.getItem("aimnet-user");
    if (userLocal) {
      const apiUrl = `http://localhost:5000/api`;
      setuser(JSON.parse(userLocal));
      axios
        .post(`${apiUrl}/getprofile`, {
          email: JSON.parse(userLocal).email,
        })
        .then((res) => {
          setloggedin(true);
          setuser(res.data);
          setdp(res.data.profilePic);
          localStorage.setItem("aimnet-user", JSON.stringify(res.data));
        });
    }
  }, []);

  return (
    <Router>
      <Sidebar
        sidebar={
          <SidebarV
            control={onSetSidebarOpen}
            user={user}
            dp={dp}
            cleanuser={cleanuser}
            loggedin={loggedin}
          />
        }
        open={Sidebaropen}
        docked={dock}
        touch={true}
        onSetOpen={onSetSidebarOpen}>
        <NavbarV onSetSidebarOpen={onSetSidebarOpen} balance={Balance} />
        <div className='container p-3' style={{ marginBottom: "80px" }}>
          <Routes
            loggedin={loggedin}
            setuser={setuser}
            setloggedin={setloggedin}
            user={user}
          />
        </div>
      </Sidebar>
    </Router>
  );
}

export default App;
