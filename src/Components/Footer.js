import { Container, Typography, Grid, Link } from '@material-ui/core'
import { GitHub, Facebook, Instagram } from '@material-ui/icons'
import { Link as RouterLink} from 'react-router-dom'
import { useStyles } from '../Styles/FooterStyles'

export const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Container maxWidth='sm' >
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Grid item className={classes.socialNetwork}>
                        <Typography align='center'>
                            <Link href='https://github.com/Fercho5656'>
                                <GitHub className={classes.icon} />
                                Fercho5656
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.socialNetwork}>
                        <Typography align='center'>
                            <Link href='https://www.facebook.com/Fercho1605/'>
                                <Facebook className={classes.icon} />
                                Fercho1605
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item className={classes.socialNetwork}>
                        <Typography align='center'>
                            <Link href='https://www.instagram.com/fercho160500/'>
                                <Instagram className={classes.icon} />
                                Fercho160500
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}