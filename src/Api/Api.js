import * as axios from 'axios';
////////////////////////////////////////////////////////////////////////////////////////  <instansce>
let instansce = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '2afae494-0c97-4938-9bfd-d74b7cff8228' }
});
////////////////////////////////////////////////////////////////////////////////////////  </instansce>

////////////////////////////////////////////////////////////////////////////////////////  <API>
const API = {
    usersAPI: {
        getUsers:(currentPage = 1, pageSize = 10 ) => { 
            return instansce.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
        },
        getUsersUnFollow:(id) => { 
            return instansce.delete(`follow/${id}`).then(response => response.data);
        },
        getUsersFollow:(id) => {
            return instansce.post(`follow/${id}`, {}).then(response => response.data); 
        },
        getUsersProfile:(id) => {
            return instansce.get(`profile/${id}`).then(response => response.data);
        }
    },
    localMeAPI: {
        authloginMe:() => {
            return instansce.get(`auth/me`).then( response => response.data);
        },
        LoginMeOnServer:(email, password, rememberMe = false, captcha) => {
            return instansce.post(`auth/login`, { email, password, rememberMe, captcha });
        },
        LogoutMeOnServer:() => {
            return instansce.delete(`auth/login`)
        },
        savePhoto:(photoFile) => {
            let formData = new FormData();
                formData.append('image', photoFile);
                return instansce.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data'}});
        },
        saveProfile:(profile) => {
            return instansce.put(`profile`, profile);
        },
        getCaptchaUrl:() => {
            return instansce.get(`security/get-captcha-url`);
        }
    },
    profileSratusAPI: {
        getStatus:(id) => {
            return instansce.get(`profile/status/${id}`).then( response => response.data );
        },
        updateStatus:(status) => {
            return instansce.put('profile/status', { status: status }).then( response => response.data ); 
        }
    }
};
////////////////////////////////////////////////////////////////////////////////////////  </API>

export default API;




