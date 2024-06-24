// import axios from './api'

// const AuthService = {
//     async userLogin(user){
//         const {data} = await axios.post('/auth/sign-in',user).catch(err)
//         return data
//     },
//     async getUser(){}
// }

// export default AuthService
////////////////////////////////////////////////////////////

import axios from './api'

const AuthService = {
    async userLogin(user) {
        try {
            const { data } = await axios.post('/auth/sign-in', user);
            return data;
        } catch (err) {
            console.log( err);
            throw err; 
        }
    },
    async getUser() {
    }
}

export default AuthService;