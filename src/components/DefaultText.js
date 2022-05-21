import React from 'react';
import { Text } from 'react-native';
import styled  from 'styled-components/native';

const DefaultLightText = styled.Text`
  font-family: SpoqaHanSansNeo-Light;
  font-weight: 200;
`;

const DefaultText = styled.Text`
  font-family: SpoqaHanSansNeo-Regular;
  font-weight: 400;
`;

const DefaultMediumText = styled.Text`
  font-family: SpoqaHanSansNeo-Medium;
  font-weight: 500;
`;

const DefaultBoldText = styled.Text`
  font-family: SpoqaHanSansNeo-Bold;
  font-weight: 600;
`;

export {DefaultLightText, DefaultText, DefaultMediumText, DefaultBoldText};