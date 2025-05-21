import React, { useState } from 'react';
import * as styles from './styles';
import { BsTruck} from "react-icons/bs";
import HighlightedOrangeText from '../../components/highlighted-orange-text';
import FromWhere from '../../blocks/from-where';
import TextIconButton from '../../components/button-text-icon';
import FilterBlock from '../../blocks/filter-block';
import { Plus, Minus } from 'lucide-react';
import { CiCalendar, CiClock2, CiMap } from "react-icons/ci";
import TabsWithFavorites from '../../components/tabs-with-favorites';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import { LiaWeightHangingSolid, LiaExpandArrowsAltSolid } from "react-icons/lia";
import RoutePath from '../../components/route-path';
import BlackText from '../../components/black-text';
import ButtonShaded from '../../components/button-shaded';
import DropdownMenu from '../../components/dropdown-menu';
import TransportCard from '../../blocks/transport-card';
import Pagination from '../../components/pagination';

export function ResultsSearchPage() {
  
  const route = ['Клайпеда', 'Чернигов'];
  const type = "Грузы";
  const date = "22.10 - 25.20";
  const weight = "3т - 15т";
  const resultscount = 145;
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [massFrom, setMassFrom] = useState('');
  const [massTo, setMassTo] = useState('');
  const [volumeFrom, setVolumeFrom] = useState('');
  const [volumeTo, setVolumeTo] = useState('');

  const [fromPlaces, setFromPlaces] = useState([{}]);
  const [toPlaces, setToPlaces] = useState([{}]);

  const handleAddFromPlace = () => {
    setFromPlaces([...fromPlaces, {}]);
  };

  const handleAddToPlace = () => {
    setToPlaces([...toPlaces, {}]);
  };

  const handleRemoveFromPlace = (index) => {
    if (fromPlaces.length > 1) {
      setFromPlaces(fromPlaces.filter((_, i) => i !== index));
    }
  };

  const handleRemoveToPlace = (index) => {
    if (toPlaces.length > 1) {
      setToPlaces(toPlaces.filter((_, i) => i !== index));
    }
  };

  return (
    <div> <Header/>
    <h1 style={styles.header}>Найти грузы и транспорты</h1>
    <div style={styles.pageContainer}>
       
    <TabsWithFavorites tabs ={ ['LT - UA', '+ Tab']}/>
      <div style={styles.rightflex}>
         <HighlightedOrangeText icon={BsTruck} >{type}</HighlightedOrangeText>
         <BlackText size='16px'>Направление:</BlackText><RoutePath places={route} ></RoutePath>
         <BlackText size='16px' icon={CiCalendar}>{date}</BlackText>
         <BlackText size='16px' icon={LiaWeightHangingSolid}>{weight}</BlackText>
         <div style={styles.leftflex}>
        <ButtonShaded label='Фильтры' width='150px'/>
         </div>
      </div>
      <div style={{...styles.rightflex, marginTop: '30px', marginBottom: '30px'}}>
        <BlackText size='16px'>Результаты поиска: {resultscount}</BlackText>
        <div style={styles.leftflex}>
        <DropdownMenu width="250px" height="20px" placeholder="За всё время" />
    
        </div>
      </div>
        <TransportCard ifuser={false}  width='98%'/>
        <TransportCard ifuser={false} width='98%'/>
        <TransportCard ifuser={false}  width='98%'/>
        <TransportCard ifuser={false}  width='98%'/>
        <div style={{marginBottom: '90px'}}>
        <Pagination totalPages={10}/>
        </div>
    </div>
    <Footer/>
    </div>
  );
}
