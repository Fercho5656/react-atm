import { Button, CssBaseline, TextField, FormControlLabel, Grid, Typography } from '@material-ui/core'
import { Container, Avatar } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { Redirect, useHistory } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UsersContext } from '../Context/UsersContext'
import { useStyles } from '../Styles/LoginStyles'

export const Login = () => {
    const classes = useStyles()
    const history = useHistory()

    const [users] = useContext(UsersContext)

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [formValidation, setFormValidation] = useState({
        usernameError: false,
        passwordError: false
    })

    const handleLogin = (e) => {
        e.preventDefault()
        if (users.some(user => user.username === loginData.username)) {
            setFormValidation(previousValidation => ({ ...previousValidation, usernameError: false }))
            if (users.some(user => user.password === loginData.password)) {
                setFormValidation(previousValidation => ({ ...previousValidation, passwordError: false }))
                if (users.some(user => user.role === 'user')) {
                    history.push('/dashboard')
                } else {
                    history.push('/atm')
                }
            } else {
                setFormValidation(previousValidation => ({ ...previousValidation, passwordError: true }))
            }
        } else {
            setFormValidation(previousValidation => ({ ...previousValidation, usernameError: true }))
        }
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
                            id='username'
                            label='User Name'
                            name='username'
                            autoComplete='username'
                            autoFocus
                            value={loginData.username}
                            onChange={e => handleLoginData(e)}
                            error={formValidation.usernameError}
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
                            error={formValidation.passwordError}
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