import React from 'react';

// 받을때 children 객체를 받는다.
function Wrapper({children}) {
   const style = {
      border: '2px solid black',
      padding: 16
   };

   // 해당 항목에 추가해준다.
   return <div style={style}>{children}</div>
}

export default Wrapper;