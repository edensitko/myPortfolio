import { useEffect } from 'react';
import { initializeAnalytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';

export default function Analytics() {
  useEffect(() => {
    const setupAnalytics = async () => {
      const analytics = await initializeAnalytics();
      
      // Log page view when component mounts
      if (analytics && typeof window !== 'undefined') {
        logEvent(analytics, 'page_view', {
          page_path: window.location.pathname,
          page_title: document.title
        });
      }
    };
    
    setupAnalytics();
  }, []);

  // This component doesn't render anything
  return null;
}
