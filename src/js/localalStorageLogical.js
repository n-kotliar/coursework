export const LS_FAV = 'favourites_exercises';

export const setFav = arr => {
  localStorage.setItem(LS_FAV, JSON.stringify(arr));
};

export const getFav = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err.message);
  }
};

export const removeFromFav = id => {
  const filteredArr = getFav(LS_FAV).filter(obj => obj._id !== id);
  localStorage.removeItem(LS_FAV);
  localStorage.setItem(LS_FAV, JSON.stringify(filteredArr));
};

const QUOTE_KEY = 'todays_uote';
const QUOTE_TIME_KEY = 'quote_time';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

let cachedQuote = null;

async function getQuote() {
  if (cachedQuote) return cachedQuote;

  const storedQuote = localStorage.getItem(QUOTE_KEY);
  const storedTime = localStorage.getItem(QUOTE_TIME_KEY);

  if (
    storedQuote &&
    storedTime &&
    Date.now() - Number(storedTime) < ONE_DAY_MS
  ) {
    cachedQuote = JSON.parse(storedQuote); 
    return cachedQuote;
  }

  try {
    const res = await fetch('https://your-energy.b.goit.study/api/quote');
    const data = await res.json();

    localStorage.setItem(QUOTE_KEY, JSON.stringify(data));
    localStorage.setItem(QUOTE_TIME_KEY, Date.now().toString());
    cachedQuote = data; 

    return data;
  } catch (err) {
    console.error('Error fetching quote:', err);
    if (storedQuote) {
      cachedQuote = JSON.parse(storedQuote); 
      return cachedQuote;
    }
    return { quote: 'No quote available', author: '' };
  }
}

export const displayQuote = async quoteContainer => {
  const { quote, author } = await getQuote();
  quoteContainer.innerHTML = renderQuoteHTML(quote, author);
};

