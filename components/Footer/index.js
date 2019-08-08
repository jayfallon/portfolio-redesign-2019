import Link from 'next/link';
import * as moment from 'moment';

import FooterStyles from './styles';

const now = moment().format('YYYY');

const myEmail = 'jayfallon@gmail.com';
const myName = 'Jay Fallon';

const footerPNav = [
  {
    title: 'LinkedIn profile page - opens in separate window',
    url: 'https://www.linkedin.com/in/jayfallon/',
    text: 'LinkedIn',
  },
  {
    title: 'GitHub profile page - opens in separate window',
    url: 'https://github.com/jayfallon',
    text: 'GitHub',
  },
  {
    title: 'Medium profile page - opens in separate window',
    url: 'https://medium.com/@jayfallon',
    text: 'Medium',
  },
  {
    title: 'Instagram profile page - opens in separate window',
    url: 'https://www.instagram.com/jayfallon/',
    text: 'Instagram',
  },
  {
    title: 'Resume page link',
    url: '/resume',
    text: 'Resume',
  },
];

const footerSNav = [
  {
    title: 'Privacy page link',
    url: '/privacy',
    text: 'Privacy',
  },
  {
    title: 'Terms & Conditions page link',
    url: '/terms',
    text: 'Terms',
  },
];

const Footer = () => (
  <FooterStyles>
    <section>
      <h3>Let's talk</h3>
      <p>{myEmail}</p>
      <nav>
        <ul className="footer__nav--list-primary">
          {footerPNav.map((elem, i) => (
            <li key={i}>
              <Link href={elem.url}>
                <a title={elem.title}>{elem.text}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="footer__nav--list-secondary">
          <li>
            &copy;{now} - {myName}
          </li>
          {footerSNav.map((elem, i) => (
            <li>
              <Link href={elem.url}>
                <a title={elem.title}>{elem.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="#main__content">
        <a title="hello">Back to top</a>
      </Link>
    </section>
  </FooterStyles>
);

export default Footer;
