import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Converter.css'

const Converter = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      setExchangeRates(response.data.rates);
      setCurrencies(Object.keys(response.data.rates)); 
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching exchange rates", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [baseCurrency]);

  // Convert the currency amount
  const handleConvert = () => {
    if (baseCurrency && targetCurrency && amount) {
      const rate = exchangeRates[targetCurrency];
      if (rate) {
        setConvertedAmount((amount * rate).toFixed(2)); // Convert and round the result to 2 decimal places
      }
    }
  };

  useEffect(() => {
    handleConvert();
  }, [amount, baseCurrency, targetCurrency]);

  return (
    <div className="currency-convert">


      <div className="converter-container">
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
            className="currency-select"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <span className="to">To</span>

        <div className="input-group">
          <input
            type="text"
            value={convertedAmount || '0.00'}
            readOnly
            className="converted-amount"
          />
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            className="currency-select"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <button onClick={handleConvert} className="convert-button">Convert</button>
        )}
      </div>
    </div>
  );
};

export default Converter;
