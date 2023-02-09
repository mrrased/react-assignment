import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { redirect, useNavigate } from 'react-router-dom';


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

  

const UserInfo = () => {

  const [user, setUser] = useState([]);
  const navigate = useNavigate();


  interface Post {
    name: string;
    email: string;
    number: string;
  }

  const userInfos:Post = JSON.parse(localStorage.getItem('user_info')!);

  if(!userInfos){
    console.log('its working');
     navigate('/')
    // navigate('/');
    // redirect("/");
  }


  useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))

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

export default UserInfo;