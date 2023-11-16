import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const ReceiptTable = () => {
  const [receipts, setReceipts] = useState([]);
  useEffect(() => {
    axios
      .get("https://drab-seal-teddy.cyclic.app/api/receipts")
      .then((res) => {
        console.log(res);
        setReceipts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <h3>Receipts</h3>
      <Table  style={{backgroundColor:"#FAEBD7"}}>
        <thead>
          <tr>
            <th>Name of the Article</th>
            <th>Date</th>
            <th>From:</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {receipts &&
            receipts.map((receipt) => (
              <tr key={receipt._id}>
                <td> {receipt.articleName}</td>
                <td> {receipt.date}</td>
                <td>{receipt.from}</td>
                <td> {receipt.quantity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReceiptTable;
