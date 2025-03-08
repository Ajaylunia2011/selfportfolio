import React from 'react';
import styled from 'styled-components';
import { links } from '../../data/constants';
import { thinkBiggerContent } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 20px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  color: rgba(242, 243, 244, 0.6);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Dot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #9c27b0;
  display: inline-block;
  margin-right: 8px;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: rgba(242, 243, 244, 0.6);
  }
`;

const TextComponent = ({ children }) => (
  <p style={{ fontSize: '18px', color: 'rgba(242, 243, 244, 0.6)', maxWidth: '600px', textAlign: 'left', lineHeight: '1.5' }}>
    {children}
  </p>
);

const ParagraphComponent = ({ text, link, linkText }) => (
  <TextComponent>
    <Dot /> {text} <StyledLink href={link} target="_blank">{linkText}</StyledLink>
  </TextComponent>
);

const ThinkBigger = () => {
  return (
    <Container id="thinkbigger">
      <Wrapper>
        <Title>Think Bigger</Title>
        <Desc>Breaking Barriers, Redefining Possibilities – Welcome to Think Bigger!.</Desc>
        {thinkBiggerContent.map((item, index) => (
          <ParagraphComponent key={index} text={item.text} link={links[index].url} linkText={item.linkText} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ThinkBigger;
