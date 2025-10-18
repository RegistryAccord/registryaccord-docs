import React from 'react';

export const CallToAction = () => {
  return (
    <div className="call-to-action">
      <h3>Ready to Get Started?</h3>
      <p>Join the RegistryAccord community and start building creator-owned applications today.</p>
      <div className="cta-buttons">
        <a href="/Documentation/getting-started/quickstart" className="cta-button primary">Run the 10-Minute Demo</a>
        <a href="/Documentation/contributing" className="cta-button secondary">Contribute Now</a>
      </div>
    </div>
  );
};

export default CallToAction;
