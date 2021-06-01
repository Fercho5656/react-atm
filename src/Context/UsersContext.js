import { createContext, useState } from 'react'

export const UsersContext = createContext()

export const UsersProvider = (props) => {
    //Hardcoded user cause there's no database
    const [users, setUsers] = useState([{
        username: 'Fercho',
        password: 'Fernando',
        employeeId: 1,
        role: 'user'
    }])

    const [clients, setClients] = useState([{
        username: 'ElDueño',
        password: 'MiBanco123',
        dischargeDate: "31/5/2021",
        accountNumber: 420,
        balance: 1_000_000
    },
    {
        username: 'ElDueño2',
        password: 'MiBanco123',
        dischargeDate: "1/6/2021",
        accountNumber: 777,
        balance: 1_500_000
    },
    ])

    const [atm, setAtm] = useState({
        1000: 100,
        500: 100,
        200: 100,
        100: 100,
        50: 100
    })

    const [actualUser, setActualUser] = useState()

    return (
        <UsersContext.Provider value={{
            users: [users, setUsers],
            clients: [clients, setClients],
            actualUser: [actualUser, setActualUser],
            atm: [atm, setAtm]
        }}>
            {props.children}
        </UsersContext.Provider>
    )
}