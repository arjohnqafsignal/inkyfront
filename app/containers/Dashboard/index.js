import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';

import WOW from 'wowjs';
import ContentBox from '../../components/Dashboard/ContentBox';

export default function Dashboard() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  });

  return (
    <div>
      <Helmet title="Inky - Dashboard" />
      <Row>
        <Col className="p-5 my-5">
          <ContentBox />
        </Col>
      </Row>
    </div>
  );
}
