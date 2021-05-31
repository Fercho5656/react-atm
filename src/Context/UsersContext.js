import { createContext, useState } from 'react'

export const UsersContext = createContext()

export const UsersProvider = (props) => {
    //Hardcoded user cause there's no database
    const [users, setUsers] = useState([{
        username: 'Fercho',
        password: 'Fernando',
        employeeId: 1,
        role: 'user'
    }
    ])

    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {props.children}
        </UsersContext.Provider>
    )
}