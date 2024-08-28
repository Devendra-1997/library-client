import { Button, Stack } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAction } from "../user/userActions";
import CreateOrEditUserModal from "../../components/modal/createOrEditUserModal";
import UsersTable from "../../components/usersTable";

const initialFormData = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  password: "",
  role: "admin",
};

const UsersPage = () => {
  const [showModal, setShowModal] = useState(false);

  const formPayload = useForm(initialFormData);
  const { setFormData } = formPayload;

  const { users } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  // openCreateOrEditUserModal
  const openCreateOrEditUserModal = () => {
    setFormData(initialFormData);
    setShowModal(true);
  };

  return (
    <>
      <Stack direction="horizontal" className="justify-content-between">
        <input type="text" placeholder="Search user" />

        <Button variant="success" onClick={openCreateOrEditUserModal}>
          Add user
        </Button>
      </Stack>

      {/* Users Table */}
      <UsersTable users={users} />

      <CreateOrEditUserModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalPayload={formPayload}
      />
    </>
  );
};

export default UsersPage;
