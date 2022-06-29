import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  margin-top: 25px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
`;

export const ChartWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: space-between;
  gap: 45px;
  width: 1300px;
`;

export const CoinListWrapper = styled.div`
  justify-content: space-between;
  width: 1300px;
  margin: 0 auto;
`;

export const InfoBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
