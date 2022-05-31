import React from 'react';
import { Text, ToastAndroid } from 'react-native';
import styled  from 'styled-components/native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';



const FeelingCalendar = () => {
 
  return(
    <Calendar
    current={'2020-06-07'}
    minDate={'2020-01-01'}
    maxDate={'2020-12-31'}
    onDayPress={(day) => {
      console.log('selected day', day)
      ToastAndroid.showWithGravity(
        day.dateString,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );   
    }}    
    onDayLongPress={(day) => {console.log('selected day', day)}}    
    monthFormat={'yyyy MM'}

    onMonthChange={(month) => {console.log('month changed', month)}}
    hideArrows={true}
    renderArrow={(direction) => (<Arrow/>)}
    hideExtraDays={true}
    disableMonthChange={true}
    firstDay={1}
    hideDayNames={false}
    showWeekNumbers={false}
    onPressArrowLeft={substractMonth => substractMonth()}
    onPressArrowRight={addMonth => addMonth()}
    disableArrowLeft={true}
    disableArrowRight={true}
    disableAllTouchEventsForDisabledDays={true}
    />
  );
}

export default FeelingCalendar;