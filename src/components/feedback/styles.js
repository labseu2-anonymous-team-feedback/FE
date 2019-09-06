import styled from 'styled-components';

export const Container = styled.div`
  width: 804px;
  background: #ffffff;
  margin: 4rem auto;
  @media (max-width: 500px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  padding: 68px;
`;

export const Title = styled.h2`
  font-family: Baloo Thambi;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
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
  font-family: Miriam Libre;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  width: 100%;
`;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  width: 100%;
  padding: 0.8rem;
`;
