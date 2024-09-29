/* eslint-disable react/prop-types */

import { Modal, Button, Form } from "react-bootstrap";

const CreateOrEditStatsModal = ({ showModal, setShowModal, modalPayload }) => {
  const { formData, handleChange, handleSubmit } = modalPayload;

  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {formData.id ? "Edit Metric" : "Create Metric"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="metric">
            <Form.Label>Metric</Form.Label>
            <Form.Control
              type="text"
              name="metric"
              value={formData.metric}
              onChange={handleChange}
              placeholder="Enter metric name"
              required
            />
          </Form.Group>
          <Form.Group controlId="value" className="mt-3">
            <Form.Label>Value</Form.Label>
            <Form.Control
              type="number"
              name="value"
              value={formData.value}
              onChange={handleChange}
              placeholder="Enter metric value"
              required
            />
          </Form.Group>
          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows={3}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4">
            {formData.id ? "Update Metric" : "Create Metric"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateOrEditStatsModal;
