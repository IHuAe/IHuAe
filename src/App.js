import React from 'react';
import type {Node} from 'react';
// import tag
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// header
import Header from '~/components/Header';
// page
import Main from '~/pages/Main';

// import styled-component
import styled, {css} from 'styled-components/native';

// style
const StyledScrollView = styled(ScrollView)`
 /* 영역 확인용 임시 스타일 */
   height: 100%;
  background: #efefef;
  // background: #222;
`;
const ContentContainer = styled.View`
  height: 100%;
  border: 1px solid #000;
`;

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
      <StyledScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        {/* 헤더 시작 */}
        <Header />   
        {/* 헤더 끝 */}
        {/* 컨텐츠 시작 */}
        <ContentContainer>
          {/* router 사용해서 페이지 보일 예정 */}
          <Main />
        </ContentContainer>      
        {/* 컨텐츠 끝 */}
        {/* 푸터 시작 */}
          {/* 여기에 푸터 컴포넌트 삽입 */}
        {/* 푸터 끝 */}
      </StyledScrollView>
    </SafeAreaView>
  );
};


export default App;
