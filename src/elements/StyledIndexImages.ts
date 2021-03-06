import styled from "styled-components";

const StyledIndexImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.rightImg.color.bgGrey};

  .rightImg--image {
    width: 20rem;
    height: 20rem;
    margin-bottom: 2.8rem;
  }
  .rightImg--title {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.rightImg.color.darkGrey};
    font-weight: 300;
  }
  .rightImg--div {
    margin-bottom: 3rem;
    width: 42rem;
  }
  .rightImg--p {
    text-align: center;
    color: ${({ theme }) => theme.rightImg.color.mediumGrey};
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 3.4rem;
  }
  .rightImg--divider {
    width: 100%;
    height: 0.2rem;
    background: ${({ theme }) => theme.rightImg.color.lightGrey};
    margin-bottom: 0.1rem;
  }
`;

export default StyledIndexImages;
