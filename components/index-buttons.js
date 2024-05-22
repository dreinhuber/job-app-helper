import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #c691e9ff;
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    cursor: pointer;
    display: block;
`;

const CustomButton = ({ onClick, children }) => {
  return (
    <Button className="custom-button" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;