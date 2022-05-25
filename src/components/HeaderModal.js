import React, { useState } from "react";

import Modal from "react-native-modal";
// import tag
import { Text, View, Button, TextInput } from "react-native";
// import styled-component
import styled from "styled-components/native";
// import component
import {DefaultText, DefaultMediumText, DefaultBoldText} from '~/components/DefaultText';

const ModalContainer = styled.View`
  width: 88.8%;
  height: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 16px;  
  padding-bottom: 27px;
  flex-direction: column;
`;
const ModalContents = styled.View`
flex: 1;
`
const ModalTitle = styled(DefaultText)`
  font-size: 20px;
  color: #000;
  text-align: center;
  margin-top: 26px;
`;
const TodayFeelArea = styled.View`
  width: 100%;
  height: 180px;
  margin-top: 32px;
  background-color: #c4c4c4;
`;

const TextInputArea = styled.View`
  margin-top: 25px;
`;
const StyledTextInputLabel= styled(DefaultText)`
  color: #000000;
  font-size: 13px;
`;
const StyledTextInput = styled.TextInput`
  background-color: #EDEDED;
  border-radius: 3px;
  padding: 3px 9px;
  margin-top: 10px;
  font-size: 13px;
`;

const RegisterBtnArea = styled.View`
  border: 1px solid red;
`;

const HeaderModal = ({modalVisible, setModalVisible}) => {

  
  return(
      <Modal 
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      backdropColor={'#DEDEDE'} 
      backdropOpacity={0.53}      
      isVisible={modalVisible}
      useNativeDriver={true} 
      hideModalContentWhileAnimating={true}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <ModalContainer style={{elevation: 5,}}>
          <View>
            <Button title="닫기" onPress={()=> {setModalVisible(false)}}/>
          </View>
        <ModalContents>
          <View>
              <ModalTitle>오늘의 기분을 기록해주세요</ModalTitle>
            </View>
            <TodayFeelArea>
              <Text>list area</Text>
            </TodayFeelArea>
            <TextInputArea>
                <StyledTextInputLabel>한마디로 표현하자면?</StyledTextInputLabel>
                <StyledTextInput placeholderTextColor="#CBCBCB" placeholder="10자 이내로 작성해주세요.(생략가능)" maxLength={10} />
            </TextInputArea>
        </ModalContents>
          <RegisterBtnArea>
            <Button title="등록하기" onPress={()=> {setModalVisible(false)}}/>
          </RegisterBtnArea>
        </ModalContainer>
      </Modal>
  )
}

export default HeaderModal;