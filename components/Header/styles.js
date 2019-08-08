import styled from 'styled-components';
import media from '../MediaQueries';

const HeaderStyles = styled.header`
  section {
    background-color: #efefef;
    margin: 0 auto;
    padding: 1rem;
    border: 0.1rem solid #333;
    ${media.brotherbear`
    padding: 2rem;
        max-width: 96rem;
    `}

    nav {
      margin-top: 1rem;
      padding: 1rem;
      border: 0.1rem solid #333;
      display: flex;
      justify-content: space-between;
    }

    h4 {
      padding: 1rem;
      border: 0.1rem solid #333;
      font-size: 2rem;
      text-transform: capitalize;
      line-height: 1.25;
    }

    ul.header__nav--list {
      padding: 1rem;
      border: 0.1rem solid #333;
      display: flex;
      justify-content: flex-end;

      li {
        margin-left: 2rem;
        font-size: 2rem;
        text-transform: capitalize;
        line-height: 1.25;
      }
    }
  }
`;

export default HeaderStyles;
