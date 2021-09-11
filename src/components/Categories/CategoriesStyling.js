import styled from 'styled-components';

export const BtnContainer = styled.div`
    margin-bottom: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
export const Svg = styled.svg`
  height: min-content;
  width: min-content;
  visibility: hidden;
`;

export const BottomBorder = styled.svg`
  position: absolute;
  bottom: -.4rem;
  left: 0;
  height: .2rem;
  width: 100%;
  background: transparent;       
`;

export const CategoryBtn = styled.span`
    position: relative;
    font-size: 1.6rem;
    text-transform: capitalize;
    margin: 0.4rem 1.8rem;
    letter-spacing: .1rem;
    padding: 0rem 0rem;
    color: #c59d5f;
    cursor: pointer;
    transition: .3s ease-in-out;
    z-index: 2;
    &:hover ${BottomBorder} {
      transition: .3s ease-out;
      background: #1F2933;
      -webkit-filter: url("#filter");
      filter: url("/#filter");
    };
    &:hover {
      color:  #1F2933;
    }
`;

