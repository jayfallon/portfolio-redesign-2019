import React, { Component } from 'react';
import Link from 'next/link';

import Logo from '../Logo';
import HeaderStyles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const brandName = 'Jay Fallon';
    return (
      <HeaderStyles>
        <section>
          <Logo url="/" title="Home Page">
            {brandName}
          </Logo>
          <p>HeaderStyles</p>
        </section>
      </HeaderStyles>
    );
  }
}

export default Header;
