import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import SaveAnswer from './SaveAnswer';




export default function DataTable(props) {

  const navigate = useNavigate();


  const columns = [
    { field: 'order', headerName: '#', width: 70 },
    { field: 'anketName', headerName: 'Anket Name', width: 130 },
    {field: 'anketAnswers', headerName: 'Answers', width:130,
      renderCell: (params) => {
        console.log(params)
        return (
          <Button onClick={() => {
            navigate(`/cevap/${params?.row?.id}`)
          }}>
          Go to Answer
          
          </Button>
            
        )
      }
    },
    { field: 'actions', headerName: 'Actions', width: 130,
    renderCell: (params) => {
  
      console.log(params)
      return    (
        <Button onClick={() => {
          navigate(`/anket/${params?.row?.id}`)
        }}>
        Go to Anket
        
        </Button>
          
        
        
        
       )
    }
  },
  
  ];

  const [rowData, setRowData] = React.useState([])


  React.useEffect(() => {
    if(props?.data?.length > 0){
     let data =  props?.data?.map((dataItem, dataIndex) => {
      return {
        order: dataIndex + 1,
        anketName: dataItem.resource.id,
        id: dataItem.resource.id,
      }
     })

      setRowData(data)
    }
  }, [props.data])


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
      
      
    </div>
  );
}