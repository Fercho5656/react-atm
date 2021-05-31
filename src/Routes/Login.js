import { Button, CssBaseline, TextField, FormControlLabel, Link, Grid, Typography } from '@material-ui/core'
import { Container, Avatar } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { useStyles } from '../Styles/LoginStyles'

export const Login = () => {
    const classes = useStyles()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [formValidation, setFormValidation] = useState({
        email: false,
        password: false
    })

    const handleLogin = (e) => {
        e.preventDefault()
    }

    const handleLoginData = (e) => {
        const newData = e.target.value
        setLoginData({ ...loginData, [e.target.name]: newData })
        
    }

    return (
        <div className={classes.root}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={loginData.email}
                            onChange={e => handleLoginData(e)}
                            error={formValidation.email}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={loginData.password}
                            onChange={e => handleLoginData(e)}
                            error={formValidation.password}
                        />
                        <Button
                            type='submit'
                            onClick={e => handleLogin(e)}
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            Sign In
                    </Button>
                    </form>
                </div>
            </Container>
        </div >
    )
}