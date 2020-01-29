import axios from 'axios'

export const http = axios.create({
  baseURL: `http://127.0.0.1:3333/api/v1`,
  headers: { 'Access-Control-Allow-Origin': 'true', 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
})