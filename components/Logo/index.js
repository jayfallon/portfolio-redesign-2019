import React, { Component } from 'react';
import Link from 'next/link';

import LogoStyles from './styles';

class Logo extends Component {
  render() {
    const { url, title, children } = this.props;
    return (
      <LogoStyles>
        <Link href={url}>
          <a title={title}>
            <span>{children}</span>
          </a>
        </Link>
      </LogoStyles>
    );
  }
}

export default Logo;
