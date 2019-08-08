import React, { Component } from 'react';
import Link from 'next/link';

import Logo from '../Logo';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const brandName = 'Jay Fallon';
    return (
      <header>
        <section>
          <Logo url="/" title="Home Page">
            {brandName}
          </Logo>
          <p>header</p>
        </section>
      </header>
    );
  }
}

export default Header;
