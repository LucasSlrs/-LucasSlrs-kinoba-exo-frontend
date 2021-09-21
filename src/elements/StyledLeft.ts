import styled from "styled-components";

const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-right: ${({ theme }) =>
    "0.1rem solid " + theme.left.color.borderRight};
`;

export default StyledLeft;
