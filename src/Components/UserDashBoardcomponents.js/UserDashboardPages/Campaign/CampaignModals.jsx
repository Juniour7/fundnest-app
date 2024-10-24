import React, { useEffect, useState } from "react";
import { faBullseye, faCalendar, faChartLine, faClock, faDollarSign, faEnvelope, faFileAlt, faGlobe, faIdBadge, faImage, faMoneyBillWave, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { calculateEndDate, calculateProgress, calculateRemainingDays, updateCampaign } from "../../../../services/CampaignService";

// AddCampaignModal Component

 export const AddCampaignModal = ({ show, handleClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    fundraising_type: '',
    otherCategory: '',
    target_amount: '',
    current_amount: '',
    duration: '',
    country: 'Rwanda',
    campaign_name: '',
    description: '',
    poster_image_url: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    setImageFile(file);


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authenticatedEmail = localStorage.getItem('userEmail');

    if (formData.email !== authenticatedEmail) {
      setErrorMessage('Kindly sign up before creating a campaign.');
      console.error('Error: Authenticated email does not match the form email.');
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (imageFile) {
      data.append('poster_image_url', imageFile);  
    }

    try {
      const response = await fetch('https://backend.iraady.com:8000/campaigns/', {
        method: 'POST',
        body: data,
      });
      setErrorMessage('');
      if (response.ok) {
        setSuccessMessage('The campaign has been successfully created!');
        setErrorMessage('');
        handleClose();
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData); 
        setErrorMessage(errorData.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Network Error:', error); 
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Start a Fundraiser</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="logo-container">
          <img src={"https://iraady.com/static/media/Logo.ec09dc37890405cd1801.png"} alt="Iraady Logo" className="iraady-logo" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </Form.Group>
          <Form.Group controlId="fundraising_type">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="fundraising_type"
              value={formData.fundraising_type}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Religious">Religious</option>
              <option value="Wedding">Wedding</option>
              <option value="Funeral">Funeral</option>
              <option value="Civil Society">Civil Society</option>
              <option value="Business">Business</option>
              <option value="Floods">Floods</option>
              <option value="Other">Other</option>
            </Form.Control>
            {formData.fundraising_type === 'Other' && (
              <Form.Control
                type="text"
                name="otherCategory"
                value={formData.otherCategory}
                onChange={handleChange}
                placeholder="Enter other category"
                required
              />
            )}
          </Form.Group>
          <Form.Group controlId="target_amount">
            <Form.Label>Target Amount</Form.Label>
            <Form.Control
              type="text"
              name="target_amount"
              value={formData.target_amount}
              onChange={handleChange}
              placeholder="Enter the fundraising target amount"
              required
            />
          </Form.Group>
          <Form.Group controlId="current_amount">
            <Form.Label>Current Amount</Form.Label>
            <Form.Control
              type="text"
              name="current_amount"
              value={formData.current_amount}
              onChange={handleChange}
              placeholder="Enter the current amount"
            />
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Enter the duration of fundraiser in days"
              required
            />
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              as="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="Rwanda">Rwanda</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="campaign_name">
            <Form.Label>Fundraiser Name</Form.Label>
            <Form.Control
              type="text"
              name="campaign_name"
              value={formData.campaign_name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              required
            />
          </Form.Group>
          <Form.Group controlId="poster_image_url">
            <Form.Label>Image (to be used as poster)</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="poster_image_url"
              onChange={handleImageChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};




// ViewCampaignModal Component

// ShareCampaignModal Component
export const ShareCampaignModal = ({ show, handleClose, campaign }) => {
  if (!campaign) return null;

  return (
    <div className={`modal ${show ? "block" : "hidden"}`} style={{ display: show ? "block" : "none" }}>
      <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-content bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Share Campaign</h2>
          <p className="mb-2"><strong>Name:</strong> {campaign.name}</p>
          <p className="mb-2"><strong>Status:</strong> {campaign.status}</p>
          <p className="mb-2"><strong>Targeted Money:</strong> {campaign.targetedMoney}</p>
          <p className="mb-2"><strong>Reached Money:</strong> {campaign.reachedMoney}</p>
          <p className="mb-2"><strong>Start Date:</strong> {new Date(campaign.startDate).toLocaleDateString()}</p>
          <p className="mb-2"><strong>End Date:</strong> {new Date(campaign.endDate).toLocaleDateString()}</p>
          <p className="mb-2"><strong>Description:</strong> {campaign.description}</p>
          <img src={campaign.photo} alt={campaign.name} style={{ width: '100%' }} />
          <div>
            <strong>Additional Images:</strong>
            {campaign.images.map((url, index) => (
              <img key={index} src={url} alt={`${campaign.name} ${index}`} style={{ width: '100%', marginTop: '10px' }} />
            ))}
          </div>
          <button className="btn btn-primary mt-4" onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};



export const UpdateCampaignModal = ({ show, handleClose, campaign }) => {
  const {campaign_id
    ,campaign_user_email, campaign_description, campaign_fundraising_type, campaign_duration, campaign_country, campaign_name, current_amount, target_amount,poster_image_url, campaign_donors, campaign_user_id, campaign_created_at, campaign_updated_at, campaign_end_date, progress_percentage, remaining_days} = {...campaign};
    const { register, handleSubmit, formState: { errors },setValue } = useForm(
    );
    const [imagePreview,setImagePreview] = useState(`https://backend.iraady.com:8000${poster_image_url}`);
   
    const [imageFile, setImageFile] = useState(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
  

  useEffect(() => {
    setValue('campaign_name', campaign_name);
    setValue('campaign_user_email', campaign_user_email);
    setValue('campaign_description', campaign_description);
    setValue('campaign_fundraising_type', campaign_fundraising_type);
    setValue('campaign_duration', campaign_duration);
    setValue('campaign_country', campaign_country);
    setValue('target_amount', target_amount);
    setValue('current_amount', current_amount);
    setValue('poster_image_url', poster_image_url);
    setValue('campaign_donors', campaign_donors);
    setValue('campaign_user_id', campaign_user_id);
    setValue('campaign_created_at', campaign_created_at);
    setValue('campaign_updated_at', campaign_updated_at);
    setValue('campaign_end_date', campaign_end_date);
    setValue('progress_percentage', progress_percentage);
    setValue('remaining_days', remaining_days);

  },[campaign,setValue]); 
   const onSubmit = async (data) => {

    const formData = new FormData();
    formData.append('email', data.campaign_user_email);
    formData.append('description', data.campaign_description);
    formData.append('fundraising_type', data.campaign_fundraising_type);
    formData.append('duration', data.campaign_duration);
    formData.append('country', data.campaign_country);
    formData.append('target_amount', data.target_amount);
    formData.append('current_amount', data.current_amount);
    formData.append('campaign_donors', data.campaign_donors);
    formData.append('campaign_user_id', data.campaign_user_id);
    formData.append('campaign_created_at', data.campaign_created_at);
    formData.append('campaign_updated_at', data.campaign_updated_at);
    formData.append('campaign_end_date', data.campaign_end_date);
    formData.append('progress_percentage', data.progress_percentage);
    formData.append('remaining_days', data.remaining_days);
    formData.append('campaign_name',data.campaign_name);
    formData.append('user_id',campaign.campaign_user_id);

  if (imageFile) {
    formData.append('poster_image_url',imageFile);
  } else {
    formData.append('poster_image_url', campaign.poster_image_url);
    }
  try {

   let response =await updateCampaign(campaign.campaign_id, formData);

  } catch (error) {
    console.error('Error updating campaign:', error);
    alert(`Error updating campaign: ${error.response?.data}`);
  }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Campaign</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center ">
          <Form.Group controlId="campaign_name">
            <Form.Label> campaign Name</Form.Label>
            <Form.Control type="text" name="campaign_name" {...register('campaign_name', { required: true })} />
            {errors.campaign_name && <span>This field is required</span>}
          </Form.Group>
          <Form.Group controlId="campaign_country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" name="campaign_country" {...register('campaign_country', { required: true })} />
            {errors.campaign_country && <span>This field is required</span>}
          </Form.Group>
          </div>
          <Form.Group controlId="campaign_fundraising_type">
            <Form.Label>category</Form.Label>
            <Form.Control  as="select" name="campaign_fundraising_type" {...register('campaign_fundraising_type', { required: true })} >
            <option value="">Select a category</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Religious">Religious</option>
              <option value="Wedding">Wedding</option>
              <option value="Funeral">Funeral</option>
              <option value="Civil Society">Civil Society</option>
              <option value="Business">Business</option>
              <option value="Floods">Floods</option>
              <option value="Other">Other</option>
            </Form.Control>
            {errors.campaign_fundraising_type && <span>This field is required</span>}
          </Form.Group>
          <Form.Group controlId="poster_image_url">
            <Form.Label>fundraiser Image</Form.Label>
            <Form.Control type="file" name="poster_image_url" accept="image/*"
            {...register('poster_image_url', { required: false })}
            // onChange={handleImageChange} 
            
            />
            {imagePreview && <img src={ imagePreview} alt="Preview" style={{ marginTop: '10px', maxHeight: '200px' }} />}
          </Form.Group>
          <div className="flex items-center justify-between">
          <Form.Group controlId="current_amount">
            <Form.Label>Current Amount</Form.Label>
            <Form.Control type="number" name="current_amount" {...register('current_amount', { required: true })} />
            {errors.current_amount && <span>This field is required</span>}
          </Form.Group>
          <Form.Group controlId="target_amount">
            <Form.Label>Target Amount</Form.Label>
            <Form.Control type="number" name="target_amount" {...register('target_amount', { required: true })} />
            {errors.target_amount && <span>This field is required</span>}
          </Form.Group>
          </div>
      
          <Form.Group controlId="campaign_description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="campaign_description" rows={3} {...register('campaign_description', { required: true })} />
            {errors.campaign_description && <span>This field is required</span>}
          </Form.Group>
          <div className="flex items-center justify-between">
          <Form.Group controlId="campaign_duration">
            <Form.Label>Duration (days)</Form.Label>
            <Form.Control type="number" name="campaign_duration" {...register('campaign_duration', { required: true })} />
            {errors.campaign_duration && <span>This field is required</span>}
          </Form.Group>
          
          </div>
         
    
    
     <div className="flex mt-2 mb-2 p-2 border-2 max-w-max justify-between gap-8">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

 