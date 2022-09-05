import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import {DefaultMediumText} from '~/components/DefaultText';

const ChatBubbleContainer = styled.View`
  background-color: #a2aff8;
  border-radius: 10px;
  padding: 12px 18px;
  max-width: 255px;
  margin-top: 20px;
  align-self: flex-end;
  width: 100%;
`;
const BubbleText = styled(DefaultMediumText)`
  color: #fff;
  font-size: 16px;
`;

const ChatBubble = ({msg}) => {
  return (
    <ChatBubbleContainer style={{borderBottomRightRadius: 0}}>
      <BubbleText>{msg}</BubbleText>
    </ChatBubbleContainer>
  );
};

export default ChatBubble;
