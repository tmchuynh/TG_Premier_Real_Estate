import React from 'react';
import { Card } from 'primereact/card';
import styles from '../Style.modules.css/Card.module.css'

export default function AdvancedCard({ cards }) {
  return (
    <div className={styles.cardList}>
      {cards.map((card, index) => (
        <div key={index} className={styles.cardItem}>
          <Card
            title={card.title}
            subTitle={card.subtitle}
            footer={card.footer}
            header={card.header}
            className="md:w-25rem"
          >
            <p className="m-0">{card.content}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
