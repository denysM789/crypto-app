import React, { useEffect, useState } from "react";
import moment from "moment";
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
  const [assets, setAssets] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [coinAmount, setCoinAmount] = useState(null);
  const [purchasePrice, setPurchasePrice] = useState();

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

  useEffect(() => {}, [coin, purchasePrice]);

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/[^\d ]/g, "");
    setCoinAmount(e.target.value);
  };

  const setInstorage = (assets) => {
    localStorage.setItem("list", JSON.stringify([assets]));
  };

  const handleSaveAndContinue = async () => {
    const newDate = moment(selectedDate).format("DD-MM-yyyy");

    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${newDate}`
    );
    const json = await data.json();
    setPurchasePrice(json.market_data.current_price.usd);

    const asset = {
      id: Math.random(),
      coin: coin,
      amount: coinAmount,
      date: newDate,
      purchasePrice: "",
    };
    setAssets([...assets, asset]);
    setInstorage([assets]);
    closeModal();
    return assets;
  };

  return (
    <div>
      <Wrapper>
        <ContentWrapper>
          <InfoBarWrapper>
            <InfoBar />
          </InfoBarWrapper>
          <AddAssetButton openModal={openModal} />
          <AssetInfoWrapper>
            <AssetInfo assets={assets} purchasePrice={purchasePrice} />
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
          handleSaveAndContinue={handleSaveAndContinue}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          coinAmount={coinAmount}
          setCoinAmount={setCoinAmount}
          handleChange={handleChange}
        />
      </Wrapper>
    </div>
  );
};

export default Portfolio;
