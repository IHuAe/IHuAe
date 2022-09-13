import React from 'react';
// import tag
import {Text} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {dayCount} from '~/atoms/selectors';

const DayCounterStyle = {
  color: '#8291E6',
  fontSize: 24,
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontWeight: '600',
};

const DayCounter = () => {
  const dayState = useRecoilValue(dayCount);
  return <Text style={DayCounterStyle}>D+{dayState.dayCount === 0 ? 'DAY' : dayState.dayCount}</Text>;
};

export default DayCounter;
