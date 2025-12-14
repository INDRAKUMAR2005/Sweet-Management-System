import React, { useState } from 'react';
import { createSweet, updateSweet, deleteSweet, restockSweet } from '../services/api';
import './AdminPanel.css';

const AdminPanel = ({ onSweetUpdated }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingSweet, setEditingSweet] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });
  const [restockData, setRestockData] = useState({ id: '', quantity: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRestockChange = (e) => {
    setRestockData({ ...restockData, [e.target.name]: e.target.value });
  };

  const handleAddSweet = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const sweet = {
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity)
      };

      await createSweet(sweet);
      setSuccess('Sweet added successfully!');
      resetForm();
      onSweetUpdated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add sweet');
    }
  };

  const handleUpdateSweet = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const sweet = {
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity)
      };

      await updateSweet(editingSweet.id, sweet);
      setSuccess('Sweet updated successfully!');
      resetForm();
      onSweetUpdated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update sweet');
    }
  };

  const handleDeleteSweet = async (id) => {
    if (!window.confirm('Are you sure you want to delete this sweet?')) {
      return;
    }

    try {
      await deleteSweet(id);
      setSuccess('Sweet deleted successfully!');
      onSweetUpdated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete sweet');
    }
  };

  const handleRestock = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await restockSweet(restockData.id, parseInt(restockData.quantity));
      setSuccess('Sweet restocked successfully!');
      setRestockData({ id: '', quantity: '' });
      onSweetUpdated();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to restock sweet');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', category: '', price: '', quantity: '' });
    setEditingSweet(null);
    setShowAddForm(false);
  };

  const startEdit = (sweet) => {
    setEditingSweet(sweet);
    setFormData({
      name: sweet.name,
      category: sweet.category,
      price: sweet.price.toString(),
      quantity: sweet.quantity.toString()
    });
    setShowAddForm(true);
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>Admin Panel</h2>
        <button
          className="btn-toggle-form"
          onClick={() => {
            resetForm();
            setShowAddForm(!showAddForm);
          }}
        >
          {showAddForm ? 'Cancel' : 'Add New Sweet'}
        </button>
      </div>

      {error && <div className="admin-message error">{error}</div>}
      {success && <div className="admin-message success">{success}</div>}

      {showAddForm && (
        <div className="admin-form-card">
          <h3>{editingSweet ? 'Edit Sweet' : 'Add New Sweet'}</h3>
          <form onSubmit={editingSweet ? handleUpdateSweet : handleAddSweet}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  required
                />
              </div>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  min="0"
                  required
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-save">
                {editingSweet ? 'Update' : 'Add'} Sweet
              </button>
              <button type="button" className="btn-cancel" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="restock-section">
        <h3>Restock Sweet</h3>
        <form onSubmit={handleRestock} className="restock-form">
          <input
            type="text"
            name="id"
            value={restockData.id}
            onChange={handleRestockChange}
            placeholder="Sweet ID"
            required
          />
          <input
            type="number"
            name="quantity"
            value={restockData.quantity}
            onChange={handleRestockChange}
            placeholder="Quantity to add"
            min="1"
            required
          />
          <button type="submit" className="btn-restock">Restock</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;


