import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BackgroundOuterWrapper,
  BackgroundInnerWrapper,
  Wrapper,
  ContentWrapper,
  TitleWrapper,
  IconWrapper,
  DropDownWrapper,
  DropdownCoinsWrapper,
  ButtonsWrapper,
  CrossWrapper,
  Icon,
  CloseModalButton,
  NavStyleLinkWrapper,
  CloseButton,
  SaveButton,
  DropDownsWrapper,
  IconBackground,
  DatePickerWrapper,
  DateIcon,
  CustomizedInput,
  InputWrapper,
  AmountInput,
  InputOuterWrapper,
  TextWrapper,
} from "./Modal.styles";

import { useWindowSize } from "hooks";
import { NavLinkStyle } from "styles/Fonts";
import Cross from "cross.svg";
import { IconContext } from "react-icons";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsInputCursorText } from "react-icons/bs";
import DropdownCoins from "./Dropdown/DropdownCoins/DropdownCoins";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const Modal = ({
  showModal,
  closeModal,
  showList,
  setShowList,
  openDropdown,
  closeDropdown,
  coin,
  coins,
  setCoin,
  isLoading,
}) => {
  const { width: screenWidth, height: screenHeight } = useWindowSize();

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showInput, setShowInput] = useState(false);

  const openCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const openInput = () => {
    setShowInput(!showInput);
  };

  const hasData = coins.length !== 0 && !isLoading && showModal;

  const calendarLogo = (
    <IconContext.Provider value={{ size: "1.3rem", color: "#00FF5F" }}>
      <AiOutlineCalendar />
    </IconContext.Provider>
  );

  const inputLogo = (
    <IconContext.Provider value={{ size: "1.3rem", color: "#00FF5F" }}>
      <BsInputCursorText />
    </IconContext.Provider>
  );

  return (
    <div>
      {hasData && (
        <BackgroundOuterWrapper width={screenWidth} height={screenHeight}>
          <BackgroundInnerWrapper
            width={screenWidth}
            height={screenHeight}
          ></BackgroundInnerWrapper>
          <Wrapper width={screenWidth} height={screenHeight}>
            <TitleWrapper>
              <NavStyleLinkWrapper>
                <NavLinkStyle>Select Your Coin:</NavLinkStyle>
              </NavStyleLinkWrapper>
              <CrossWrapper>
                <CloseModalButton onClick={closeModal}>
                  <Icon src={Cross}></Icon>
                </CloseModalButton>
              </CrossWrapper>
            </TitleWrapper>
            <ContentWrapper>
              <IconWrapper>
                <IconBackground>
                  <img src={coin.image} />
                </IconBackground>
              </IconWrapper>
              <DropDownsWrapper>
                <DropDownWrapper>
                  <TextWrapper>Select Coin</TextWrapper>
                  <DropdownCoinsWrapper>
                    <DropdownCoins
                      coins={coins}
                      showList={showList}
                      coin={coin}
                      setCoin={setCoin}
                      closeModal={closeModal}
                      setShowList={setShowList}
                      openDropdown={openDropdown}
                      closeDropdown={closeDropdown}
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />
                  </DropdownCoinsWrapper>
                </DropDownWrapper>
                <DropDownWrapper>
                  <TextWrapper>Purchased Amount</TextWrapper>
                  {showInput && (
                    <InputOuterWrapper>
                      <InputWrapper>
                        <AmountInput placeholder="Enter Coin-Amount"></AmountInput>
                      </InputWrapper>
                    </InputOuterWrapper>
                  )}
                  <button onClick={openInput}>{inputLogo}</button>
                </DropDownWrapper>
                <DropDownWrapper>
                  <TextWrapper>Purchase Date</TextWrapper>
                  {showCalendar && (
                    <DatePickerWrapper>
                      <DatePicker
                        selected={selectedDate}
                        value={selectedDate}
                        maxDate={new Date()}
                        dateFormat={"dd/MM/yyyy"}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="Click to select date"
                        customInput={<CustomizedInput />}
                      />
                    </DatePickerWrapper>
                  )}
                  <button onClick={openCalendar}>{calendarLogo}</button>
                </DropDownWrapper>
              </DropDownsWrapper>
            </ContentWrapper>
            <ButtonsWrapper>
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <SaveButton>Save and Continue</SaveButton>
            </ButtonsWrapper>
          </Wrapper>
        </BackgroundOuterWrapper>
      )}
    </div>
  );
};

export default Modal;
