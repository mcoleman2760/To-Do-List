import React, { useState, useEffect } from 'react';

const RandomFact = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the fact from the API
    const fetchFact = async () => {
      try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    
        if (!response.ok) {
          throw new Error('Failed to fetch the fact');
        }
        const data = await response.json();
        setFact(data.text); 
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFact()
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Today's Random Fact</h1>
      <p>{fact}</p>
    </div>
  );
};

export default RandomFact;