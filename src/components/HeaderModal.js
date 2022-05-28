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
  // background-color: #c4c4c4;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;


const StyledTodayFeelIcon = styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
`;
const StyledTodayFeelImg = styled.Image`
  width: 100%;
  opacity: ${(props) => (props.active == props.type) ? 1 : 0.2};
  ${(props) => (props.active == props.type) || `tint-color: gray;`}

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
  const [feelIcon , setfeelIcon] = useState('');
  const [todayDiary , setTodayDiary] = useState('');
  const [prevFeelIcon, setPrevFeelIcon] = useState('');
  const [prevDiary, setPrevDiary] = useState('')

  const TodayFeelIcon = [
    // dummy data
    {type: 'feel1', img: require('../assets/icon/ic_feel_01.png')},
    {type: 'feel2', img: require('../assets/icon/ic_feel_02.png')},
    {type: 'feel3', img: require('../assets/icon/ic_feel_03.png')},
    {type: 'feel4', img: require('../assets/icon/ic_feel_04.png')},
    {type: 'feel5', img: require('../assets/icon/ic_feel_05.png')},
    {type: 'feel6', img: require('../assets/icon/ic_feel_06.png')},
  ]

  const registerFeel = () => {        
    setPrevDiary(todayDiary);
    setPrevFeelIcon(feelIcon);
    setModalVisible(false);
  }

  const closeModal = () => {
    //  미등록 시 이전 상태 불러오기
    setTodayDiary(prevDiary);
    setfeelIcon(prevFeelIcon);
    setModalVisible(false);
  }

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
            <TouchableWithoutFeedback onPress={closeModal}> 
            <CloseBtn source={icon.Close} />
            </TouchableWithoutFeedback>           
          </CloseBtnContainer>
        <ModalContents>
          <View>
              <ModalTitle>오늘의 기분을 기록해주세요</ModalTitle>
            </View>
            <TodayFeelArea>
              {
                TodayFeelIcon.map((li) => {
                  return(
                    <StyledTodayFeelIcon activeOpacity={1}  key={li.type}  onPress={()=>{setfeelIcon(li.type)}}>
                      <StyledTodayFeelImg resizeMode="contain" type={li.type} active={feelIcon} resizeMethod="resize" source={li.img} />
                    </ StyledTodayFeelIcon>
                  );
                })
              }
            </TodayFeelArea>
            <TextInputArea>
                <StyledTextInputLabel>한마디로 표현하자면?</StyledTextInputLabel>
                <StyledTextInput value={todayDiary} onChangeText={(text)=>{setTodayDiary(text); console.log(text)}} placeholderTextColor="#CBCBCB" placeholder="10자 이내로 작성해주세요.(생략가능)" maxLength={10} />
            </TextInputArea>
        </ModalContents>
          <RegisterBtnArea>
            <ButtonComponent 
            fontSize="15px" 
            onPress={registerFeel} 
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