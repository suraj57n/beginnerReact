// import logo from './logo.svg';
import './App.css';
import react from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './styles.css';
import { urls } from './requests';
import Rows from './Rows';
import { ReactDOM } from 'react-dom';
import Board from './Board'
import Banner from './Banner';
import Nav from './Nav';
function App() {
  // console.log(urls.trending);
  return (
   
    <div className="app">
      <Nav/>
      <Banner></Banner>
      <Rows title="Trending Page" fetchUrl={urls.trending} isLargeRow={true}></Rows>
      <Rows title="Netflix Movies" fetchUrl={urls.netflix}></Rows>
      <Rows title="Popular" fetchUrl={urls.popular}></Rows>
      <Rows title="Top Rated" fetchUrl={urls.topRated}></Rows>
      <Rows title="Recent" fetchUrl={urls.recent}></Rows>
      <Rows title="Action" fetchUrl={urls.action}></Rows>
      <Rows title="Came out in 2022" fetchUrl={urls.year}></Rows>
      <Rows title="popular Series" fetchUrl={urls.popularSeries}></Rows>
    </div>
  )
}

export default App;
