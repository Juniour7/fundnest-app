import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import CustomPagination from "./CustomPagination";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {  deleteUser, getUsers, updateUser } from "../../services/UserService";

function ListOfUsers() {
  const [rows, setRows] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalMode, setModalMode] = React.useState('view'); 
  const navigate = useNavigate();
  const [newUser, setNewUser] = React.useState({
    email: '',
     password: '',
    first_name: '',
    last_name: '',
    organization_name: '',
    phone_number: '',
    organization_type: '',
    organization_description: '',
    organization_website: '',
    agreeterms: false,
    mailing_list: false
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setRows(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    // { field: 'user_id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 200 },
    
    // { field: 'first_name', headerName: 'First Name', width: 130 },
    // { field: 'last_name', headerName: 'Last Name', width: 130 },
    { field: 'organization_name', headerName: 'Organization Name', width: 200 },
    { field: 'phone_number', headerName: 'Phone Number', width: 150 },
    { field: 'organization_type', headerName: 'Organization Type', width: 130 },
    // { field: 'organization_description', headerName: 'Organization Description', width: 200 }, { 
    {field: 'organization_website', 
    headerName: 'Organization Website', 
    width: 300,
    renderCell: (params) => (
      <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => window.open(params.value, '_blank')}
        disabled={!params.value}
      >
        Visit Website
      </Button>
      <button
              className='btn btn-sm btn-warning'
              onClick={() => handleVisitDashboard(params.row)}
            >
              Visit User Dashboard
            </button>
      </>
    )
  },
    // { field: 'role', headerName: 'role', width: 100 },
    // { field: 'agreeterms', headerName: 'Agree to Terms', type: 'boolean', width: 100 },
    // { field: 'mailing_list', headerName: 'Mailing List', type: 'boolean', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 400,
      renderCell: (params) => {
        const userRole = params.row.role; 
    
        return (
          <div className="flex gap-2">
            {userRole === 'admin' && (
              <Tooltip title="Revoke Admin Rights">
                <span>
                  <Button
                    variant="contained"
                    color="error"
                    style={{  marginRight: 4 }}
                    startIcon={<ArrowDownwardIcon />}
                    size="small"
                    onClick={() => handleChangeRolee(params.row)}
                  >
                    {/* Revoke */}
                  </Button>
                </span>
              </Tooltip>
            )}
            {userRole === 'user' && (
              <Tooltip title="Assign Admin Rights">
                <span>
                  <Button
                    variant="contained"
                    color="error"
                    style={{  marginRight: 4 }}
                    startIcon={<ArrowUpwardIcon />}
                    size="small"
                    onClick={() => handleChangeRolee(params.row)}
                  >
                    {/* Assign */}
                  </Button>
                </span>
              </Tooltip>
            )}
            <Tooltip title="View Details">
              <span>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<VisibilityIcon />}
                  size="small"
                  style={{  marginRight: 4 }}
                  onClick={() => handleView(params.row)}
                >
                  {/* View */}
                </Button>
              </span>
            </Tooltip>
            <Tooltip title="Edit User">
              <span>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<EditIcon />}
                  size="small"
                  style={{  marginRight: 4 }}
                  onClick={() => handleEdit(params.row)}
                >
                  {/* Edit */}
                </Button>
              </span>
            </Tooltip>
            <Tooltip title="Delete User">
              <span>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  size="small"
                  style={{  marginRight: 4 }}
                  onClick={() => handleDelete(params.row)}
                >
                  {/* Delete */}
                </Button>
              </span>
            </Tooltip>
          </div>
        );
      },
    }
  ];
  const handleVisitDashboard =( user) => {
  
    localStorage.setItem('tempuserEmail', user.email);
    const tempuserId=user.user_id;
    localStorage.setItem('tempuserId', tempuserId);
    navigate('/user-dashboard');
  };
  const handleView = (row) => {
    setSelectedUser(row);
    setModalMode('view');
    setOpenModal(true);
  };

  const handleEdit = (row) => {
    setSelectedUser(row);
    setModalMode('edit');
    setOpenModal(true);
  };

  const handleDelete = (row) => {
    setSelectedUser(row);
    setModalMode('delete');
    setOpenModal(true);
  };

  const handleAdd = () => {
    setNewUser({
      email: '',
      first_name: '',
      password: '',
      last_name: '',
      organization_name: '',
      phone_number: '',
      organization_type: '',
      organization_description: '',
      organization_website: '',
      agreeterms: false,
      mailing_list: false
    });
    setModalMode('add');
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedUser(null);
    setNewUser({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      organization_name: '',
      phone_number: '',
      organization_type: '',
      organization_description: '',
      organization_website: '',
      agreeterms: false,
      mailing_list: false
    });
  };

  const handleChangeRolee = async (row) => {
    try {
      const action = row.role === 'admin' ? 'revoke' : 'assign';
      const token = localStorage.getItem('token');
      const payload = {
        email: row.email,
        action: action
      };
  
      const response = await axios.post(
        'https://backend.iraady.com:8000/assign-role/',
        payload,
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );
  
      const data = await getUsers();
      setRows(data);
      toast.success(`User role ${action}ed successfully!`, { autoClose: 1000 });
    } catch (error) {
      toast.error("Error changing user role.", { autoClose: 1000 });
    }
  };
  

  const handleUpdateUser = async () => {
    try {
      await updateUser(selectedUser.user_id, selectedUser);
      const data = await getUsers();
      setRows(data);
      handleModalClose();
      toast.success("User updated successfully!", { autoClose: 1000 });
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user.", { autoClose: 1000 });
    }
  };
  const handleCreateUser = async () => {
    try {
      await axios.post('https://backend.iraady.com:8000/users/', newUser);
      const data = await getUsers();
      setRows(data);
      handleModalClose();
      toast.success("User created successfully!", { autoClose: 1000 });
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user.", { autoClose: 1000 });
    }
  };
  const handleDeleteUser = async () => {
    try {
      await deleteUser(selectedUser.user_id);
      const data = await getUsers();
      setRows(data);
      handleModalClose();
      toast.success("User deleted successfully!", { autoClose: 1000 });
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user.", { autoClose: 1000 });
    }
  };

  return (
    <div style={{  backgroundColor: 'white',overflow:'auto' }} className="max-w-max">
      <span className="flex justify-between p-2 border-b">
      <h1>List of Users</h1>
      <Button
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
        style={{ marginBottom: 16 }}
        onClick={handleAdd}
      >
        Add User
      </Button>
      </span>
    
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.user_id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        components={{
          Pagination: CustomPagination,
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            top: 100,
            zIndex: 1,
            backgroundColor: 'white',
          },
        }}
      />
  <ToastContainer />
      {/* Modal for View, Edit, Delete, Add */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ ...style, width: { xs: 400, md: 800 }, maxWidth: '100%' }}>
          <div className="flex justify-between items-center mb-4">
            <Typography id="modal-title" variant="h6" component="h2">
              {modalMode === 'view' ? 'View User' : modalMode === 'edit' ? 'Edit User' : modalMode === 'delete' ? 'Delete User' : 'Add User'}
            </Typography>
            <IconButton
              onClick={handleModalClose}
              className="text-gray-800 hover:text-red-500 focus:outline-none"
            >
              <CloseIcon />
            </IconButton>
          </div>
          {modalMode === 'view' && (
  <div className="p-6 space-y-4 bg-gray-50 rounded-lg shadow-md">
    <div className="mb-2 flex items-center">
      <EmailIcon className="mr-2 text-blue-500" />
      <Typography variant="body1" className="font-medium text-gray-700">Email:</Typography>
      <Typography variant="body2" className="text-gray-600 ml-2">{selectedUser?.email}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">First Name:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.first_name}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Last Name:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.last_name}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Organization Name:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.organization_name}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Phone Number:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.phone_number}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Organization Type:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.organization_type}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Organization Description:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.organization_description}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Organization Website:</Typography>
      <a href={selectedUser?.organization_website} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline w-2/3">
        Visit Website
      </a>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Agree to Terms:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.agreeterms ? 'Yes' : 'No'}</Typography>
    </div>
    <div className="mb-2 flex items-center">
      <Typography variant="body1" className="font-medium text-gray-700 w-1/3">Mailing List:</Typography>
      <Typography variant="body2" className="text-gray-600 w-2/3">{selectedUser?.mailing_list ? 'Yes' : 'No'}</Typography>
    </div>
  </div>
)}





        {/* Add User Modal */}
        {modalMode === 'add' && (
        <div className="p-6 space-y-4 bg-gray-50 rounded-lg shadow-md">
          <TextField
            label="Email"
            value={newUser.email || ''}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            fullWidth
            margin="normal"
            type="email"
          />
            <div className="flex space-x-4">
          <TextField
            label="First Name"
            value={newUser.first_name || ''}
            onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
            fullWidth
            margin="normal"
            />
          <TextField
            label="Last Name"
            value={newUser.last_name || ''}
            onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
            fullWidth
            margin="normal"
            />
            </div>
            <div className="flex space-x-4">
          <TextField
            label="Organization Name"
            value={newUser.organization_name || ''}
            onChange={(e) => setNewUser({ ...newUser, organization_name: e.target.value })}
            fullWidth
            margin="normal"
          />
            <TextField
              label="Organization Website"
              value={newUser.organization_website || ''}
              onChange={(e) => setNewUser({ ...newUser, organization_website: e.target.value })}
              fullWidth
              margin="normal"
            />
            </div>
            <div className="flex space-x-4">
          <TextField
            label="Phone Number"
            value={newUser.phone_number || ''}
            onChange={(e) => setNewUser({ ...newUser, phone_number: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            value={newUser.password || ''}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            fullWidth
            margin="normal"
            type="password"
          />
          </div>
          <div className="form-group">
            <label htmlFor="organization_type">Organization Type</label>
            <select
              id="organization_type"
              name="organization_type"
              value={newUser.organization_type}
              onChange={(e) => setNewUser({ ...newUser, organization_type: e.target.value })}
              required
              autoComplete="organization-title"
              className="w-full p-2"
            >
              <option value="">Select</option>
              <option value="Nonprofit">Nonprofit</option>
              <option value="CBO">CBO</option>
              <option value="NGO">NGO</option>
              <option value="Individual">Individual</option>
              {/* more organization types as needed */}
            </select>
          </div>
          <TextField
            label="Organization Description"
            value={newUser.organization_description || ''}
            onChange={(e) => setNewUser({ ...newUser, organization_description: e.target.value })}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <div className="flex items-center mb-4">
            <Checkbox
              checked={newUser.agreeterms || false}
              onChange={(e) => setNewUser({ ...newUser, agreeterms: e.target.checked })}
            />
            <Typography variant="body1" className="ml-2">Agree to Terms</Typography>
          </div>
          <div className="flex items-center mb-4">
            <Checkbox
              checked={newUser.mailing_list || false}
              onChange={(e) => setNewUser({ ...newUser, mailing_list: e.target.checked })}
            />
            <Typography variant="body1" className="ml-2">Mailing List</Typography>
          </div>
          <div className="flex space-x-4">
            <Button variant="outlined" color="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleCreateUser}>
              Add User
            </Button>
          </div>
        </div>
      )}
{/* Edit User Modal */}
{modalMode === 'edit' && (
  <div className="p-6 space-y-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto">
    <TextField
      label="Email"
      value={selectedUser?.email || ''}
      onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
      fullWidth
      margin="normal"
      type="email"
    />
    <div className="flex space-x-4">
      <TextField
        label="First Name"
        value={selectedUser?.first_name || ''}
        onChange={(e) => setSelectedUser({ ...selectedUser, first_name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={selectedUser?.last_name || ''}
        onChange={(e) => setSelectedUser({ ...selectedUser, last_name: e.target.value })}
        fullWidth
        margin="normal"
      />
    </div>
    <TextField
      label="Phone Number"
      value={selectedUser?.phone_number || ''}
      onChange={(e) => setSelectedUser({ ...selectedUser, phone_number: e.target.value })}
      fullWidth
      margin="normal"
    />
    <div className="flex space-x-4">
      <TextField
        label="Organization Name"
        value={selectedUser?.organization_name || ''}
        onChange={(e) => setSelectedUser({ ...selectedUser, organization_name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Organization Type"
        value={selectedUser?.organization_type || ''}
        onChange={(e) => setSelectedUser({ ...selectedUser, organization_type: e.target.value })}
        fullWidth
        margin="normal"
      />
    </div>
    <TextField
      label="Organization Website"
      value={selectedUser?.organization_website || ''}
      onChange={(e) => setSelectedUser({ ...selectedUser, organization_website: e.target.value })}
      fullWidth
      margin="normal"
    />
    <TextField
      label="Organization Description"
      value={selectedUser?.organization_description || ''}
      onChange={(e) => setSelectedUser({ ...selectedUser, organization_description: e.target.value })}
      fullWidth
      margin="normal"
    />
    <div className="flex space-x-6 items-center">
      <div className="flex items-center">
        <Checkbox
          checked={selectedUser?.agreeterms || false}
          onChange={(e) => setSelectedUser({ ...selectedUser, agreeterms: e.target.checked })}
        />
        <Typography variant="body1" className="ml-2">Agree to Terms</Typography>
      </div>
      <div className="flex items-center">
        <Checkbox
          checked={selectedUser?.mailing_list || false}
          onChange={(e) => setSelectedUser({ ...selectedUser, mailing_list: e.target.checked })}
        />
        <Typography variant="body1" className="ml-2">Mailing List</Typography>
      </div>
    </div>
    <div className="flex justify-end space-x-4">
      <Button variant="outlined" color="secondary" onClick={handleModalClose}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" onClick={handleUpdateUser}>
        Save Changes
      </Button>
    </div>
  </div>
)}


          {modalMode === 'delete' && (
            <div className="space-y-4">
              <Typography variant="body1">
                Are you sure you want to delete user <strong>{selectedUser?.email}</strong>?
              </Typography>
            </div>
          )}

          <Box mt={2} display="flex" justifyContent="flex-end">
            {modalMode === 'view' && (
              <Button onClick={handleModalClose} variant="contained" color="primary">Close</Button>
            )}
    
            {modalMode === 'delete' && (
              <Button
                onClick={handleDeleteUser}
                variant="contained"
                color="error"
              >
                Delete
              </Button>
            )}
      
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default ListOfUsers;