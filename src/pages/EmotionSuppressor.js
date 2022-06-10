import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styled  from 'styled-components/native';
import {DefaultText} from '~/components/DefaultText';

const icon = {
  Send : require("../assets/icon/ic_send.png"),
 }

const EmotionSuppressorContainer = styled.View`
 background-color: #fff;
 height: 100%;
 padding-bottom: 80px;
 justify-content: space-between;
 border: 1px solid red;
`;

const DescriptionArea = styled.View`
 margin-top : 17px;
`;

const DescriptionText = styled(DefaultText)`
 font-size: 10px;
 text-align: center;
 color: #9E9E9E;
`;

const ChatArea = styled.View`
 border: 1px solid red;
 flex-basis: 100%;
 flex-shrink: 1;
 padding: 17px 0;
`;

const TextInputArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px 10px 7px 8px;
  background-color: #CDCDCD; 
  flex-shrink: 0;
`;

const StyledTextInput = styled.TextInput`
 flex-grow: 1;
 height: 100%;
 background-color: #fff;
 padding: 5px 10px;
 flex-basis: 100%;
 flex-shrink: 1;
 min-height: 39px;
 max-height: 70px;
`;

const SendBtn = styled.TouchableOpacity`
 flex-shrink: 0;
 margin-left: 14px;
 flex-grow: 1;
`;

const SendBtnIcon = styled.Image`
 width: 27px;
 height: 27px;
`;

const EmotionSuppressor = () => {
  // state
  const [chatText, setChatText] = useState('');
  const [chatInputHeight, setChatInputHeight] = useState('');

  return (
    <EmotionSuppressorContainer>
      <DescriptionArea>
        <DescriptionText>
          이 곳은 충동적인 감정을 억제하기 위한 곳입니다. {'\n'}
          상대방에게 하고 싶은 말이 있다면, 이 곳에 써주세요. {'\n'}
          하루가 지나면, 당신의 말들은 사라집니다.
        </DescriptionText>
      </DescriptionArea>
      <ChatArea>
        <Text>채팅창</Text>
      </ChatArea>
      <TextInputArea>
          <StyledTextInput  
          multiline= {true} 
          // numberOfLines={3}
          onContentSizeChange={(event) => {
            setChatInputHeight(event.nativeEvent.contentSize.height);
          }}
          onChange={(event) => {
            const chatText = event.nativeEvent.text;                      
            setChatText(chatText);
          }}
          />
          <SendBtn>
            <SendBtnIcon source={icon.Send}/>
          </SendBtn>
      </TextInputArea>
    </EmotionSuppressorContainer>    
  );
}

export default EmotionSuppressor;