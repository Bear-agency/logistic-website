import AdditionalInfoBlock from "../../blocks/additional-info";
import PaymentInfoBlock from "../../blocks/payment-info";
import { RouteInfoBlock } from "../../blocks/route-info";
import { TransportCargoInfo } from "../../blocks/transport-cargo-info";
import Header from '../../blocks/header';
import Footer from '../../blocks/footer';
import ButtonEmpty from "../../components/button-empty";
import ButtonShaded from "../../components/button-shaded";
import * as styles from './styles';

const AddCar = () => {
 
  return (
    <div>
  <Header/> 
  <h1 style={styles.header}>Добавить транспорт</h1>
    <div style={styles.block}>
         <RouteInfoBlock/>
         <TransportCargoInfo/>
         <PaymentInfoBlock/>
         <AdditionalInfoBlock />
    </div>
    <div style={styles.buttonblock}> <div style={styles.buttonmargin}><ButtonEmpty label="Отмена" width="130px" /> </div><ButtonShaded label="Разместить танспорт"  width="240px" /></div>
    <Footer/>
    </div>
  );
};

export default AddCar;
