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
const StyledButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  padding: 10px 28px;  
  text-align: center;  
  background-color: ${(props) => props.bgColor || '#fff'};
  color: ${(props) => props.textColor || '#22222'};
  border-radius: ${(props)=> props.round || '0px'};
  text-align: ${(props) => props.textAlign || 'center'};
`;

const ButtonText = styled(DefaultMediumText)`
font-size: ${(props) => props.fontSize || '14px'};
`;

const ButtonComponent = ({title, color, textColor, onPress, round, fontSize, textAlign, shadow, width, height}) => {
  return(
    < StyledButton 
    activeOpacity={0.7} 
    textAlign={textAlign} 
    bgColor={color} 
    round={round || ''} 
    textColor={textColor} 
    onPress={onPress || null }
    width={width}
    height={height}
    style={{ 
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: shadow || 0, }}
    >
      <ButtonText fontSize={fontSize} >
        {title}
      </ButtonText>
    </ StyledButton>
      
  )
}

export default ButtonComponent;