import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'La Belle Aurore', cursive;
  font-size: 1.9rem;

  /* Apply margin-left only for laptop screens */
  @media (min-width: 1024px) {
    margin-left: 50%;
  }

  /* Reset margin for smaller screens */
  @media (max-width: 1023px) {
    margin-left: 0;
  }
`;

const FShape = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const slideInFromTop = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

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

const AnimatedText = styled.h3`
  margin: 0;
  color: ${({ isHighlight }) => (isHighlight ? 'white' : '#ff6f61')};
  opacity: ${({ isHighlight }) => (isHighlight ? 1 : 0.6)};
  font-size: ${({ isHighlight }) => (isHighlight ? '2.1rem' : 'inherit')};
  animation: ${slideInFromTop} 1s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const Text = ({ text, delay, isHighlight }) => (
  <AnimatedText delay={delay} isHighlight={isHighlight}>
    {text}
  </AnimatedText>
);

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
          <Text text="<h1>Hello.." delay={1.3} />
        </Horizontal>
        <Horizontal>
          <Text text="<h1>Hello World</h1>" delay={1.4} />
          <Text text="<h1>Hello World</h1>" delay={1.5} />
          <Text text="<h1>Hello.." delay={1.6} />
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
          <Text text="<h1>Hello World</h1>" delay={2.4} />
        </Horizontal>
        <Horizontal>
          <Text text="<h1>Hello World</h1>" delay={2.5} />
          <Text text="<h1>Hello World</h1>" delay={2.6} />
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
