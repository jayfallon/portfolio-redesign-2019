import styled from 'styled-components';
import media from '../MediaQueries';

const HeaderStyles = styled.header`
  section {
    margin: 0 auto;
    padding: 1rem;
    ${media.brotherbear`
    padding: 2rem;
        max-width: 96rem;
    `}
    background: pink;
  }
`;

export default HeaderStyles;
