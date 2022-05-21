import React from 'react';
// import tag
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// import styled-component
import styled, {css} from 'styled-components/native';

// style

// component
const RoundStyledButton = styled.TouchableOpacity`
  padding: 10px 28px;
  font-size: 14px;
  text-align: center;  
  background-color: ${(props) => props.bgColor || '#fff'};
  color: ${(props) => props.textColor || '#22222'};
  border-radius: 100px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.05);
  font-weight: 500;
`;

const ButtonText = styled.Text`

`;

const ButtonComponent = ({title, color, textColor}) => {
  return(
    < RoundStyledButton  color={color} textColor={textColor}>
      <Text>
        {title}
      </Text>
    </ RoundStyledButton>
      
  )
}

export default ButtonComponent;