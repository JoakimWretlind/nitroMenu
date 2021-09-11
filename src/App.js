import { useState } from 'react';
import { GlobalStyle } from './globalStyle';
import { Menu, Categories, ToTopBtn } from './components/index';
import data from './components/data';
import {
  Section,
  Title
} from './AppStyling';

// get unique categories
// Set function only get unique values
// make the categories to an array instead of objects
const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <>
      <GlobalStyle />
      <Section>
        <Title>Nitro Hardware</Title>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu data={menuItems} />
        <ToTopBtn />
      </Section>
    </>
  );
}

export default App;
