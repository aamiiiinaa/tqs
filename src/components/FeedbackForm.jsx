import React, { useEffect } from 'react';

const FeedbackForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="elfsight-widget">
      <div className="elfsight-app-f18a4ecc-f082-4436-b130-f0d4d0344b2b" data-elfsight-app-lazy></div>
    </div>
  );
};

export default FeedbackForm;

