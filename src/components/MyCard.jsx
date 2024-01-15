import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, name, description, nameT, color}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
        {description}
        </Card.Text>
      </Card.Body>
      <Tags color={color} nameT={nameT} />
    </Card>
  )
}

export default MyCard