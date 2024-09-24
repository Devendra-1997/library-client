/* eslint-disable react/prop-types */
import { Table, Button } from "react-bootstrap";

const StatsTable = ({ setShowModal, setFormData }) => {
  const statsData = [
    {
      id: 1,
      metric: "Total Users",
      value: "",
      description: "Number of registered users",
    },
    {
      id: 2,
      metric: "Total Books",
      value: 800,
      description: "Total number of books in the system",
    },
    {
      id: 3,
      metric: "Active Borrows",
      value: 200,
      description: "Number of active borrow requests",
    },
    {
      id: 4,
      metric: "Reviews",
      value: 350,
      description: "Number of book reviews left by users",
    },
  ];

  const handleEdit = (stat) => {
    setFormData(stat);
    setShowModal(true);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {statsData.map((stat) => (
          <tr key={stat.id}>
            <td>{stat.metric}</td>
            <td>{stat.value}</td>
            <td>{stat.description}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(stat)}>
                Edit
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StatsTable;
