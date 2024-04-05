import React from 'react';
import Meals from './components/Meals'
import Header from './components/Header'
import MealItem from './components/MealItem'

const App = () => {
 return (
  <>
    <Header />
     <main>
      <Meals />
     </main>
  </>
  );
}

export default App;
