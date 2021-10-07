import config from "../config"
import data from '../data/jobss'

const JobsService = {
    getjobs(){
        return fetch(data,{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
}

export default JobsService