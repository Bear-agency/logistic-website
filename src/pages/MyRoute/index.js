import React, { useState } from 'react';
import * as styles from './styles';
import TabsWithFavorites from '../../components/tabs-with-favorites';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import CircleToggleButton from '../../components/circle-toggle-button';
import { LiaWeightHangingSolid, LiaExpandArrowsAltSolid } from "react-icons/lia";
import BlackText from '../../components/black-text';
import ButtonShaded from '../../components/button-shaded';
import ButtonEmpty from '../../components/button-empty';
import TransportCard from '../../blocks/transport-card';
import Pagination from '../../components/pagination';

export function MyRoute() {

  const info = "(13 грузов, 9 транспортов)"

  return (
    <div> <Header/>
    <h1 style={styles.header}> Мои перевозки</h1>
    <div style={styles.pageContainer}>
       
    <TabsWithFavorites tabs ={ ['Активные (13)', 'Архив (27)']}/>
      <div style={styles.rightflex}>
         <CircleToggleButton/>
         <BlackText size='14'>{info}</BlackText>
        <div style={{...styles.leftflex, marginBottom: '30px'}}>
        <ButtonEmpty width='200px' label='Повторить выделенные'/>
        <ButtonShaded width='200px' label="Удалить выделенные"/>
         </div>
      </div>

        <TransportCard ifuser={true}  width='98%'/>
        <TransportCard ifuser={true} width='98%'/>
        <TransportCard ifuser={true}  width='98%'/>
        <TransportCard ifuser={true}  width='98%'/>
        <div style={{marginBottom: '90px'}}>
        <Pagination totalPages={10}/>
        </div>
    </div>
    <Footer/>
    </div>
  );
}
