import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PetBlock from '../components/PetBlock';

export const Home = () => {
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(0);
  
    const petIds = [22, 5, 14, 3, 4, 11, 6, 7, 23, 9, 10, 1, 12, 13, 2, 15, 0, 17, 18, 19, 20, 16, 21, 8];
  
    return (
      <>
        <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />

          <Sort />
        </div>
        <h2 className="content__title">Все питомцы</h2>
        <div className="content__items" data-speed=".75">
          {petIds.map((id) => (
            <PetBlock data-lag=".5" data-speed=".75" key={id} petId={id} />
          ))}
        </div>
      </>
    );
  };
  

export default Home;