import React, { useState } from 'react';
import Charts from './Charts';
import './index.css';

const App = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [data, setData] = useState(null);

  const fetchAnalyticsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/getClicksByTarget/${shortUrl}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAnalyticsData();
  };

  return (
    <div className="App">
      <header>
        <h1>TinyURL</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="shortUrl" 
            className="form-input"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            placeholder="Enter Short URL"
            required 
          />
          <button type="submit" className="btn">Get Analytics</button>
        </form>
        {data && <Charts data={data} />}
      </main>
    </div>
  );
};

export default App;

