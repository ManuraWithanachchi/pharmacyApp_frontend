import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const ClinicTable = () => {
  const [clinic, setClnic] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clinic")
      .then((res) => {
        console.log(res);
        setClnic(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Consultant Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Total Patients</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {clinic &&
            clinic.map((clinic) => (
              <tr key={clinic._id}>
                <td> {clinic._id}</td>
                <td> {clinic.consultantName}</td>
                <td> {clinic.date}</td>
                <td> {clinic.time}</td>
                <td> {clinic.totalPatients}</td>
                <td> {clinic.fee}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClinicTable;
