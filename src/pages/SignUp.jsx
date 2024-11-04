
import * as React from 'react';
import Grid2 from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HubIcon from '@mui/icons-material/Hub';
// primary light green  ->   #90EE90
// secondary MYRTLE GREEN -> #317873

const SignUp=()=>{

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
                    <h2>Sign Up</h2>
                </Grid2>
                <TextField id="standard-basic" label="Username" variant="standard" placeholder='Enter Your Username' fullWidth required/>
                <TextField id="standard-basic" label="Email" variant='standard' placeholder='Enter your e-mail' type='email' fullWidth required />
                <TextField id="standard-basic" label="Password" variant="standard" placeholder='Enter Your Password' type='password' fullWidth required/>
                <TextField id="standard-basic" label="Confirm Password" variant="standard" placeholder='Confirm Your Password' type='password' fullWidth required/>


                <Button style={btnstyle} type='submit' color='primary' variant="contained" fullWidth>SIGN UP</Button>


                <Typography>Already have an account?
                    <Link href="/" >
                        Sign in
                    </Link>
                </Typography>
            </Paper>
        </Grid2>
        
    )
}

export default SignUp