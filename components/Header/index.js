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
    const brandTag = 'Digital Design & Development';
    const headerNav = [
      {
        title: 'Home page link',
        url: '/',
        text: 'home',
      },
      {
        title: 'resume page link',
        url: '/about',
        text: 'about',
      },
      {
        title: 'Projects page link',
        url: '/projects',
        text: 'projects',
      },
      {
        title: 'Experience page link',
        url: '/experience',
        text: 'experience',
      },
      {
        title: 'Resume page link',
        url: '/resume',
        text: 'resume',
      },
    ];
    return (
      <HeaderStyles>
        <section>
          <Logo url="/" title="Home Page">
            {brandName}
          </Logo>
          <nav>
            <h4>{brandTag}</h4>
            <ul className="header__nav--list">
              {headerNav.map((elem, item) => (
                <li key={item}>
                  <Link href={elem.url}>
                    <a title={elem.title}>{elem.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </HeaderStyles>
    );
  }
}

export default Header;
