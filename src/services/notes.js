import axios from 'axios'

const baseUrl = 'https://whispering-cliffs-52118.herokuapp.com/api/notes'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const create = newObject => {
    const req = axios.post(baseUrl, newObject)
    return req.then(response => response.data)
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`, newObject)
    return req.then(response => response.data)
}

const functions = { getAll, create, update }

export default functions