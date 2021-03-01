import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Categories from './components/Categories';
import Carousel from './components/Carousel';
import CarouselItem from './components/CarouselItem';
import Footer from './components/Footer';

const App = () => (
  <div className='app'>
    <Header />
    <Search />
    <Categories title='Mi lista'>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title='Tu lista'>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>

    <Categories title='Nuestra lista'>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
