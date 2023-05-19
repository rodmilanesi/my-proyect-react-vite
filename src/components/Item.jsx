import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { formatPrice } from "../lib/utils";

const Item = ({ name, price, img, id }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {formatPrice(price)}</Card.Text>
          <LinkContainer to={`/item/${id}`}>
            <Button variant="primary">Detalles</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
