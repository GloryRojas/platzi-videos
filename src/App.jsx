import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';
import useInitialState from './hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='app'>
      <Header />
      <Search />
      { (initialState.mylist && initialState.mylist.length) && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      { (initialState.originals && initialState.originals.length) && (
        <Categories title='Originales'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      { (initialState.trends && initialState.trends.length) && (
        <Categories title='Tendencias'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
