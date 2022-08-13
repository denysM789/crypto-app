import styled, { keyframes } from "styled-components";

const fadeInBackground = keyframes`
    0% {
        opacity: 0%
    }
    50% {
        opacity: 50%
    }
`;

const fadeInForeground = keyframes`
    0% {
        opacity: 0%
    }
    100% {
        opacity: 100%
    }
`;

export const BackgroundOuterWrapper = styled.div``;

export const BackgroundInnerWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: black;
  opacity: 50%;
  position: fixed;
  top: 0px;
  bottom: 0px;
  z-index: 10;
  animation: ${fadeInBackground} 1s ease-out;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: ${(props) => props.height / 2 - 403 / 2}px;
  left: ${(props) => props.width / 2 - 870 / 2}px;
  background: ${(props) => props.theme.card.active};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 870px;
  height: 453px;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  z-index: 11;
  animation-delay: 0.5s;
  animation: ${fadeInForeground} 1s ease-out;
`;

export const ContentWrapper = styled.div`
  height: 241px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  height: 234px;
  width: 205px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
  justify-items: center;
  display: grid;
  align-items: center;
`;

export const IconBackground = styled.div`
  border-radius: 10px;
  width: 83px;
  height: 83px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const CrossWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  margin-left: auto;
  margin-right: 40px;
`;

export const CloseModalButton = styled.button``;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

export const DropDownsWrapper = styled.div`
  margin-left: 20px;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  width: 200px;
`;

export const DropDownWrapper = styled.div`
  height: 67px;
  width: 509px;
  margin: 18px;
  padding: 8px 32px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.card.background};
`;

export const DropdownCoinsWrapper = styled.div``;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  width: 870px;
  margin-top: 50px;
  padding-right: 70px;
  padding-left: 50px;
`;

export const CloseButton = styled.button`
  height: 61px;
  width: 295px;
  border-radius: 10px;
  color: #191b1f;
  background: #ffffff;
`;

export const SaveButton = styled.button`
  height: 61px;
  width: 295px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  font-size: 23px;
  font-weight: 800;
  line-height: 0px;
  background: ${(props) => props.theme.money.green};
`;

export const TitleWrapper = styled.div`
  padding: 8px 32px;
  border-radius: 10px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 7px;
  width: 870px;
`;

export const NavStyleLinkWrapper = styled.div`
  margin-left: auto;
  margin-right: 17px;
`;

export const DatePickerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const DateIcon = styled.img`
  height: 15px;
  width: 15px;
`;

export const CustomizedInput = styled.input`
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  float: right;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const InputOuterWrapper = styled.div``;

export const AmountInput = styled.input`
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  display: flex;
  justify-content: right;
  float: right;
  text-align: center;
`;
