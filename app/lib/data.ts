import { Quote } from './definitions';

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchQuote(): Promise<Quote> {
  await delay(3000); // Wait for 3 seconds

  const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
    {
        headers: {
            'X-Api-Key': 'H1VQ8MtGSavRqCaZMxmA3w==zEQgyP82IqZlnqNw'
        }
    }
  );
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  return data[0];
}

export const quotePromise = fetchQuote();