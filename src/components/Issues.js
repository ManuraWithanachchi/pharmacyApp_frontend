import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";


const IssuesTable = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    axios
      .get("https://drab-seal-teddy.cyclic.app/api/issues")
      .then((res) => {
        console.log(res);
        setIssues(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <h3>Issues</h3>
      <Table style={{backgroundColor:"#F0FFFF"}}>
        <thead>
          <tr>
           
            <th>Name of the Article</th>
            <th>Date</th>
            <th>To</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {issues &&
            issues.map((issue) => (
              <tr key={issue._id}>
                <td> {issue.articleName}</td>
                <td>{issue.date}</td>
                <td>{issue.to}</td>
                <td> {issue.quantity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default IssuesTable;
