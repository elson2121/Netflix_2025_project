import axios from 'axios'
let url = import.meta.env.VITE_BASE_LINK;

 export const axiosfile=axios.create ({
    baseURL:url
})