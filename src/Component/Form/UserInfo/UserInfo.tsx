import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';


interface formType {
    user:{
        name: string;
        email: string;
        number: string;
    }
}

const UserInfo = () => {

    const [inputValue, setInputValue] = useState<formType>({
        user: {
            name: "",
            email: "",
            number: ""
        },
    });


    const navigate = useNavigate();


    const InputValue = (e: React.ChangeEvent<HTMLInputElement>): void =>{
        
        setInputValue({
            user: {
                ...inputValue.user,
                [e.target.name]: e.target.value,
            },
        });

    };
    // 


    const handleSubmit = ( e: React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();

        localStorage.setItem('user_info', JSON.stringify(inputValue.user));

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
                                    name="name"
                                    onChange={ InputValue }
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
                                    name="email"
                                    onChange={ InputValue }
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
                                    name="number"
                                    onChange={ InputValue }
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