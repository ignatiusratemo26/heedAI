import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Button, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HubIcon from '@mui/icons-material/Hub';
// primary light green  ->   #90EE90
// secondary MYRTLE GREEN -> #317873

const ForgotPassword=()=>{

    const paperStyle={padding :20,height:'70vh',width:280,margin:"19px auto" ,backgroundColor:'#90EE90', borderRadius: '12px', boxShadow: '0px 0px 8px rgba(0, 0, 0, 25)'}
    const avatarStyle={backgroundColor:'#D9D9D9'}
    const btnstyle={backgroundColor:'#317873',margin:'12px 0'}
    const logoStyle={backgroundColor:'#D9D9D9', margin:'10px 0', width: 70, height: 70}
      

    return(
        
        <Grid2>
                <Grid2 align='center'>
                    <Avatar style={logoStyle}><HubIcon style={{ color: '#317873', width: 56, height: 56}}/></Avatar>
                    <h2>HeedAI</h2>
                </Grid2>  
             
            
            <Paper elavation={12} style={paperStyle}>
                <Grid2 align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon style={{ color: '#002A57' }}/></Avatar>
                    <h2>Forgot Password</h2>
                </Grid2>
                <Card sx={{minWidth: 275}} style={{ backgroundColor: '#D9D9D9' }}>
                  <CardContent>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Enter the email address associated with your account to recieve a link to reset your password.
                  </Typography>
                </CardContent>
                </Card>
                
                <TextField id="standard-basic" label="Email" variant="standard" placeholder='Enter Your Email' fullWidth required/>


                <Button style={btnstyle} type='submit' color='primary' variant="contained" fullWidth>Continue </Button>


                <Typography>Go back to .
                    <Link href="/" >
                        Sign In page
                    </Link>
                </Typography>
            </Paper>
        </Grid2>
        
    )
}

export default ForgotPassword