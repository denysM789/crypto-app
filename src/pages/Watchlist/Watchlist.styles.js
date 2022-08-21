import styled from "styled-components";

export const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
`;

export const InfoBarWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  justify-items: space-between;j
  display: flex;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-width: 1300px;
  width: 100%;
  
`;
