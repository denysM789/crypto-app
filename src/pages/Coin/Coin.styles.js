import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  background: ${(props) => props.theme.background};
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
`;
