import * as React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import ClippedDrawer from '../components/ClippedDrawer';
import FigureExample from '../components/Figure';
import AdvancedCard from '../components/Card';
import CardFooter from '../components/CardFooter';


const cardsData = [
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    header: <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />,
    footer:
      <CardFooter contact="mailto:upchh@example.com" cell="tel:1-800-555-1212" />
    ,
  },
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    header: <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />,
    footer:
      <CardFooter contact="mailto:upchh@example.com" cell="tel:1-800-555-1212" />
    ,
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