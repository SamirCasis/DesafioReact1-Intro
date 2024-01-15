import Badge from 'react-bootstrap/Badge';

const Tags = ({nameT, color}) => {
  return (
    <div>
    <h3>
    <Badge bg={color}>{nameT}</Badge>
    </h3>
    </div>
  )
}

export default Tags