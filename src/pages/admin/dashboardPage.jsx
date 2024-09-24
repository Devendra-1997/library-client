import { useState } from "react";
import StatsTable from "../../components/statsTable"; // Component for displaying various dashboard stats
import { Stack, Button } from "react-bootstrap";
import CreateOrEditStatsModal from "../../components/modal/createOrEditStatsModal"; // Modal for creating or editing dashboard items
import useForm from "../../hooks/useForm";

const initialFormData = {
  metric: "",
  value: "",
  description: "",
};

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);

  const modalPayload = useForm(initialFormData);
  const { setFormData } = modalPayload;

  const openCreateMetricModal = () => {
    setFormData(initialFormData);
    setShowModal(true);
  };

  return (
    <>
      <Stack direction="horizontal" className="justify-content-between">
        <input type="text" placeholder="Search Metrics" />

        {/* Button To Launch Create Metric Modal */}
        <Button variant="success" onClick={() => openCreateMetricModal()}>
          Add Metric
        </Button>
      </Stack>

      {/* Stats Table */}
      <StatsTable setShowModal={setShowModal} setFormData={setFormData} />

      <CreateOrEditStatsModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalPayload={modalPayload}
      />
    </>
  );
};

export default DashboardPage;
