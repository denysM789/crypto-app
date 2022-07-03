import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)``;

export const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
`;

export const ChartWrapper = styled.div`
  display: flex;
  justify-items: space-between;
  gap: 45px;
  max-width: 1300px;
  width: 100%;
`;

export const CoinListWrapper = styled.div`
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
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
