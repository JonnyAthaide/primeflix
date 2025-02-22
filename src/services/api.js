import axios from "axios";

// baseURL: https://api.themoviedb.org/3/
// api_key: dc85c039f472e3ea27de04373f136526
// URL da API: /movie/now_playing?api_key=dc85c039f472e3ea27de04373f136526
// Token de Leitura da API: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzg1YzAzOWY0NzJlM2VhMjdkZTA0MzczZjEzNjUyNiIsIm5iZiI6MTczOTA0MzQwMC4zNTM5OTk5LCJzdWIiOiI2N2E3YjI0OGJmMGE5ZjZmNTRlMDdkZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zu511vKIbjdVr7tnvaU0xI7Fwel9swGw9S6vpkSicq0


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;