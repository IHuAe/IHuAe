import React from 'react';
// import tag
import {
  Text,
  View,
  Image
} from 'react-native';
// import styled-component
import styled, {css} from 'styled-components/native';

// style
const StyledHeader = styled.View`
height: 45px;
display: flex;
padding: 0 20px;
flex-direction: row;
justify-content: space-between;
align-items: center;
  background: #fff;
  box-shadow: 0px 2px rgba(0,0,0,0.03);
`
const AppTitle = styled.Text`
font-size: 20px;
color: #707070;
font-weight: 600;
`;
const TmpImg = styled.View`
  width: 32px;
  height: 25px;
  background-color: #2699fb;
`;

// component
const Header = () => {
  return(
    <StyledHeader>
      <AppTitle>이후애</AppTitle>
      {/* header menu start */}
      <View>
        <TmpImg></TmpImg>
      </View>
      {/* header menu end
       */}
    </StyledHeader>
  );
}

export default Header;