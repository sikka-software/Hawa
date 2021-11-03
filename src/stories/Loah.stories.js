import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Loah } from '../components/Loah/Loah'

const stories = storiesOf('Loah', module)

stories.add('Light', () => {
  const [expand, setExpand] = useState(false)

  const buttons = [
    { name: 'button 1' },
    { name: 'button 2' },
    { name: 'button 3' }
  ]

  return (
    <Loah
      // {...args}
      expended={expand}
      handleExpand={() => setExpand(!expand)}
      bgColor={'red'}
      // direction={"right"}
      buttons={buttons}
    />
  )
})

// export default {
//   title: "Loah",
//   component: Loah,
//   argTypes: {
//     direction: {
//       options: ["top", "bottom", "right", "left"],
//       control: { type: "radio" },
//     },
//   },
// };
