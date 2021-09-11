import styled from 'styled-components';

export const Section = styled.section`
    width: 90vw;
    margin: 0 auto;
    max-width: 120rem;
    padding: 5rem 0;
  @media screen and (min-width: 992px) {  
    width: 95vw;
}`;

export const Title = styled.h2`
  text-align: center;
  font-size: clamp(3.4rem, 6vw, 5rem);
  margin-bottom: 2rem;
  letter-spacing: .1rem;
  color: #323F4B;
  line-height: 1;
  font-family: 'TypoOval';
`;