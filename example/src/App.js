import React from 'react'

import { DataTable } from 'tawila'
import 'tawila/dist/index.css'

const App = () => {
  return (
    <div>
      <DataTable
        tableTitle={'Usokokokers'}
        
        rowData={[
          { name: '1212', age: '1232', location: '23125' },
          { name: '1212', age: '1232', location: '23125' },
          { name: '1212', age: '1232', location: '23125' }
        ]}
        handleRowClick={(event, row) => console.log('clicking row: ', row)}
        detailsHandler={(row) => console.log('open details row: ', row)}
        editHandler={(row) => console.log('editing row: ', row)}
        deleteHandler={(row) => console.log('deleting row: ', row)}
        customActions={[
          {
            component: (row) => {
              return <div>Custom Button</div>
            }
          }
        ]}
        dataColumns={[
          {
            id: 'name',
            label: 'Name',
            property: 'name',
            type: 'String'
          },
          {
            id: 'age',
            label: 'Date Joined',
            property: 'age',
            type: 'String'
          },
          {
            id: 'location',
            label: 'Plan',
            property: 'location',
            type: 'String'
          }
        ]}
      />
    </div>
  )
}

export default App
