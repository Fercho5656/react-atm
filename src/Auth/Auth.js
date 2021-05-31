export const userAuthenticated = (userData = {}, users = []) => {
    //Checks for user existence
    console.log('userData: ', userData)
    console.log('user: ', users)
    if (users.some(user => user.username === userData.username)) {
        //Checks for password coincidence
        if (users.some(user => user.password === userData.password)) {
            return true
        } else {
            return false
        }
    }
    return false
}