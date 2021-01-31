import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const MemberCard = ({
  member: { name, secondName, photo },
  handelName,
  desc,
}) => {
  return (
      
    <Card style={{ width: "18rem", margin: "20px 0 20px 0", }}>
      <Card.Img  src={photo} />
      <Card.Body style={{ backgroundColor:"aqua"}}>
        <Card.Title style={{color:"blue" }}>{name}</Card.Title>
        <Card.Title style={{color:"red" }}>{secondName}</Card.Title>
        <Card.Text style={{color:"yellow" }}>{desc}</Card.Text>
        <Button variant="primary" onClick={() => handelName(name)}>
          Click Me
        </Button>
      </Card.Body>
    </Card>
  
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }),

  handelName: PropTypes.func.isRequired,
};

MemberCard.defaultProps = {
  desc: "Football GOAT",
};

export default MemberCard;