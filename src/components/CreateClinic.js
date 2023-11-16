import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

function CreateClinic() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [consultantName, setconsultantName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [totalPatients, setTotalPatients] = useState(0);
  const [fee, setFee] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newClinic = {
      consultantName,
      date,
      time,
      totalPatients,
      fee,
    };
    console.log(newClinic);
    axios
      .post(
        "http://localhost:5000/api/clinic",
        consultantName,
        date,
        time,
        totalPatients,
        fee
      )
      .then((res) => {
        alert("Clinic Added!");
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);

        alert(error.message);
      });

    console.log(newClinic);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Clinic
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Clinic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Consultant Name</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter Name of the Consultant"
                onChange={(e) => setconsultantName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter the Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Enter start time"
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Patients</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter Number of Maximum patients"
                onChange={(e) => setTotalPatients(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Fee</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Charge per patient"
                onChange={(e) => setFee(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add to the List
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateClinic;
