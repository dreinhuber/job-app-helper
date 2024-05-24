import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #414766ff;
    height: 490px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: scroll;
    padding: 1cqh 1cqw;
    font-family: monospace;
`;

const OuterFrame = ({ onClick, children }) => {
  return (
    <Wrapper className="custom-button" onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default OuterFrame;