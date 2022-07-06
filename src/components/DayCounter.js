import React from 'react';
// import tag
import {Text} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {dayCount} from '~/atoms/selectors';

const DayCounterStyle = {
  color: '#FFBF6A',
  fontSize: 20,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontWeight: '600',
};

const DayCounter = () => {
  const dayState = useRecoilValue(dayCount);
  return <Text style={DayCounterStyle}>D+{dayState.dayCount}</Text>;
};

export default DayCounter;
