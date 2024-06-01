import { useEffect, useState } from "react";

function useTabs(initialTab = "") {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Listen to hash changes in the URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setActiveTab(hash || initialTab);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Initialize the tab based on the initial hash
    handleHashChange();

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [initialTab]);

  const handleTabChange = (index: any) => {
    setActiveTab(index);

    // Update the URL hash when the tab changes
    window.location.hash = index;
  };

  return {
    activeTab,
    handleTabChange,
  };
}

export { useTabs };
