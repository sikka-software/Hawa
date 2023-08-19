import React from 'react';
import { addons, types } from '@storybook/addons';
import { useAddonState } from '@storybook/api';

const ADDON_ID = 'my-custom-toolbar';
const TOGGLE_ID = `${ADDON_ID}/toggle`;

const CustomToggle = () => {
  const [isToggled, setToggled] = useAddonState(TOGGLE_ID, false);

  const handleToggle = () => {
    setToggled(!isToggled);
    console.log(`Toggle changed: ${!isToggled}`);
  };

  return (
    <button onClick={handleToggle}>
      {isToggled ? 'Toggled' : 'Not Toggled'}
    </button>
  );
};

addons.add(ADDON_ID, {
  title: 'Custom Toolbar',
  type: types.TOOL,
  match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
  render: () => <CustomToggle />,
});
