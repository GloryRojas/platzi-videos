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
            { initialState.mylist.map((item) => (
              <CarouselItem item={item} />
            ))}
          </Carousel>
        </Categories>
      )}
      { (initialState.originals && initialState.originals.length) && (
        <Categories title='Originales'>
          <Carousel>
            { initialState.originals.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      { (initialState.trends && initialState.trends.length) && (
        <Categories title='Tendencias'>
          <Carousel>
            { initialState.trends.map((item) => (
              <CarouselItem key={item} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Footer />
    </div>
  );
};

export default App;
