import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SubMenu from './subMenu';
import menu from './images/menu.png'

class App extends Component {

  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {

    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });

  }
  render() {
    return (
      <div className="container">
        <button  onClick={this.showMenu} className="menu-btn">
            <img src={menu} width="30" height="30" alt="menu"/>
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <SubMenu/>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default App;
