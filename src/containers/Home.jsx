import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);

  return (
    <div className='app'>
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
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
    </div>
  );
};

export default Home;
