import React from 'react';

// Styles
import styles from './selectBox.module.css';

const SelectBox = ({selectValue, onChange}) => {
    
    return (
        <div>
            <select className={styles.selectCurrency} value={selectValue} onChange={onChange}>
                <option value='usd'>usd</option>
                <option value='eur'>eur</option>
            </select>
        </div>
    );
};

export default SelectBox;