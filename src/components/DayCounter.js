import React, {useState} from 'react';
// import tag
import {
  Text,
} from 'react-native';

const DayCounterStyle = {
  color: '#FFBF6A',
    fontSize: 20,
    fontFamily: 'SpoqaHanSansNeo-Bold',
    fontWeight: '600',
}

const DayCounter = () => {
  return  <Text style={DayCounterStyle}>D+1</Text>;
}
  
export default DayCounter;