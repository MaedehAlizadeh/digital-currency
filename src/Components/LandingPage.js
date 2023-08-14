import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../Services/api';

// Components
import Coin from './Shared/Coin';
import Loading from './Shared/Loading';
import SelectBox from './Shared/selectBox';

// Styles
import styles from './LandingPage.module.css';

const LandingPage = () => {

    const [coins, setCoins] = useState([]);
    const [select, setSelect] = useState('usd');
    const [search, setSearch] = useState('');

    useEffect( ()=>{
        const fetchAPI = async()=>{
            setCoins( await getCoin(select));
        }

        fetchAPI();
    }, [select])


    const selectHandler = event => {
        setSelect(event.target.value);
    }

    const searchHandler = event =>{
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h3>cryptocurrency prices</h3>
                <div className={styles.question}>
                    <input className={styles.searchInput} type='text' placeholder='search' value={search} onChange={searchHandler} />
                    <SelectBox selectValue={select} onChange={selectHandler} />
                </div>
            </div>
            {coins.length ?
                <table className={styles.coinTable}>
                    <thead>
                        <tr>
                            <th className={styles.tableNumber}>#</th>
                            <th className={styles.coinName}>Digital Currency</th>
                            <th>Price</th>
                            <th>Mkt Cap</th>
                            <th>24h</th>
                        </tr>
                    </thead>
                    <tbody className={!coins.length && styles.isLoading}>
                        {searchedCoins.map(coin => <Coin key={coin.id} 
                                                        name={coin.name} 
                                                        image={coin.image} 
                                                        currentPrice={coin.current_price}
                                                        marketCap={coin.market_cap} 
                                                        marketCapRank={coin.market_cap_rank} 
                                                        priceChange={coin.price_change_percentage_24h}
                                                        vsCurrency={select}
                                                    />) 
                            
                            
                        }
                    </tbody>
                </table> :        
                <Loading />
            }
        </div>
    );
};

export default LandingPage;