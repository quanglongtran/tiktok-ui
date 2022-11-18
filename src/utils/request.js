import axios from 'axios';
import Swal from 'sweetalert2';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path, options = {}) => {
    try {
        const response = await request.get(path, options);
        return response.data;
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Lỗi mạng',
                showConfirmButton: true,
            });

            return;
        }

        console.log(error);
    }
};

export default request;
