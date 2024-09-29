import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Timeline from './Timeline';
import './Timeline.css';
import ServiceStats from './ServiceStats';
import './ServiceStats.css';
import TestimonialCarousel from './TestimonialCarousel';
import Services from './Services';
import Banner1 from './Banner1';
import AboutCeo from './AboutCeo';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import CarouselComponent from './CarouselComponent';
import NavigationBar from './NavigationBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavigationBar />
  <div className="content">
    <Banner1 />
    </div>
    <Timeline />
    <Services />
    <ServiceStats />
    <TestimonialCarousel />
    <CarouselComponent />
    <AboutCeo />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
