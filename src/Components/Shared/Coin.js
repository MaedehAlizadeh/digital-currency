import React from 'react';

// Styles
import styles from './Coin.module.css';
import { Sign } from '../../Helper/Function';

const Coin = ({name,image,currentPrice,marketCap,marketCapRank,priceChange,vsCurrency}) => {
    return (
        <tr className={styles.coinContainer}>
            <td><span className={styles.marketCapRank}>{marketCapRank}</span></td>
            <td  className={styles.imgAndName}>
                <div>
                    <img src={image} alt='logo'/>
                    <span>{name}</span> 
                </div>
            </td>
            <td><span className={styles.price}>{currentPrice.toFixed(2)} {Sign(vsCurrency)}</span></td>
            <td className={styles.marketCap}>
                <span>{marketCap.toLocaleString()} {Sign(vsCurrency)}</span>
            </td>
            <td><span className={ priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange }>{priceChange.toFixed(2)} %</span></td>
        </tr>
    );
};

export default Coin;