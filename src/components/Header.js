import React from 'react';

// import styled-component
import styled from 'styled-components/native';
//import boxShadow for android
import {BoxShadow} from 'react-native-shadow'

// img
const folderIconImg = require('../assets/icon-folder.png');

const StyledFolderMenu = styled.Image`
width: 27px;
height: 27px;
`;
const FolderMenu = () => {
  return(
    <StyledFolderMenu source={folderIconImg}/>
  );
}

const HeaderOption = {
  // header : (navigation) => (<Header />),
  headerTitle: "이후애",
  // title
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    fontFamily: "GmarketSansTTFMedium",
    fontWeight: "200"
  },
  headerTitleAlign: 'left',
  headerTitleContainerStyle:{   
    paddingLeft: 20,    
    marginLeft: 0,
    flex: 1,
  },
  // style
  headerRightContainerStyle : {
    padding: 20,
  },
  headerStyle: {
    height: 43,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 15,
    },  
    tabBarStyle: { 
      height: 75,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 10,
      position: 'absolute',
      bottom: 0,
      marginBottom: 0,
      borderWidth: 1,
      borderColor: 'red',
      borderTopColor: 'red',
    },
   
}

// export default HeaderOption;
export {HeaderOption, FolderMenu};