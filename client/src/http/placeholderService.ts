import axios from 'axios'

export class FakeUsers {
    static async getAllUsers() {
        const response: any = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
    static async getComments(limit: any) {
        const response: any = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                _limit: limit
            }
        })
        return response.data
    }
}