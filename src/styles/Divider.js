import styled from 'styled-components';

export default styled.div`
    width: ${(props) => (props.size ? `${props.size / 4}%` : '20%')};
    height: 1px;
    background: #e0e0e0;
    margin: ${(props) => (props.size ? `${props.size}px auto ${props.size}px` : '30px auto 30px')};
`;
