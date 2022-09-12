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
  Touchable,
} from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
// component
import {DefaultText, DefaultMediumText, ChatBubble} from '~/components';
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
  justify-content: space-between;
  background-color: #f6f8fd;
`;

const EmotionSuppressorHeader = styled.View`
  flex-direction: row;
  height: 50px;
  background: #fff;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const EmotionSuppressorHeaderTitle = styled(DefaultMediumText)`
  color: #4a4a4a;
  font-size: 16px;
`;

const BackBtnArea = styled.TouchableOpacity`
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`;
const BackBtnIcon = styled.Image`
  width: 10px;
  height: 14px;
`;

const DescriptionArea = styled.View`
  margin-top: 6px;
  background-color: #fff;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ArrowIcon = styled.Image`
  width: 14px;
  height: 10px;
  margin-bottom: 4px;
`;

const DescriptionText = styled(DefaultMediumText)`
  font-size: 11px;
  line-height: 16.5px;
  text-align: left;
  color: #a8a8a8;
`;

const ChatArea = styled.FlatList`
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0 30px 17px 23px;
  flex-direction: column;  
`;
const ChatAreaBottomDummy = styled.View`
  width: 100%;
  height: 17px;
`;

const TextInputArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 11px 20px;
  background-color: #d8e0f3;
  flex-shrink: 0;
  height: 58px;  
`;

const StyledTextInput = styled.TextInput`
  flex-grow: 1;
  height: 100%;
  background-color: #fff;
  border-radius: 100px;
  padding: 0px 15px;
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

// COMPONENT 설명
const DescriptionComponent = props => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
      {props.isOpen ? (
        <DescriptionArea>
          <DescriptionText>
            이 곳은 충동적인 감정을 억제하기 위한 곳입니다. {'\n'}
            상대방에게 하고 싶은 말이 있다면, 이 곳에 써주세요. {'\n'}
            하루가 지나면, 당신의 말들은 사라집니다.
          </DescriptionText>
          <ArrowIcon source={Icons.ArrowUp} />
        </DescriptionArea>
      ) : (
        <DescriptionArea>
          <DescriptionText>
            이 곳은 충동적인 감정을 억제하기 위한 곳입니다.
          </DescriptionText>
          <ArrowIcon source={Icons.ArrowDown} />
        </DescriptionArea>
      )}
    </TouchableOpacity>
  );
};

const EmotionSuppressor = () => {
  // PARAM state
  const [chatText, setChatText] = useState('');
  const [chatDataList, setChatDataList] = useRecoilState(message);
  const filteredMessageList = useRecoilValue(filteredMessage);
  useRecoilState(filteredMessage);
  const [hasNewChat, setHasNewChat] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Description open / close

  // PARAM ref
  const scrollRef = useRef();

  const navigation = useNavigation();

  // FUNCTION chatDataList 갱신 시마다 스크롤 하단으로 내리기
  useDidMountEffect(() => {
    if (hasNewChat) {
      scrollRef.current.scrollToEnd();
      setHasNewChat(false);
    }
  }, [hasNewChat]);

  // FUNCTION 카톡 보내기
  const handleUpdateChat = msg => {
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
      {/* COMPONENT header */}
      <EmotionSuppressorHeader>
        <BackBtnArea activeOpacity={1} onPress={()=> navigation.goBack()}>
          <BackBtnIcon source={Icons.Back} />
        </BackBtnArea>
        <EmotionSuppressorHeaderTitle>감정 억제기</EmotionSuppressorHeaderTitle>
      </EmotionSuppressorHeader>
      {/* COMPONENT description */}
      <DescriptionComponent
        onPress={setIsOpen.bind(this, !isOpen)}
        isOpen={isOpen}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 8,
        }}
      />
      {/* COMPONENT Chat area */}
      <ChatArea
        data={filteredMessageList}
        renderItem={({item}) => {
          return <ChatBubble msg={item.message} />;
        }}
        windowSize={2}
        ListFooterComponent={ChatAreaBottomDummy}
        ref={scrollRef}
        // onContentSizeChange={() => scrollRef.current.scrollToEnd()}
        onLayout={() => scrollRef.current.scrollToEnd()}></ChatArea>
      <TextInputArea style={{elevation: 3}}>
        {/* COMPONENT 채팅 입력창 */}
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
