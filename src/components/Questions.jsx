import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Table from './Items/Table'

export default function Questions({ data }) {
  return (
    <div>
      {data === undefined ? (
        'Veri Bekleniyor'
      ) : (
        <div
          style={{
            width: '80%',
            margin: 'auto',
          }}
        >
          <Table data={data} />
          {/* <ul>
              {data.map((dataItem, dataIndex) => (
                  <li key={dataIndex}>
                    {dataItem.resource.id + " Numaralı Anket"}
                    <Button>Ankete Git</Button>
                  </li>
              ))}
            </ul> */}
        </div>
      )}
    </div>
  )
}
