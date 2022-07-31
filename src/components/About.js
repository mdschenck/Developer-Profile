import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const about = () => {
return (
<Row>
<Col xs={2} className="left" id="aboutme"><h2 className="leftSideH2">About</h2></Col>
<Col xs={10} className="aboutMe-block">
  <p>
    Web developer based in Atlanta, Georgia and working in Ecommerce / Digital Merchandising & Systems Integration.
  </p>
</Col>
</Row>
);
};

export default about;