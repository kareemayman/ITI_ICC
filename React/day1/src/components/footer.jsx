import React, { Component } from 'react'

export default class Footer extends Component {

  state = {
    copy: "© 2025 Kareem Ayman. All rights reserved.",
  }

  render() {
    return (
      <footer>
        {this.state.copy}
      </footer>
    )
  }
}
