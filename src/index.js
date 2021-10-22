import React from 'react'
import styles from './styles.module.css'
import { NewTable } from './components/DataTable'
const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { NewTable, ExampleComponent }
