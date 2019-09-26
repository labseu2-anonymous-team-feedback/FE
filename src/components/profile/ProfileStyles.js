import styled from 'styled-components';
import TextInput from '../common/TextInput';


// export const OtherTextInput = styled(TextInput)`
//  width: 100px ;
// `;

export const MainContainer = styled.section`
         padding-top: 100px;
         width:900px;

         .container {
           display:flex;
           justify-content:space-between;
           background: #ffffff;
           width: 540px;
           height: 420px;
           margin: 0 auto;
           position: relative;
           margin-top: 10%;
           box-shadow: 2px 5px 20px rgba(119, 119, 119, 0.5);
         }



         .leftbox {
           float: left;
           top: -5%;
           left: 5%;
           ${''}
           width: 15%;
           height: 110%;
           background: #63beff;
           box-shadow: 3px 3px 10px rgba(119, 119, 119, 0.5);
         }


         .rightbox {
           float: right;
           width: 60%;
           height: 100%;
         }


         h1 {
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           color: #63beff;
           font-size: 1em;
           margin-top: 40px;
           margin-bottom: 35px;
         }

         h2 {
           color: #777777;
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           width: 80%;
           text-transform: uppercase;
           font-size: 8px;
           letter-spacing: 1px;
           margin-left: 2px;
         }

         p {
           border-width: 1px;
           border-style: solid;
           border-image: linear-gradient(
               to right,
               #63beff,
               rgba(126, 211, 134, 0.5)
             )
             1 0%;
           border-top: 0;
           width: 80%;
           font-family: 'Montserrat', sans-serif;
           font-size: 0.7em;
           padding: 7px 0;
           color: #070707;
         }

         span {
           font-size: 0.5em;
           color: #777777;
         }

         .btn {
           float: right;
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           text-transform: uppercase;
           font-size: 10px;
           border: none;
           color: #63beff;
         }

         .btn:hover {
           text-decoration: underline;
           font-weight: 900;
         }

         input {
           border: 1px solid #dddddd;
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           padding: 2px;
           margin: 0;
         }



       `;


// export const InsideContainerLeft = styled.div`
//          padding-top: 100px;

//        `;


// export const InsideContainerRight = styled.div`
//          padding-top: 100px;

//        `;


export const ProfileImg = styled.img`



 `;
