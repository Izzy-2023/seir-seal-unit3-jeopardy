// src/utils/fetchTriviaForCategory.js
const fetchTriviaForCategory = async (category) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/trivia?category=${category}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': '6dQckBwH5gwvhoqTrCMkgg==uFt94SK3PHJImGMp', // Replace with your actual API key
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(`Trivia for ${category}:`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching trivia for ${category}:`, error);
      throw error;
    }
  };
  
  export default fetchTriviaForCategory;
  