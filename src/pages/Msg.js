import React, {useState} from 'react';
// import tag
import {
  Text,
  View,
  ScrollView,
  EditText
} from 'react-native';
//  EditText
// import styled-component
import styled, {css} from 'styled-components/native';
// import component
import ButtonComponent from '~/components/ButtonComponent';
import {DefaultText, DefaultMediumText, DefaultBoldText} from '~/components/DefaultText';
import Wrapper from '~/components/WrapText';

// style
const MainContainer = styled.View`
  background: #ffffff;
  height: 100%;
`;
const GuideText = styled(DefaultText)`
  color: #9E9E9E;
  font-size: 7px;
  margin-vertical:17px;
  text-align: center;
`;
const MsgText = styled(DefaultText)`
  color: #000000;
  font-size: 15px;
  padding : 15px;
  background: #FFFCAE;
  margin-left:85px;
  margin-right:20px;
  margin-bottom:18px;
  borderRadius: 10px;

`;

//    justify-content: center;
//align-items: center;
//     display: flex;

const EditBgView = styled.View`
  background: #CDCDCD;
  padding: 7px 8px 7px 51px;
  height: 53px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const TodayFeelLeftArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;



const MainScrollView = styled.ScrollView`
  height:500px;
`;



const Msg = () => {

  return(
  <MainContainer>
    <MainScrollView>
        <View>
            <GuideText>
            이 곳은 충동적인 감정을 억제하기 위한 곳입니다.{'\n'}
            상대방에게 하고 싶은 말이 있다면, 이 곳에 써주세요.{'\n'}
            하루가 지나면, 당신의 말들은 사라집니다.
            </GuideText>
            <TodayFeelLeftArea>
                <MsgText>
                테스트{'\n'}sfdsjlsd
                </MsgText>
            </TodayFeelLeftArea>
            <TodayFeelLeftArea>
                <MsgText>
                테스트 sfdsjlsd
                </MsgText>
            </TodayFeelLeftArea>

        </View>
    </MainScrollView>
  </MainContainer>
  );
}

export default Msg;
