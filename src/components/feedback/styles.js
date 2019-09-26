import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const Container = styled.div`
  width: 804px;
  background: #ffffff;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  padding: 6.8rem;
  @media (max-width: 500px) {
    width: 100%;
    padding: 2.4rem;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  position: relative;
  padding-bottom: 30px;
  &::before {
    position: absolute;
    content: '';
    background: #cbd0dc;
    bottom: 0;
    left: 50%;
    width: 129px;
    height: 1px;
    transform: translateX(-50%);
  }
`;

export const TextResponseWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  justify-content: flex-start;
`;

export const Text = styled.p`
         font-family: Verdana, Geneva, Tahoma, sans-serif;
         font-style: normal;
         font-weight: normal;
         font-size: 16px;
         line-height: 24px;
         @media (min-width: 499px) and (max-width: 768px) {
           font-size: 32px;
           line-height: 48px;
         }
         color: #000000;
         width: 100%;
         padding-bottom: 1rem;
       `;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  width: 100%;
  padding: 0.8rem;
`;

export const LoadIngIcon = styled(FaSpinner)`
 color: #fff;
`;
