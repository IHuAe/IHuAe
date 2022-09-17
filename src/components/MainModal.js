import React, { useState } from "react";

import Modal from "react-native-modal";
// import tag
import { Text, View, Button, TextInput, Image, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import styled-component
import styled from "styled-components/native";
// import component
import { DefaultText, DefaultMediumText, DefaultBoldText } from '~/components/DefaultText';
import { ButtonComponent } from '~/components';
import { Icons } from '~/assets';

const ModalContainer = styled.View`
  width: 90%;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;  
  flex-direction: column;
`;
const ModalContents = styled.View`
flex: 1;
`

const CloseBtnContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;
const CloseBtn = styled.Image`
  width: 17px;
  height: 15px;
`;
const ModalTitle = styled(DefaultText)`
  font-size: 14px;
  color: #4a4a4a;
  text-align: center;
  margin-top: 14px;
`;
const TodayFeelArea = styled.View`
  width: 100%;
  height: 165px;
  margin-top: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  gap: 12px 36px;
`;

const FeelIconList = styled.View`
  width: 33.3%;
  height: 75px;
  align-items: center;
`;

const StyledTodayFeelIcon = styled.TouchableOpacity`
  width: 65px;
  height: 100%;
  justify-contents: space-between;
  align-items: center;
 
  border-radius: 5px;
  `;
// border: 2px solid #8291E6;

const TodayFeelImgContainer = styled.View`
 width: 100%;  
 flex-grow: 1;
 flex-shrink: 1;
 padding: 10px;
 `;
const StyledTodayFeelImg = styled.Image`
 width: 100%;
 height: 100%;
`;

// opacity: ${(props) => (props.active == props.type) ? 1 : 0.2};
// ${(props) => (props.active == props.type) || `tint-color: gray;`}


const IconText = styled(DefaultText)`
  color: #000;
  font-size: 14px;
  flex-grow: 0;
  flex-shrink: 0;
`;

const TextInputArea = styled.View`
  margin-top: 37px;
`;
const StyledTextInputLabel = styled(DefaultText)`
  color: #000000;
  font-size: 13px;
`;
const StyledTextInput = styled.TextInput`
  height: 40px;
  padding: 10px;
  font-size: 13px;  
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  font-size: 14px;
`;


const RegisterBtnArea = styled.View`
align-items: center;
margin-top: 23px;
`;

const RegisterButton = styled.TouchableOpacity`
width: 87px;
height: 27px;
border: 2px solid #8291E6;
align-items: center;
border-radius: 5px;
justify-content: center;
`;

const RegisterButtonText = styled(DefaultMediumText)`
  font-size: 12px;
  color: #8291E6;
`;

const MainModal = ({ modalVisible, setModalVisible }) => {
  const [feelIcon, setfeelIcon] = useState('');
  const [todayDiary, setTodayDiary] = useState('');
  const [prevFeelIcon, setPrevFeelIcon] = useState('');
  const [prevDiary, setPrevDiary] = useState('')

  const TodayFeelIcon = [
    // dummy data
    { type: 'feel1', img: require('../assets/icon/ic_feel_01.png'), name: '평온' },
    { type: 'feel2', img: require('../assets/icon/ic_feel_02.png'), name: '무덤덤' },
    { type: 'feel3', img: require('../assets/icon/ic_feel_03.png'), name: '슬픔' },
    { type: 'feel4', img: require('../assets/icon/ic_feel_04.png'), name: '분노' },
    { type: 'feel5', img: require('../assets/icon/ic_feel_05.png'), name: '만족' },
    { type: 'feel6', img: require('../assets/icon/ic_feel_06.png'), name: '공허함' },
  ]

  // FUNCTION 기분 등록
  const registerFeel = () => {
    setPrevDiary(todayDiary);
    setPrevFeelIcon(feelIcon);
    setModalVisible(false);
  }

  // FUNCTION 모달 닫기
  const closeModal = () => {
    //  미등록 시 이전 상태 불러오기
    setTodayDiary(prevDiary);
    setfeelIcon(prevFeelIcon);
    setModalVisible(false);
  }

  return (
    <Modal
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      backdropColor={'#000'}
      backdropOpacity={0.63}
      isVisible={modalVisible}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View>
        <ModalContainer style={{ elevation: 5, }}>
          <CloseBtnContainer>
            <TouchableWithoutFeedback onPress={closeModal}>
              <CloseBtn source={Icons.Close} />
            </TouchableWithoutFeedback>
          </CloseBtnContainer>
          <ModalContents>
            <View>
              <ModalTitle>오늘은 어떤 기분이 드나요?</ModalTitle>
            </View>
            <TodayFeelArea>
              {
                TodayFeelIcon.map((li) => {
                  return (
                    <FeelIconList key={li.type}>
                      <StyledTodayFeelIcon activeOpacity={1} onPress={() => { setfeelIcon(li.type) }}>
                        <TodayFeelImgContainer>
                          <StyledTodayFeelImg resizeMode="contain" type={li.type} active={feelIcon} resizeMethod="resize" source={li.img} />
                        </TodayFeelImgContainer>
                        <IconText numberOfLines={1}>{li.name}</IconText>
                      </ StyledTodayFeelIcon>
                    </FeelIconList>
                  );
                })
              }
            </TodayFeelArea>
            <TextInputArea>
              <StyledTextInput
                value={todayDiary}
                onChangeText={(text) => { setTodayDiary(text); }}
                placeholderTextColor="#CBCBCB"
                placeholder="추가로 느끼는 감정을 작성해보세요"
                maxLength={10}
              />
            </TextInputArea>
          </ModalContents>
          <RegisterBtnArea>
            <RegisterButton onPress={registerFeel}>
              <RegisterButtonText>선택 완료</RegisterButtonText>
            </RegisterButton>
            {/* <ButtonComponent
            fontSize="15px"
            onPress={registerFeel}
            round="5px" title="선택 완료" color='#f5f5f5' textColor='#636363'
            width='250px'
            height='41px'
            shadow={1}
          /> */}
          </RegisterBtnArea>

        </ModalContainer>
      </View>
    </Modal>
  )
}

export default MainModal;