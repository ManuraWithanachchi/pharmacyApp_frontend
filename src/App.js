import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import CreateClinic from "./components/CreateClinic";

import ReceiptsTable from "./components/Receipts"
import IssuesTable from "./components/Issues";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <ReceiptsTable />
          </Col>
          <Col>
            <IssuesTable />
            </Col>
         
        </Row>
        </Container>
        <Row>
          <Col>
            <CreateClinic />
          </Col>
        </Row>
      
    </>
  );
}

export default App;
