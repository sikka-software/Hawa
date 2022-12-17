import { AppSidebar } from "../../layout";
import { FaAddressCard, FaAdversal, FaHome } from "react-icons/fa";
import { useState } from "react";

export default {
  title: "Layout/AppSidebar",
  component: [AppSidebar]
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    // Do something when an item is clicked
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Sidebar</button>
      <AppSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={[
          { label: "Home", onClick: handleItemClick },
          { label: "About", onClick: handleItemClick },
          { label: "Contact", onClick: handleItemClick }
        ]}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
