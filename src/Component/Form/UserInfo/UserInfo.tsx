import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');


    const navigate = useNavigate();



    const handleSubmit = ( e: React.FormEvent<HTMLFormElement> ) =>{
        e.preventDefault();

        const objectData = { name, email, number }


        localStorage.setItem('user_info', JSON.stringify(objectData));

        navigate('/list');

    }



    return (
        <div>
            <Typography>Enter your information</Typography>

            <Card sx={{padding: "10px 5px", maxWidth: 450, margin:" 0 auto"}}>
                <CardContent>
                    <form onSubmit={handleSubmit} >
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
                                >Save</Button>

                            </Grid>
                        
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserInfo;