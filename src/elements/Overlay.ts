import styled from "styled-components";

const Overlay = styled.div`
  backdrop-filter: blur(50px);
  opacity: 0.9;
  background-color: ${({ theme }) => theme.palette.background.paper};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Overlay;
