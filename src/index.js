import './index.css';
import numeral from 'numeral';

const fundingValue = numeral(1000).format('$0.00');
console.log(`I would pledge ${fundingValue} for this awesome startup`);//eslint-disable-line no-console
