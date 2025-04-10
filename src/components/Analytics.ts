import { useEffect } from 'react';
// import { logEvent, getAnalytics } from 'firebase/analytics';

export default function Analytics() {
  useEffect(() => {
    const setupAnalytics = async () => {
      try {
        if (typeof window !== 'undefined') {
          console.log('Page view:', {
            page_path: window.location.pathname,
            page_title: document.title
          });
        }
      } catch (error) {
        console.error('Analytics error:', error);
      }
    };
    
    setupAnalytics();
  }, []);

  return null;
}
