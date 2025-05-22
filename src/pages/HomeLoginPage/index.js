import React, { useState } from 'react';
import * as styles from './styles';
import TransportCard from '../../blocks/transport-card';
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import BlackText from '../../components/black-text';
import SearchInput from '../../components/search-input';
import Pagination from '../../components/pagination';
import CurrencyCard from '../../components/currency-card';

export function HomeLoginPage() {


  return (
    <div> <Header/>
    <div style={styles.pageContainer}>
    <div style={{width: '70%'}}>
      <div style={styles.rightflex}>
      <BlackText size='16px' >Актуальные заявки пользователя</BlackText> 
        <SearchInput Width='65%'></SearchInput>
      </div>
       <TransportCard width='95%' ></TransportCard>
        <TransportCard width='95%' ></TransportCard>
         <TransportCard width='95%' ></TransportCard>
          <TransportCard width='95%' ></TransportCard> 
          <Pagination totalPages={10}/>
    </div>
    <div style={{width: '30%'}}>
      
      <div style={styles.rightflex}>
          <BlackText size='16px' children="Курс валют"></BlackText> 
          <div style={styles.leftflex}> <BlackText size='12px'children="1 USDT" ></BlackText> 
         </div> 
        
      </div>
      <div style={styles.currencyflex}>
      <CurrencyCard currencyCode="en" amount={1.00} />
      <CurrencyCard currencyCode="en" amount={1.00} />
      </div>
      <div style={styles.currencyflex}>
      <CurrencyCard currencyCode="en" amount={1.00} />
      <CurrencyCard currencyCode="en" amount={1.00} />
      </div>
      <div style={styles.currencyflex}>
      <CurrencyCard currencyCode="en" amount={1.00} />
      <CurrencyCard currencyCode="en" amount={1.00} />
      </div>
      <div style={styles.imagePlaceholder}></div>

    </div>
    </div>

  

    <Footer/>
    </div>
  );
}
