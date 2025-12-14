import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSweets, searchSweets, purchaseSweet } from '../services/api';
import { clearAuth, getUsername, isAdmin } from '../utils/auth';
import SweetCard from './SweetCard';
import AdminPanel from './AdminPanel';
import './Dashboard.css';

const Dashboard = () => {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadSweets();
  }, []);

  const loadSweets = async () => {
    try {
      setLoading(true);
      const response = await getAllSweets();
      setSweets(response.data);
    } catch (error) {
      console.error('Error loading sweets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const params = {};
      if (searchTerm) params.name = searchTerm;
      if (categoryFilter) params.category = categoryFilter;
      if (minPrice) params.minPrice = parseFloat(minPrice);
      if (maxPrice) params.maxPrice = parseFloat(maxPrice);

      const response = await searchSweets(params);
      setSweets(response.data);
    } catch (error) {
      console.error('Error searching sweets:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async (id, quantity) => {
    try {
      await purchaseSweet(id, quantity);
      await loadSweets();
      alert('Purchase successful!');
    } catch (error) {
      alert(error.response?.data?.message || 'Purchase failed. Insufficient stock.');
    }
  };

  const handleLogout = () => {
    clearAuth();
    navigate('/login');
  };

  const handleSweetUpdated = () => {
    loadSweets();
  };

  const categories = [...new Set(sweets.map(sweet => sweet.category))];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🍬 Sweet Shop Management</h1>
        <div className="header-actions">
          <span className="welcome-text">Welcome, {getUsername()}!</span>
          {isAdmin() && (
            <button
              className="btn-admin"
              onClick={() => setShowAdminPanel(!showAdminPanel)}
            >
              {showAdminPanel ? 'Hide Admin Panel' : 'Show Admin Panel'}
            </button>
          )}
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {isAdmin() && showAdminPanel && (
        <AdminPanel onSweetUpdated={handleSweetUpdated} />
      )}

      <div className="search-section">
        <div className="search-filters">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="price-input"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="price-input"
          />
          <button onClick={handleSearch} className="btn-search">
            Search
          </button>
          <button onClick={() => {
            setSearchTerm('');
            setCategoryFilter('');
            setMinPrice('');
            setMaxPrice('');
            loadSweets();
          }} className="btn-clear">
            Clear
          </button>
        </div>
      </div>

      <div className="sweets-grid">
        {loading ? (
          <div className="loading">Loading sweets...</div>
        ) : sweets.length === 0 ? (
          <div className="no-sweets">No sweets found</div>
        ) : (
          sweets.map(sweet => (
            <SweetCard
              key={sweet.id}
              sweet={sweet}
              onPurchase={handlePurchase}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;


