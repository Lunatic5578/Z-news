import React, { useState, useEffect } from 'react';
import News from './News';

const NewsBoard = ({ category = 'general' }) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        
        const fetchNews = async () => {
            // Create unique cache keys for each category
            const cacheKey = `cachedNewsData_${category}`;
            const timestampKey = `cacheTimestamp_${category}`;
            
            // Check cache for THIS category
            const cachedData = localStorage.getItem(cacheKey);
            const cacheTimestamp = localStorage.getItem(timestampKey);
            const isCacheValid = cacheTimestamp && Date.now() - cacheTimestamp < 1740000; // 29 minutes

            // Only use cache if same category AND valid
            if (cachedData && isCacheValid) {
                console.log(`Using cached news data for ${category}`);
                setArticles(JSON.parse(cachedData));
                setIsLoading(false);
                return;
            }

            // Always fetch fresh data when category changes
            try {
                console.log(`Fetching fresh ${category} news`);
                const url = `https://api.mediastack.com/v1/news?access_key=${
                    import.meta.env.VITE_API_KEY
                }&categories=${category}&countries=in`;
                
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`API Error: ${response.status}`);
                }

                const data = await response.json();
                const freshArticles = data.data || [];
                
                setArticles(freshArticles);
                
                // Cache with category-specific keys
                localStorage.setItem(cacheKey, JSON.stringify(freshArticles));
                localStorage.setItem(timestampKey, Date.now());
                
            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
                
                // Fallback to cached data if available (even from other categories)
                if (cachedData) {
                    setArticles(JSON.parse(cachedData));
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, [category]); // Re-run when category changes

    if (isLoading) return <div className="text-center py-8">Loading {category} news...</div>;
    if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    if (!articles.length) return <div className="text-center py-8">No {category} articles found</div>;

    return (
        <div className='mt-5'> 
            <h2 className='text-center'>
                Latest <span className='badge bg-danger mb-2 text-capitalize'>{category} News</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {articles.map((news, index) => (
                    <News 
                        key={index} 
                        title={news.title} 
                        description={news.description} 
                        src={news.image} 
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsBoard;