const us_companies_array = [];

const us_symbols_array = [];

const indian_companies_array = [];

const indian_symbols_array = [];

const url = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=' + symbol + '.BO&outputsize=compact&datatype=json';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd8dd6cf6a7msha9a35b77edc055ep190fd9jsnbea0221c9988',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

let products = fetch(url, options);

products.then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))