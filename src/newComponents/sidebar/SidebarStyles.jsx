import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  flex: 2;
  min-height: calc(100vh - 100px);
  width: 15rem;
  display: flex;
  flex-direction: column;
  background: white;

  .nav-items {
    border-top: 1px solid #cfedfe;
  }

  @media only screen and (max-width: ${tabletMaxWidth}) {
    display: none;
  }
`;
