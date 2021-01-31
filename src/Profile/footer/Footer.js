import React from "react";
import { FaSmokingBan, FaFutbol,FaRegThumbsUp } from "react-icons/fa";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          FCB best of  <br />
          
        </Card.Text>

        <div >
          <FaSmokingBan  />
          <FaRegThumbsUp />
          <FaFutbol />
        </div>
      </Card.Body>
      <Card.Footer>
        Youssef tanzekhti
      </Card.Footer>
    </Card>
  );
};

export default Footer;