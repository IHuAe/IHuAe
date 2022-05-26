import React, { useState } from "react";

import Modal from "react-native-modal";
// import tag
import { Text, View, Button, TextInput, Image, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import styled-component
import styled from "styled-components/native";
// import component
import {DefaultText, DefaultMediumText, DefaultBoldText} from '~/components/DefaultText';
import ButtonComponent from '~/components/ButtonComponent';

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

const CloseBtnContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;
const CloseBtn = styled.Image`
  width: 17px;
  height: 17px;
`;
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
align-items: center;
`;

const icon = {
  Close : require("../assets/icon/ic_cancel.png"),
 }

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
          <CloseBtnContainer>
            <TouchableWithoutFeedback onPress={()=> {setModalVisible(false)}}> 
            <CloseBtn source={icon.Close} />
            </TouchableWithoutFeedback>           
          </CloseBtnContainer>
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
            <ButtonComponent 
            fontSize="15px" 
            onPress={()=> {setModalVisible(false)}} 
            round="5px" title="등록하기" color='#f5f5f5' textColor='#636363'
            width='250px'
            height='41px'
            shadow={1}
            />
          </RegisterBtnArea>

        </ModalContainer>
      </Modal>
  )
}

export default HeaderModal;