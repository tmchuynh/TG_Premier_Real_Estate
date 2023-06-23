import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        src="../stock-house-real-property.jpg"
        style={{width: '100%', height: '18rem', objectFit: 'cover', objectPosition: 'bottom'}}
      />
    </Figure>
  );
}

export default FigureExample;