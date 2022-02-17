import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
const card = (props) => {
  const data = props.data;
  return (
    <>
      {data.map((item, index) => (
        <Card key={index}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text> 
              {item.description}
            </Card.Text>
            <Button variant="primary"><Link to={item.path}>see more</Link></Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default card;
