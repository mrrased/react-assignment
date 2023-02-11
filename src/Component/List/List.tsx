import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns: GridColDef[] = [

    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'username',
      headerName: 'User Name',
      width: 150,
      editable: true,
    },
    {
      field: 'website',
      headerName: 'Website',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.email || ''} `,
    },
  ];



  interface Post {
    id: number;
    name: string;
    username: string;
    website: string;
    email: string
  }

const List = () => {

  const [user, setUser] = useState<Post[]>([]);


  useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => setUser(data))

  },[])


  return (
    <>
      <Box sx={{ height: 400, width: 850 }}>
          <DataGrid
              rows={user}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
          />
      </Box>
    </>
  );
};

export default List;