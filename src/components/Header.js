import React from 'react';
// import tag
import {
  Text,
  View,
  Image
} from 'react-native';
// import styled-component
import styled, {css} from 'styled-components/native';

// style
// const StyledHeader = styled.View`
// height: 45px;
// display: flex;
// padding: 0 20px;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
//   background: #fff;
//   box-shadow: 0px 2px 5px rgba(0,0,0,0.5);
//   border: 1px solid red;
// `
// const AppTitle = styled.Text`
// font-size: 20px;
// color: #707070;
// font-weight: 600;
// `;

const TmpImg = styled.View`
  width: 32px;
  height: 25px;
  background-color:  ${(props) => props.colorProps || "#2699fb"};
`;

// // component
// const Header = (navigation) => {
//   return(
//     <StyledHeader>
//       <AppTitle>이후애</AppTitle>
//       {/* header menu start */}
//       <View>
//         <TmpImg></TmpImg>
//       </View>
//       {/* header menu end
//        */}
//     </StyledHeader>
//   );
// }

const HeaderOption = {
  // header : (navigation) => (<Header />),
  headerTitle: "이후애",
  // title
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#707070',
    fontSize: 20,
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
    height: 45,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    },    
    headerRight: () => (<TmpImg/>),
}

// export default HeaderOption;
export {HeaderOption, TmpImg};