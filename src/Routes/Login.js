import { Button, CssBaseline, TextField, FormControlLabel, Grid, Typography } from '@material-ui/core'
import { Container, Avatar } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { Redirect, useHistory } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UsersContext } from '../Context/UsersContext'
import { userAuthenticated } from '../Auth/Auth'
import { useStyles } from '../Styles/LoginStyles'

export const Login = () => {
    const classes = useStyles()
    const history = useHistory()

    const { users, clients, actualUser } = useContext(UsersContext)

    const [usersValue] = users
    const [clientsValue] = clients
    const [setActualUserValue] = actualUser

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
        //Checks for user/client existence
        if (userAuthenticated({ username: loginData.username, password: loginData.password }, usersValue)) {
            history.push('/dashboard')
            setActualUserValue({username: loginData.username, role: 'user'})
        } else if (userAuthenticated({ username: loginData.username, password: loginData.password }, clientsValue)) {
            history.push('/atm')
            setActualUserValue({username: loginData.username, role: 'client'})
        } else {
            setFormValidation({ usernameError: true, passwordError: true })
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