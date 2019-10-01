import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0px auto;

  .page-title {
    text-align: center;
    padding: 2rem 0rem 1rem 0rem;
  }

  .page-content {
    display: flex;

    .left-div {
      flex: 4;
      display: flex;
      border-right: 1px dashed grey;
      align-items: center;
      justify-content: center;
    }
    .right-div {
      flex: 8;
      padding: 1rem;
    }
  }
`;

export const ProfileButton = styled.button`
  font-size: 1rem;
  padding: 0.3em 1em;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  background: #63beff;
  white-space: nowrap;

  &:hover {
    color: white;
  }
`;

export const ProfileImg = styled.img``;

export const DoubleFields = styled.div`
  display: flex;

  div {
    flex: 1;
    padding-right: 0.5rem;
  }
`;
