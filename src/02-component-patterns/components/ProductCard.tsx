import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ReactElement } from 'react';

interface Props{
  product:Product;
  children?:ReactElement;
}

interface Product{
  id:string;
  title:string;
  img?:string;
}

interface ProductButtonsProps{
  increaseBy:(value:number)=>void;
  counter:number;
}

export const ProductImage = ({img = ''}) => {
  return(
    <img className={styles.productImg} src={ img ? img : noImage } alt="Image product" />
  );
}

export const ProductTitle = ({title}:{title:string}) => {
  return (
    <span className={styles.productDescription}>{title}</span>
  );
}

export const ProductButtons = ({increaseBy, counter}:ProductButtonsProps) => {
  return(
    <div className={styles.buttonsContainer}>
      <button 
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button 
        className={styles.buttonAdd}
        onClick={() => increaseBy(1)}
      >+</button>
    </div>
  );
}

export const ProductCard = ({product, children}:Props) => {

  const {counter, increaseBy} = useProduct();

  return (
    <div className={styles.productCard}>
      { children }
      {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
    </div>
  )
}
