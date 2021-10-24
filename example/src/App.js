import React, { useState } from 'react'

import Loah from 'loah'
import 'loah/dist/index.css'
import Icon0 from '@material-ui/icons/AddLocation'
import Icon1 from '@material-ui/icons/Assistant'
import Icon2 from '@material-ui/icons/BlockOutlined'

const App = () => {
  const [expand, setExpand] = useState(false)

  return (
    <div>
      <div>LOAH COMPONENT</div>
      <Loah
        handleExpand={() => setExpand(!expand)}
        expanded={expand}
        bgColor='red'
        buttonsColor='white'
        direction='right'
        buttons={[
          {
            name: 'something',
            icon: <Icon0 />
          },
          {
            name: 'something',
            icon: <Icon1 />
          },
          {
            name: 'something',
            icon: <Icon2 />
          }
        ]}
      />
    </div>
  )
}

export default App
