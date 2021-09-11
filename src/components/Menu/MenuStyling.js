import styled from 'styled-components';

export const Section = styled.div`
    background: linear-gradient(-7deg, #1F2933, #323F4B);
    width: 90vw;
    margin: 0 auto;
    max-width: 120rem;
    padding: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (min-width: 767px){
        padding: 5rem 0;
    }
`;

export const MenuItem = styled.article`
    overflow: hidden;
    background: #fff;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 2rem;
       
    @media screen and (min-width: 600px){
        display: grid;
        grid-template-columns: 1fr 1.8fr;
        max-width: 50rem;
        height: 26rem;      
    }
`;

export const Split = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 
    margin: 0 .5rem;
    `;

export const Photo = styled.img`
    object-fit: contain;
    height: 100%;
    width: 100%;
    max-height: 25rem;
    display: block;
    margin-bottom: 2rem;
    @media screen and (min-width: 600px){
        margin: auto 2rem auto 1rem;       
    }
`;

export const Title = styled.h4`
    font-size: 2.4rem;
    letter-spacing: .2rem;
    text-transform: uppercase;
    font-family: 'TypoOval';
    margin-bottom: .6rem;
    color: #323F4B;
`;

export const Price = styled.h4`
    font-size: 1.8rem;
    letter-spacing: .1rem;
    text-transform: capitalize;
    margin-bottom: 1.2rem;
    color: #c59d5f;
`;

export const ItemText = styled.p`
    margin-bottom: 2rem;
    font-size: clamp(1.2rem, 3vw, 1.4rem);
    padding-top: 1rem;
    color: #617d98;
    letter-spacing: .1rem;
`;