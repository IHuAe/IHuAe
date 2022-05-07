import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';


const Header = () => {
  return(
    <View>
      <Text>이후애</Text>
      {/* header menu start */}
      <View>
        <Image></Image>
        <Text>알림이 들어갈 자리에용</Text>
      </View>
      {/* header menu end
       */}
    </View>
  );
}

export default Header;