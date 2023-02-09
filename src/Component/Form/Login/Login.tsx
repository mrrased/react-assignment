import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');


    const navigate = useNavigate();
    

    const handleSubmit = ( e: any ) =>{
        e.preventDefault();


        const localData = JSON.parse(localStorage.getItem('user_info')!)

        if( localData.name === name ){

            if(localData.email === email){

                if(localData.number === number){

                    navigate('/user-info');
                }
                else{
                    alert('Enter The Currect Number');
                }
            }
            else{
                alert('Enter The Currect Email');
            }
        }
        else{
            alert('Enter The Currect Name')
        }
    }



    return (
        <div>
            <Typography>Login</Typography>

            <Card sx={{padding: "10px 5px", maxWidth: 450, margin:" 0 auto"}}>
                <CardContent>
                    <form onSubmit={ handleSubmit } >
                        <Grid container spacing={1}>
                            <Grid xs={12}  item >

                                <TextField
                                    required
                                    id="filled-basic" 
                                    label="Name" 
                                    variant="filled"
                                    onChange={(e)=> setName(e.target.value)}
                                    fullWidth 
                                />

                            </Grid>

                            <Grid xs={12}  item>

                                <TextField 
                                    required
                                    id="filled-basic" 
                                    label="Email" 
                                    type="email"
                                    variant="filled"
                                    onChange={(e)=> setEmail(e.target.value)}
                                    fullWidth 
                                />

                            </Grid>

                            <Grid xs={12}  item>
                                
                                <TextField
                                    required 
                                    id="filled-basic" 
                                    label="Number" 
                                    type="number"
                                    variant="filled"
                                    onChange={(e)=> setNumber(e.target.value)}
                                    fullWidth 
                                />

                            </Grid>

                            <Grid xs={12} item>

                                <Button 
                                    type='submit' 
                                    variant='contained' 
                                    color='primary' 
                                    fullWidth
                                >Login</Button>

                            </Grid>
                            
                            <Typography sx={{mt:2}}>allready register <NavLink to='/register'  >Click here..</NavLink></Typography>
                            
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;