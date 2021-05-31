import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[900]
    },
    socialNetwork: {
        margin: 'auto'
    },
    icon: {
        margin: '-5px 10px'
    }
}))