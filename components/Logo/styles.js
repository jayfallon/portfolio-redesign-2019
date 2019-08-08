import styled from 'styled-components';
import media from '../MediaQueries';

const LogoStyles = styled.h1`
  background-color: #efefef;
  padding: 1rem;
  border: 0.1rem solid #333;
  font-family: shackleton-condensed, serif;
  font-size: 3.9rem;
  line-height: 1.33;
  display: flex;
  justify-content: space-between;
  ${media.brotherbear`
    padding: 2rem;
    font-size: 5.2rem;
    `}
  a {
    text-decoration: none;
  }
`;

export default LogoStyles;
