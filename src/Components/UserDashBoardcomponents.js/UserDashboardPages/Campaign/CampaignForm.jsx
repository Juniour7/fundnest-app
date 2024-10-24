import React, { useState } from "react";

const NewCampaignForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('pending');
  const [targetedMoney, setTargetedMoney] = useState('');
  const [reachedMoney, setReachedMoney] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCampaign = {
      id: Math.random(), // Generate a unique ID (replace with your own logic)
      name,
      status,
      targetedMoney: Number(targetedMoney),
      reachedMoney: Number(reachedMoney),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      photo,
    };

    onAdd(newCampaign);
    // Reset form fields after submission
    setName('');
    setStatus('pending');
    setTargetedMoney('');
    setReachedMoney('');
    setStartDate('');
    setEndDate('');
    setPhoto('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="succeeded">Succeeded</option>
          <option value="failed">Failed</option>
        </select>
      </label>
      <br />
      <label>
        Targeted Money:
        <input type="number" value={targetedMoney} onChange={(e) => setTargetedMoney(e.target.value)} required />
      </label>
      <br />
      <label>
        Reached Money:
        <input type="number" value={reachedMoney} onChange={(e) => setReachedMoney(e.target.value)} required />
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <br />
      <label>
        Photo URL:
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Campaign</button>
    </form>
  );
};

export default NewCampaignForm;
