const Sign = (vsCurrency) =>{
    if( vsCurrency === 'usd') {
        const symbol = '$' ;
        return symbol;
    } else {
        const symbol = '€' ;
        return symbol;
    }
}

export { Sign } ;