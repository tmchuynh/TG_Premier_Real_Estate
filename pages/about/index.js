import * as React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';   
import ClippedDrawer from '../components/ClippedDrawer';
import FigureExample from '../components/Figure';
import CustomTimeline from '../components/Timeline';

export default function Main() {
  return (
    <>
      <ClippedDrawer >
        <FigureExample />
        <CustomTimeline/>
      </ClippedDrawer>
    </>
  );
}