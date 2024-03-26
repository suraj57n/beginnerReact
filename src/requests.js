const API_KEY = "cf016d8d";
const link = "https://www.omdbapi.com/?s=2002&apikey=cf016d8d";

const urls = {
    popular: `popular&type=movie&apikey=${API_KEY}`,
    netflix: `netflix&type=movie&apikey=${API_KEY}`,
    topRated: `anime&type=series&apikey=${API_KEY}`,
    trending: `psychology&type=movie&apikey=${API_KEY}`,
    recent: `released&type=movie&apikey=${API_KEY}`,
    action: `action&type=movie&apikey=${API_KEY}`,
    year: `2022&type=movie&apikey=${API_KEY}`,
    popularSeries: `popular&type=series&apikey=${API_KEY}`,
    topSeries: `top_rated&type=series&apikey=${API_KEY}`,
    trendingSeries: `action&type=series&apikey=${API_KEY}`
};

export {urls};