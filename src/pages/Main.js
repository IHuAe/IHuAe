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
const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  flex-grow: 1;
  border: 1px solid red;
`;
// component

const Main = () => {
  return(
    <MainContainer>
      <Text>메인 페이지</Text>
    </MainContainer>
  );
}

export default Main;