import axiosOrig from 'axios';

const axios = axiosOrig.create({
	baseURL: `http://localhost:8080`,
});

export { axios };
