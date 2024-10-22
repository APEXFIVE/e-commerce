import React, { useState } from 'react';

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleEmailToggle = () => setEmailNotifications(!emailNotifications);
  const handleSmsToggle = () => setSmsNotifications(!smsNotifications);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="profile-settings">
        <h3>Profile Settings</h3>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" />

          <label>Phone Number:</label>
          <input type="tel" placeholder="Your Phone" />

          <button type="submit">Update Profile</button>
        </form>
      </div>

      <div className="business-settings">
        <h3>Business Settings</h3>
        <form>
          <label>Business Name:</label>
          <input type="text" placeholder="Business Name" />

          <label>Address:</label>
          <input type="text" placeholder="Business Address" />

          <label>Business Type:</label>
          <select>
            <option value="vendor">Vendor</option>
            <option value="supplier">Supplier</option>
          </select>

          <button type="submit">Update Business Info</button>
        </form>
      </div>

      <div className="notification-settings">
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" checked={emailNotifications} onChange={handleEmailToggle} />
          Email Notifications
        </label>
        <label>
          <input type="checkbox" checked={smsNotifications} onChange={handleSmsToggle} />
          SMS Notifications
        </label>
      </div>

      <div className="password-management">
        <h3>Change Password</h3>
        <form>
          <label>Current Password:</label>
          <input type="password" placeholder="Current Password" />

          <label>New Password:</label>
          <input type="password" placeholder="New Password" />

          <label>Confirm New Password:</label>
          <input type="password" placeholder="Confirm New Password" />

          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
