import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #c691e9ff;
    color: white;
    font-size: 3em;
    padding:  10cqh 2cqw;
    margin-top: 2cqh 2cqw;
    border: none;
    cursor: pointer;
    display: block;
    font-family: monospace;
`;

const CustomButton = ({ onClick, children }) => {
  return (
    <Button className="custom-button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;