import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/Welcome";
import Navigation from "./components/Navigation";
import HotRoute from "./components/HotRoute";
import NormalRoute from "./components/NormalRoute";
import FavouriteMems from "./components/FavouriteMems";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import mem1 from "./images/cytryny.jpg";
import mem2 from "./images/duchowny.jpg";
import mem3 from "./images/kot.jpg";
import mem4 from "./images/poduszka.jpg";
import mem5 from "./images/sweter.jpg";
import mem6 from "./images/wstawanie.jpg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memArray: [
        {
          id: 1,
          img: mem1,
          name: "Cytryny",
          like: 7,
          dislike: -1,
          favourite: false,
        },
        {
          id: 2,
          img: mem2,
          name: "Duchowny",
          like: 2,
          dislike: -6,
          favourite: true,
        },
        {
          id: 3,
          img: mem3,
          name: "Kot to sztuka",
          like: 1,
          dislike: -1,
          favourite: true,
        },
        {
          id: 4,
          img: mem4,
          name: "Przeproś kołdrę",
          like: 5,
          dislike: -1,
          favourite: false,
        },
        {
          id: 5,
          img: mem5,
          name: "Sweterek od babci",
          like: 0,
          dislike: 0,
          favourite: false,
        },
        {
          id: 6,
          img: mem6,
          name: "Każdy poranek",
          like: 14,
          dislike: -6,
          favourite: false,
        },
      ],
    };
  }

  likesCount = (id) => {
    let memArray = [...this.state.memArray];
    memArray.forEach((mem) => {
      if (mem.id === id) {
        ++mem.like;
      }
    });
    this.setState({ memArray });
  };

  dislikesCount = (id) => {
    let memArray = [...this.state.memArray];
    memArray.forEach((mem) => {
      if (mem.id === id) {
        --mem.dislike;
      }
    });
    this.setState({ memArray });
  };

  favouriteMem = (id) => {
    let memArray = [...this.state.memArray];
    memArray.forEach((mem) => {
      if (mem.id === id) {
        mem.favourite = !mem.favourite;
      }
    });
    this.setState({ memArray });
  };

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/regular">
            <NormalRoute
              memArray={this.state.memArray}
              likesCount={this.likesCount}
              dislikesCount={this.dislikesCount}
              favouriteMem={this.favouriteMem}
            />
          </Route>

          <Route exact path="/hot">
            <HotRoute
              memArray={this.state.memArray}
              likesCount={this.likesCount}
              dislikesCount={this.dislikesCount}
              favouriteMem={this.favouriteMem}
            />
          </Route>

          <Route exact path="/favourite">
            <FavouriteMems
              memArray={this.state.memArray}
              likesCount={this.likesCount}
              dislikesCount={this.dislikesCount}
              favouriteMem={this.favouriteMem}
            />
          </Route>

          <Route exact path="/*">
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
