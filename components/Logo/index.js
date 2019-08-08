import React, { Component } from 'react';
import Link from 'next/link';

class Logo extends Component {
  render() {
    const { url, title, children } = this.props;
    return (
      <h1>
        <Link href={url}>
          <a title={title}>
            <span>{children}</span>
          </a>
        </Link>
      </h1>
    );
  }
}

export default Logo;
