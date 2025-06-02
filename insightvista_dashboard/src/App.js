import React, { useState } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * Main App container for the InsightVista Dashboard
 */
function App() {
  // Sample static metrics
  const metrics = [
    { title: 'Total Users', value: 4380, trend: '+5.2%' },
    { title: 'Total Sessions', value: 17450, trend: '+2.8%' },
    { title: 'Conversions', value: 279, trend: '+1.3%' }
  ];

  // Chart grid placeholders
  const charts = [
    { title: 'User Growth (Last 30 Days)' },
    { title: 'Session Trends' },
    { title: 'Conversion Rate' }
  ];

  // Date filter state
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });

  // PUBLIC_INTERFACE
  function handleDateChange(e) {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="app">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-symbol">*</span> InsightVista Dashboard
        </div>
      </nav>

      {/* Dashboard layout: filter sidebar + main content */}
      <main className="dashboard-layout">
        <aside className="dashboard-filter">
          <label className="date-range-label">Date Range</label>
          <div>
            <input
              type="date"
              name="start"
              value={dateRange.start}
              onChange={handleDateChange}
            />
            <span style={{ marginRight: 6, color: '#888', fontWeight: 500 }}>&ndash;</span>
            <input
              type="date"
              name="end"
              value={dateRange.end}
              onChange={handleDateChange}
            />
          </div>
        </aside>

        <section className="dashboard-main">
          {/* Metrics Summary */}
          <section className="metrics-summary">
            {metrics.map((m, i) => (
              <div className="metric-card" key={i}>
                <div className="metric-title">{m.title}</div>
                <div className="metric-value">{m.value}</div>
                <div className="metric-trend">{m.trend}</div>
              </div>
            ))}
          </section>

          {/* Chart Grid (Placeholders) */}
          <section className="chart-grid">
            {charts.map((c, i) => (
              <div className="chart-card" key={i}>
                <div className="chart-title">{c.title}</div>
                <div style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#bdbdbd',
                  fontSize: '1.2rem'
                }}>
                  {/* Placeholder Box */}
                  Chart Placeholder
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;