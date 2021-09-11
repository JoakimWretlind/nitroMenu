import React, { useState, useEffect } from 'react';
import { FiArrowUp } from "react-icons/fi";
import styled from 'styled-components';

const Scrolls = styled.span`
  position: fixed;
  bottom: 4vh;
  right: 5rem;
  height: 5rem;
  width: 5rem;
  background: #F1F1F1;
  color: #c59d5f;
  font-size: 3.5rem;
  border-radius: 50%;
  border: .2rem solid #c59d5f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  transition: .3s ease-out;
  &:hover{
    background: #1A616C;
  }`

const FiArrowUps = styled.i`
    margin-top: .7rem;
    animation: scrollTop 0.5s alternate ease infinite;
    @keyframes scrollTop {
    from {
        transform: translateY(2px);
    }
    to {
        transform: translateY(-1px);
    }
}`

const ToTopBtn = ({ showBelow }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            return window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);

        } else {
            setVisible(false);
        }
    };

    return (
        <>
            {visible && (<>
                <Scrolls onClick={scrollToTop}>
                    <FiArrowUps>
                        <FiArrowUp />
                    </FiArrowUps>
                </Scrolls>
            </>
            )}
        </>
    )
}

export default ToTopBtn
