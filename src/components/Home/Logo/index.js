import React from 'react';
import styled, { keyframes, css } from 'styled-components';

// Keyframes for continuous 3D rotation
const rotate3D = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg);
  }
  50% {
    transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
  }
  75% {
    transform: rotateX(90deg) rotateY(90deg) rotateZ(90deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`;

// Container styling with 3D perspective and responsive adjustments
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'La Belle Aurore', cursive;
  font-size: 1.9rem;
  perspective: 1000px;
`;

// F-shaped structure for text with continuous 3D rotation and responsive design
const FShape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform-style: preserve-3d;
  animation: ${rotate3D} 10s infinite linear;

  @media (max-width: 767px) {
    transform: scale(0.8);
  }
`;

// Horizontal and Vertical container styles
const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
`;

const Horizontal = styled.div`
  display: flex;
  align-items: flex-start;
`;

// Animated text styling with responsive design
const AnimatedText = styled.h3`
  margin: 0;
  color: ${({ isHighlight }) => (isHighlight ? 'white' : '#ff6f61')};
  opacity: ${({ isHighlight }) => (isHighlight ? 1 : 0.6)};
  font-size: ${({ isHighlight }) => (isHighlight ? '2.1rem' : '1.9rem')};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  ${({ isHighlight }) =>
    !isHighlight &&
    css`
      transform: translateZ(100px);
    `}

  @media (max-width: 767px) {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    font-size: 1.5rem;
  }
`;

const Text = ({ text, delay, isHighlight }) => (
  <AnimatedText delay={delay} isHighlight={isHighlight}>
    {text}
  </AnimatedText>
);

// Main Logo component with 3D rotation
const Logo = () => {
  return (
    <Container>
      <FShape>
        <Text text="Let’s Create Something Amazing Together!" delay={1.0} isHighlight />
        <br />
        <br />
        <Horizontal>
          <Text text="<h1>Hello World</h1>" delay={1.1} />
          <Text text="<h1>Hello World</h1>" delay={1.2} />
        </Horizontal>
        <Horizontal>
          <Text text="<h1>Hello World</h1>" delay={1.4} />
          <Text text="<h1>Hello World</h1>" delay={1.5} />
        </Horizontal>
        <Vertical>
          <Text text="<h1>Hello.." delay={1.7} />
          <Text text="World</h1>" delay={1.8} />
          <Text text="<h1>Hello.." delay={1.9} />
          <Text text="World</h1>" delay={2.0} />
          <Text text="<h1>Hello.." delay={2.1} />
          <Text text="World</h1>" delay={2.2} />
        </Vertical>
        <Horizontal>
          <Text text="<h1>Hello World</h1>" delay={2.3} />
          <Text text="<h1>Hello.." delay={2.4} />
        </Horizontal>
        <Horizontal>
          <Text text="<h1>Hello World</h1>" delay={2.5} />
          <Text text="<h1>Hello.." delay={2.6} />
        </Horizontal>
        <Vertical>
          <Text text="<h1>Hello.." delay={2.7} />
          <Text text="World</h1>" delay={2.8} />
          <Text text="<h1>Hello.." delay={2.9} />
          <Text text="World</h1>" delay={3.0} />
          <Text text="<h1>Hello.." delay={3.1} />
          <Text text="World</h1>" delay={3.2} />
        </Vertical>
      </FShape>
    </Container>
  );
};

export default Logo;
