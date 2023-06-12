import {
    QueryClient
  } from '@tanstack/react-query'
import axios  from './axiosConfig'
import { User } from '@/models/User'

const queryClient = new QueryClient()
const baseURL = 'https://jsonplaceholder.typicode.com'

export const getUsers = async (): Promise<User[]| null> => {
    try {
        const response = await axios.get(`${baseURL}/users`)
        return response.data
    } catch (error) {
        return null
    }
}

export const deleteUserById = async ({id}: { id: number} ): Promise<User| null> => {
    try {
        const response = await axios.delete(`${baseURL}/user/${id}`)
        return response.data
    } catch (error) {
        return null
    }
}

export default queryClient
