import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Keyboard,
} from 'react-native';
import styled from 'styled-components/native';
// component
import {DefaultText, ChatBubble} from '~/components';
// util
import {useDidMountEffect} from '~/utils';
// asset
import {Icons} from '~/assets';
import {useRecoilState, useRecoilValue} from 'recoil';
import {message} from '../atoms/atoms';
import {filteredMessage} from '../atoms/selectors';

const EmotionSuppressorContainer = styled.View`
  background-color: #fff;
  height: 100%;
  padding-bottom: 80px;
  justify-content: space-between;
`;

const DescriptionArea = styled.View`
  margin-top: 17px;
`;

const DescriptionText = styled(DefaultText)`
  font-size: 10px;
  text-align: center;
  color: #9e9e9e;
`;

const ChatArea = styled.FlatList`
  flex-basis: 100%;
  flex-shrink: 1;
  padding: 0 20px 17px 20px;
  flex-direction: column;
`;
const ChatAreaBottomDummy = styled.View`
  width: 100%;
  height: 17px;
`;

const TextInputArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 7px 10px 7px 8px;
  background-color: #cdcdcd;
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

const DescriptionComponent = () => {
  return (
    <DescriptionArea>
      <DescriptionText>
        이 곳은 충동적인 감정을 억제하기 위한 곳입니다. {'\n'}
        상대방에게 하고 싶은 말이 있다면, 이 곳에 써주세요. {'\n'}
        하루가 지나면, 당신의 말들은 사라집니다.
      </DescriptionText>
    </DescriptionArea>
  );
};

const EmotionSuppressor = () => {
  // state
  const [chatText, setChatText] = useState('');
  const [chatDataList, setChatDataList] = useRecoilState(message);
  const filteredMessageList = useRecoilValue(filteredMessage);
  useRecoilState(filteredMessage);
  const [hasNewChat, setHasNewChat] = useState(false);

  const scrollRef = useRef();
  // chatDataList 갱신 시마다 스크롤 하단으로 내리기
  useDidMountEffect(() => {
    if (hasNewChat) {
      scrollRef.current.scrollToEnd();
      setHasNewChat(false);
    }
  }, [hasNewChat]);

  const handleUpdateChat = msg => {
    // 카톡 보내기
    const msgData = {
      id: 'msgId' + (chatDataList.length + 1),
      message: msg,
      sendTime: new Date().toString(),
    };
    const newDataList = [...chatDataList, msgData];
    setChatDataList(newDataList);
    setChatText('');
  };

  return (
    <EmotionSuppressorContainer>
      <ChatArea
        data={filteredMessageList}
        renderItem={({item}) => {
          return <ChatBubble msg={item.message} />;
        }}
        windowSize={2}
        ListHeaderComponent={DescriptionComponent}
        ListFooterComponent={ChatAreaBottomDummy}
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
        onLayout={() => scrollRef.current.scrollToEnd()}></ChatArea>
      <TextInputArea style={{elevation: 3}}>
        {/* 채팅 입력창 */}
        <StyledTextInput
          multiline={true}
          onChange={event => {
            const chat = event.nativeEvent.text;
            setChatText(chat);
          }}
          value={chatText ? chatText : ''}
        />
        <SendBtn
          onPress={() => {
            if (chatText != '') {
              handleUpdateChat(chatText);
              setHasNewChat(true);
            }
          }}>
          <SendBtnIcon source={Icons.Send} />
        </SendBtn>
      </TextInputArea>
    </EmotionSuppressorContainer>
  );
};

export default EmotionSuppressor;
