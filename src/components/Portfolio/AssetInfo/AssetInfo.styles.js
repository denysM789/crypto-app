import styled from "styled-components";

export const OutsideWrapper = styled.div`
  text-align: left;
  border-radius: 10px;
  display: block;
  width: 100%;
  padding: 15px;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  position: relative;
  padding: 17px 17px 17px 17px;
  table-layout: fixed;
  width: 100%;
  display: block;
`;

export const Title = styled.div`
  justify-self: start;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const NoAssetWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const NoAssetText = styled.div`,
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const OuterWrapper = styled.div``;

export const AssetWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
`;

export const ChangeSpan = styled.div`
  display: flex;
  gap: 4px;
  margin: 15px;
  align-items: center;
`;

export const AssetsInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ImageOuterWrapper = styled.div`
  height: 289px;
  width: 326px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
  justify-items: center;
  display: grid;
  align-items: center;
`;

export const ImageBackground = styled.div`
  border-radius: 10px;
  width: 105px;
  height: 105px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const RowsWrapper = styled.div`
  height: 300px;
  width: 100%;
  display: grid;
  margin-left: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const UpperRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 90px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
`;

export const LowerRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
`;

export const Icon = styled.img`
  height: 65px;
  width: 65px;
`;
