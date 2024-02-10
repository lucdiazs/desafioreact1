import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({imagen,nombre,descripcion,texto,color}) => {
    
    return(
    <Card style={{ width: '18rem' }} 
    className = 'm-2'
    >
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags color ={color} texto ={texto}/>
      </Card.Body>
    </Card>
    )

}
    export default MyCard