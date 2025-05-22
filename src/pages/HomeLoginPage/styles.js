import { margin } from "../RouteSearchPage/styles";

export const pageContainer= {
    display: 'flex',
    flexDirection: 'row',
      margin: '50px auto 0 auto',
    width: '85%',
    height: '135vh', // по желанию, чтобы заняло весь экран
    gap: '1%', // промежуток между столбцами, можно убрать
  };

  export const rightflex = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '24px',
}

  export const currencyflex = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10%',
    marginBottom: '20px',
    gap: '24px',
}

export const imagePlaceholder = {
    width: '320px',  
    marginTop: '30px',
    marginLeft: '10%',      // або будь-яка інша ширина
    height: '320px',       // або будь-яка інша висота
    backgroundColor: '#f2f2f2',
    border: '1px dashed #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(/path-to-your-placeholder-icon.png)', // або base64 / svg
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '50px', // або 'contain'
  }


export const leftflex ={
    marginLeft: 'auto',
    alignItems: 'center',
    marginBottom: '20px',
    display: 'flex',
    gap: '24px',
}