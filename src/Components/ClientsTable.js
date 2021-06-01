import { useContext, useState } from 'react'
import { forwardRef } from 'react'

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

import MaterialTable from 'material-table'
import { UsersContext } from '../Context/UsersContext'

const Alert = props => {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

export const ClientsTable = () => {

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    }

    const { users, clients } = useContext(UsersContext)
    const [clientsValue, setClientsValue] = clients

    const columns = [
        { title: 'Username', field: 'username' },
        {
            title: 'Password', field: 'password', type: 'password', editComponent: ({ value, onChange }) => (
                <input
                    type="text"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                />
            ),

            render: (rowData) => (
                <input
                    type="password"
                    value={rowData.password}
                    readOnly />
            )
        },
        { title: 'Account Number', field: 'accountNumber', type: 'numeric', editable: 'never' },
        { title: 'Balance', field: 'balance', type: 'currency', editable: 'onAdd' },
    ]

    const data = clientsValue.map(client => ({
        username: client.username,
        password: client.password,
        dischargeDate: client.dischargeDate,
        accountNumber: client.accountNumber,
        balance: client.balance
    }))

    const [open, setOpen] = useState({
        error: false,
        success: false
    })
    const handleClose = (state) => {
        setOpen(previousState => ({ ...previousState, [state]: false }))
    }

    return (
        <>
            <Snackbar open={open.error} autoHideDuration={5000} onClose={() => handleClose('error')}>
                <Alert severity='error' onClose={() => handleClose('error')} >
                    Error deleting user, he still has balance
                </Alert>
            </Snackbar>
            <Snackbar open={open.success} autoHideDuration={5000} onClose={() => handleClose('success')}>
                <Alert severity='success' onClose={() => handleClose('success')} >
                    User Deleted!
                </Alert>
            </Snackbar>

            <MaterialTable
                title='Clients'
                icons={tableIcons}
                columns={columns}
                data={data}
                editable={{
                    isEditable: rowData => rowData.field !== 'dischargeDate',
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            const dataToAdd = {
                                ...newData, dischargeDate: new Date().toLocaleDateString()
                            }
                            setClientsValue(oldData => [...oldData, dataToAdd])
                            resolve()
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            if (oldData.balance > 0) {
                                setOpen({ error: true })
                                resolve()
                            } else {
                                const dataDelete = [...clientsValue]
                                const rowIdx = oldData.tableData.id
                                dataDelete.splice(rowIdx, 1)
                                setClientsValue([...dataDelete])
                                setOpen({ success: true })
                                resolve()
                            }
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            const dataUpdate = [...clientsValue]
                            const rowIdx = oldData.tableData.id
                            dataUpdate[rowIdx] = newData
                            setClientsValue([...dataUpdate])
                            resolve()
                        })
                }}
            />
        </>
    )
}