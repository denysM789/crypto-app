import React, { useEffect, useState } from "react";
import { getAllCoins } from "store/coinOverview/actions";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyContext } from "index";
import InfoBar from "components/InfoBar/InfoBar";
import AddAssetButton from "components/Portfolio/AddAssetButton";
import AssetInfo from "components/Portfolio/AssetInfo/AssetInfo";
import Modal from "components/Portfolio/Modal/Modal";

import {
  AssetInfoWrapper,
  ContentWrapper,
  InfoBarWrapper,
  Wrapper,
} from "./Portfolio.styles";

const Portfolio = () => {
  const { coinsData, isLoading } = useSelector((state) => state.coinOverview);
  const { currency } = React.useContext(CurrencyContext);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showList, setShowList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currency?.abbr) {
      dispatch(getAllCoins(currency?.abbr));
      setCoins(coinsData);
    }
  }, [currency?.abbr, coins]);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowList(false);
    setShowModal(false);
  };

  const openDropdown = () => {
    setShowList(!showList);
  };

  const closeDropdown = (el) => {
    setShowList(!showList);
    setCoin(el);
  };

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <InfoBarWrapper>
            <InfoBar />
          </InfoBarWrapper>
          <AddAssetButton openModal={openModal} />
          <AssetInfoWrapper>
            <AssetInfo />
          </AssetInfoWrapper>
        </ContentWrapper>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={closeModal}
          showList={showList}
          openDropdown={openDropdown}
          closeDropdown={closeDropdown}
          coins={coins}
          coin={coin}
          setCoin={setCoin}
          isLoading={isLoading}
        />
      </Wrapper>
    </div>
  );
};

export default Portfolio;
