import styled from 'styled-components';
import media from '../MediaQueries';

const LogoStyles = styled.h1`
  padding-bottom: 1rem;
  font-family: shackleton-condensed, serif;
  font-size: 3.9rem;
  line-height: 1.33;
  display: flex;
  justify-content: space-between;
  ${media.brotherbear`
    padding-bottom: 2rem;
    font-size: 5.2rem;
    `}
  a {
    background-color: #fff;
    text-decoration: none;
  }
`;

export default LogoStyles;
