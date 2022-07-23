import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styled  from 'styled-components/native';
import {DefaultText} from '~/components/DefaultText';

const ChatBubbleContainer = styled.View`
  background-color: #FFFCAE;
  border-radius: 10px;
  padding: 20px;
  max-width: 255px;
  margin-top: 18px;
  align-self: flex-end;
  width: 100%;
`;

const ChatBubble = ({msg}) => {
  return(
    <ChatBubbleContainer>
      <DefaultText>
        {msg}
      </DefaultText>
    </ChatBubbleContainer>
  )
}

export default ChatBubble;