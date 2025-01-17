import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home.js";
import Drivers from "../Drivers/Drivers.js";
import Add from "../Add/Add.js";
import Update from "../Update/Update.js";
import Remove from "../Remove/Remove.js";
import "./App.css";

// const searchUrl = "https://f1-mern-app-api.herokuapp.com";
const searchUrl = "localhost:3001";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const opts = {
      height: "800",
      width: "1200",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https:i.ndtvimg.com/i/2017-11/f1-logo-2018_827x510_81511713381.png"
              alt=""
            />
          </Link>
          <Link to="/drivers">
            <h3>Drivers</h3>
          </Link>
        </nav>
        <main>
          <Route path="/" exact component={Home}>
            <Drivers />
          </Route>
        </main>
      </div>
    );
  }
}
// constructor(props) {
//   super(props);
//   this.state = {
//     drivers: []
//   };
// }
// componentDidMount() {
//   axios
//     .get(searchUrl)
//     .then(response => {
//       this.setState({
//         drivers: response.data
//       });
//       console.log(this.state.drivers);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }
// render() {
//   const opts = {
//     height: "800",
//     width: "1200",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1
//     }
//   };
//   return (
//     <div>
//       <nav>
//         <Link to="/">
//           <img
//             src="https://i.ndtvimg.com/i/2017-11/f1-logo-2018_827x510_81511713381.png"
//             alt=""
//           />
//         </Link>
//         <Link to="/drivers">
//           <h3>Drivers</h3>
//         </Link>
//       </nav>
//       <main>
//         <Route path="/" exact component={Home} />
//         <Route
//           path="/drivers"
//           exact
//           render={routerProps => (
//             <Drivers driverData={this.state.drivers} {...routerProps} />
//           )}
//         />
//         <Route path="/drivers/add" exact component={Add} />
//         <Route
//           path="/drivers/update"
//           exact
//           render={routerProps => (
//             <Update driverData={this.state.drivers} {...routerProps} />
//           )}
//         />
//         <Route
//           path="/drivers/remove"
//           exact
//           render={routerProps => (
//             <Remove driverData={this.state.drivers} {...routerProps} />
//           )}
//         />
//       </main>
//     </div>
//   );
// }
// }

export default App;
