import React from 'react'
import MultiButton from './cgu_multiButton';
class MyForm extends React.Component {
    render() {
      return (
          <center>
        <form>
          <p>Email or phone Number:</p>
          <input
            type="text"
          />
        </form>

        <form>
          <p>Password:</p>
          <input
            type="text"
          />
        </form>

        <div>
            {MultiButton()}
        </div>
        
        </center>
      );
    }
  }
  export default MyForm

//   const MyForm=(event)=>{
//     return (
//         <form>
//           <h1>Hello</h1>
//           <p>Enter your name:</p>
//           <input
//             type="text"
//           />
//         </form>
//       );}

//     export default MyForm