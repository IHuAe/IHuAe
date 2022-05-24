import React from 'react';
// import tag
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// import styled-component
import styled, {css} from 'styled-components/native';
import {DefaultMediumText} from '~/components/DefaultText';

// style

// component
const RoundStyledButton = styled.TouchableOpacity`
  padding: 10px 28px;  
  text-align: center;  
  background-color: ${(props) => props.bgColor || '#fff'};
  color: ${(props) => props.textColor || '#22222'};
  border-radius: 100px;
 
`;

const ButtonText = styled(DefaultMediumText)`
font-size: 14px;
`;

const ButtonComponent = ({title, color, textColor}) => {
  return(
    < RoundStyledButton  color={color} textColor={textColor} 
    style={{ 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 3, }}
    >
      <ButtonText>
        {title}
      </ButtonText>
    </ RoundStyledButton>
      
  )
}

export default ButtonComponent;