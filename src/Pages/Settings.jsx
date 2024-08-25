import React from 'react';

const Setting = () => {
  return (
    <div className="flex flex-col p-6 bg-background min-h-screen">
      <h1 className="text-2xl font-bold text-foreground mb-6">Account Settings</h1>
      <div className="space-y-4">

        {/* Verify Email */}
        <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Verify Email Address</h2>
            <p className="text-muted-foreground">Ensure your email address is verified for account recovery.</p>
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-lg bg-blue-600 text-white border border-black">
            Verify Email
          </button>
        </div>

        {/* Verify Phone Number */}
        <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card ">
          <div>
            <h2 className="text-lg font-semibold text-foreground ">Verify Phone Number</h2>
            <p className="text-muted-foreground">Verify your phone number for added account security.</p>
          </div>
          <button className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-lg  bg-blue-600 text-white border border-black">
            Verify Phone
          </button>
        </div>

        {/* Log Out */}
        <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Log Out</h2>
            <p className="text-muted-foreground">Log out of your account securely.</p>
          </div>
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg  bg-red-600 text-white border border-black">
            Log Out
          </button>
        </div>

        {/* Delete Account */}
        <div className="flex items-center justify-between p-4 border border-destructive rounded-lg bg-destructive-card">
          <div>
            <h2 className="text-lg font-semibold text-destructive">Delete Account</h2>
            <p className="text-destructive-foreground">Permanently delete your account. This action cannot be undone.</p>
          </div>
          <button className="bg-destructive text-destructive-foreground hover:bg-destructive/80 p-2 rounded-lg  bg-red-600 text-white border border-black">
            Delete Account
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Setting;
