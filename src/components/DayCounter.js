import React from 'react';
// import tag
import {Text} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {dayState} from '~/atoms/atoms';

const DayCounterStyle = {
  color: '#FFBF6A',
  fontSize: 20,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontWeight: '600',
};

const DayCounter = () => {
  const dayCount = useRecoilValue(dayState);
  return <Text style={DayCounterStyle}>D+{dayCount}</Text>;
};

export default DayCounter;
