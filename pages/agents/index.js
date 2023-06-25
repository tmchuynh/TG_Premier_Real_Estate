import * as React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ClippedDrawer from '../components/ClippedDrawer';
import FigureExample from '../components/Figure';
import AdvancedCard from '../components/Card';
import { Button } from 'primereact/button';
import CardFooter from '../components/CardFooter';


const cardsData = [
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    header: <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />,
    footer:
      <CardFooter contact="mailto:upchh@example.com" cell="tel:1-800-555-1212" />
    ,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
  },
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    header: <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />,
    footer:
      <CardFooter contact="mailto:upchh@example.com" cell="tel:1-800-555-1212" />
    ,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
  },
];

export default function Main() {
  return (
    <>
      <ClippedDrawer >
        <FigureExample />
        <AdvancedCard cards={cardsData} />
      </ClippedDrawer>
    </>
  );
}