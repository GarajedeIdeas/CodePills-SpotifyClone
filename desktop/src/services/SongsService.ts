import axios from "axios";

export default class SongsService {

    private baseUrl: string = 'http://localhost:3000/api/songs';

    create(data: any) {
        return axios.post(`${this.baseUrl}/upload`, data, {
            headers: { Authorization: localStorage.getItem('codetunes_token') }
        })
    }

    deleteById(id: number) {
        return axios.delete(`${this.baseUrl}/${id}`, {
            headers: { Authorization: localStorage.getItem('codetunes_token') }
        })
    }

}