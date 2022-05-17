import React from 'react';
// import tag
import {
  Image
} from 'react-native';
// import styled-component
import styled, {css} from 'styled-components/native';
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
   
}

// export default HeaderOption;
export {HeaderOption, FolderMenu};