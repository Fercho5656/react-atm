import { Grid } from '@material-ui/core'
import { ClientsTable } from '../Components/ClientsTable'
import { useStyles } from '../Styles/DashboardStyles'

export const Dashboard = () => {

    const classes = useStyles()

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            className={classes.grid}
        >
            <Grid item lg={12}>
                <ClientsTable />
            </Grid>
        </Grid>
    )
}