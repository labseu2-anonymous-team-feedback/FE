import styled from 'styled-components';
import TextInput from '../common/TextInput';


export const OtherTextInput = styled(TextInput)`
 width: 100px ;



`;


export const Container = styled.section`
padding-top:100px;

display:flex;
margin: 0 auto;


`;


export const InsideContainerLeft = styled.div`
         padding-top: 100px;
         width: 30%;
         display: flex;
         flex-direction: column;
         align-items: center;
         background-color: yellowgreen;

         .user-photo {
           text-align: center;
         }

         h3 {
           text-align: center;
           padding-bottom: 1rem;
         }

         span {
           text-align: center;
           padding-bottom: 1rem;
         }
       `;


export const InsideContainerRight = styled.div`
         padding-top: 100px;
         display: flex;
         width: 70%;
         background-color: lightblue;
       `;


export const ProfileImg = styled.img`
         border-radius: 50%;


       `;
