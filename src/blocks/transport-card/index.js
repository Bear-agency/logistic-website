
import React, { useState } from 'react';
import RoutePath from "../../components/route-path";
import HighlightedText from "../../components/highlighted-text";
import HighlightedGreenText from "../../components/highlighted-green-text";
import HighlightedBlueText from "../../components/highlighted-blue-text";
import HighlightedOrangeText from "../../components/highlighted-orange-text";
import HighlightedGreyText from "../../components/highlighted-grey-text";
import HighlightedBlackText from "../../components/highlighted-black-text";
import FavoriteButtonNoText from "../../components/favorite-button-no-text";
import BrownText from "../../components/brown-text";
import BlackText from '../../components/black-text';
import ToggleCollapseButton from "../../components/toggle-collapse-button";
import UserAvatar from "../../components/user-avatar";
import CircleToggleButton from '../../components/circle-toggle-button';
import IconToggleButton from '../../components/icon-toggle-button';

import * as styles from './styles';

import { FaRegEnvelope, FaWhatsapp, FaEdit } from "react-icons/fa";
import { FaArrowRightArrowLeft, FaPhone } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import { CiCalendar, CiClock2, CiMap } from "react-icons/ci";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import { LiaWeightHangingSolid, LiaExpandArrowsAltSolid } from "react-icons/lia";
const TransportCard = ({
  ifuser,
  width = '70%',
  route = ['Клайпеда', 'Чернигов'],
  time = "13 минут назад",
  distance = '999 км',
  size = '13.4м x 2.5м x 2.7м',
  type = 'Транспорт',
  typecargo = 'Тент',
  weight = '10т',
  date = "22.10-25.20",
  volume = '86м³',
  pallets = '33',
  paymentType = 'Наличные',
  price = '200 000 грн',
  pricePerKm = '132.45 грн/км',
  postedAt = '31.01.25 11:45',
  updatedAt = '01.02.25 08:36',
  userName = 'Иван Иванович',
  photoURL = '',
  count1 ='2',
  count2 ='18',
  userPhone = '+123 123 123',
  userEmail = 'mail@gmail.com',
  showUser = true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ShortView = () => (
    <>
         <div style={styles.rightflex}>
         {ifuser ? <CircleToggleButton/> : ''}<RoutePath places={route} />
         <HighlightedOrangeText icon={BsTruck} >{type}</HighlightedOrangeText>
         <HighlightedBlackText icon={CiCalendar}>{date}</HighlightedBlackText>
         <div style={styles.leftflex}>
         {ifuser ? <><HighlightedOrangeText icon={FaArrowRightArrowLeft} >Количество повторов: {count1}</HighlightedOrangeText>
          <HighlightedOrangeText icon={GoEye} >Количество просмотров: {count2}</HighlightedOrangeText> </> : ''}<BlackText icon={CiClock2}>{time}</BlackText>
         </div>
         </div>
         <div  style={styles.rightflex}>
        <HighlightedBlueText icon={CiMap}>{distance}</HighlightedBlueText>
        <HighlightedGreyText icon={BsBoxSeam}>{size}</HighlightedGreyText>
         <div style={styles.leftflex}>
        <HighlightedGreenText>{paymentType}</HighlightedGreenText>
        <HighlightedGreenText icon={BiCoinStack}>{price}</HighlightedGreenText>
        <BlackText>{pricePerKm}</BlackText>
        </div>
         </div>
         <div  style={styles.rightflex}>
            <HighlightedGreyText icon={BsTruck}>{typecargo}</HighlightedGreyText>
            <HighlightedGreyText icon={LiaWeightHangingSolid}>{weight}</HighlightedGreyText>
            <HighlightedGreyText icon={LiaExpandArrowsAltSolid}>{volume}</HighlightedGreyText>
        </div>
         <div  style={styles.rightflex}>
            <HighlightedText>Задняя</HighlightedText>
            <HighlightedText>Пломба</HighlightedText>
            <HighlightedText>Кол-во паллет: {pallets}</HighlightedText>
            <BrownText>Информация о грузе</BrownText>
            <div style={styles.leftflex}>
               {ifuser ? <>
                <IconToggleButton icon={FaArrowRightArrowLeft}/>
                <IconToggleButton icon={RiDeleteBinLine}/>
                <IconToggleButton icon={LuCopy}/>
                <IconToggleButton icon={FaEdit}/></>: <FavoriteButtonNoText />}
               <ToggleCollapseButton
                width="140px"
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)} />
               
            </div>
         </div>

    </>
  );

  const FullView = () => (
    <>
     
          <div style={styles.rightflex}>
          {ifuser ? <CircleToggleButton/> : ''}<RoutePath places={route} />
         <HighlightedOrangeText icon={BsTruck} >{type}</HighlightedOrangeText>
         <HighlightedBlackText icon={CiCalendar}>{date}</HighlightedBlackText>
         <div style={styles.leftflex}>
         {ifuser ? <><HighlightedOrangeText icon={FaArrowRightArrowLeft} >Количество повторов: {count1}</HighlightedOrangeText>
          <HighlightedOrangeText icon={GoEye} >Количество просмотров: {count2}</HighlightedOrangeText> </> : ''}<BlackText icon={CiClock2}>{time}</BlackText>
        </div>
         </div>
         <div  style={styles.rightflex}>
        <HighlightedBlueText icon={CiMap}>{distance}</HighlightedBlueText>
        <HighlightedGreyText icon={BsBoxSeam}>{size}</HighlightedGreyText>
         <div style={styles.leftflex}>
        <HighlightedGreenText>{paymentType}</HighlightedGreenText>
        <HighlightedGreenText icon={BiCoinStack}>{price}</HighlightedGreenText>
        <BlackText>{pricePerKm}</BlackText>
        </div>
         </div>
         <div  style={styles.rightflex}>
            <HighlightedGreyText icon={BsTruck}>{typecargo}</HighlightedGreyText>
            <HighlightedGreyText icon={LiaWeightHangingSolid}>{weight}</HighlightedGreyText>
            <HighlightedGreyText icon={LiaExpandArrowsAltSolid}>{volume}</HighlightedGreyText>
        </div>
         <div  style={styles.rightflex}>
            <HighlightedText>Задняя</HighlightedText>
            <HighlightedText>Пломба</HighlightedText>
            <HighlightedText>Кол-во паллет: {pallets}</HighlightedText>
            <BrownText>Информация о грузе</BrownText>
            <div style={styles.postInfo}>
              <BlackText size="14px">Размещено: {postedAt}</BlackText>
              <BlackText size="14px">Изменено: {updatedAt}</BlackText>
            </div>
           

         </div>
          <div style={styles.rightflex}>
              <UserAvatar name={userName}/>
          </div>
          <div style={styles.rightflex}>
            <HighlightedBlackText icon={FaRegEnvelope}>{userEmail}</HighlightedBlackText>
            <HighlightedBlackText icon={FaPhone}>{userPhone}</HighlightedBlackText>
            <HighlightedBlackText icon={FaWhatsapp}>{userPhone}</HighlightedBlackText>
            <div style={styles.leftflex}>
            {ifuser ? <>
                <IconToggleButton icon={FaArrowRightArrowLeft}/>
                <IconToggleButton icon={RiDeleteBinLine}/>
                <IconToggleButton icon={LuCopy}/>
                <IconToggleButton icon={FaEdit}/></>: <FavoriteButtonNoText />}
                <ToggleCollapseButton
                width="140px"
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
     
    </>
  );

return (
  <div style={{ ...styles.cardWrapper, width }}>
    {isOpen ? <FullView /> : <ShortView />}
  </div>
);
};

export default TransportCard;

