import logo from './logo.svg';
import './scss/app.scss';
import React, {useEffect} from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PetBlock from './components/PetBlock';


const petIds = [22, 5, 14, 3, 4, 11, 6, 7, 23, 9, 10, 1, 12, 13, 2, 15, 0, 17, 18, 19, 20, 16, 21, 8]; // Массив ID питомцев, которые вы хотите отобразить


function App() {


  return (
    <div className="wrapper">
      <Header /><div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все питомцы</h2>
          <div className="content__items" data-speed=".75">

            {petIds.map(id => (
              <PetBlock key={id} petId={id} /> // Передаем ID питомца в PetBlock
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
