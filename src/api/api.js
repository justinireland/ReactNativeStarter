const apiServer = '0.0.0.0'

function handleResponse(res){

    switch(res.status){
        case 200:
            return new Promise((resolve,reject) => resolve(res.json()))
        default:
            return new Promise((resolve,reject) => reject({
                status: 'error',
                reason: 'There was an error communicating with the server. Please try again.'
            }))
    }
}
function authedFetch(msg){

    return fetch(apiServer, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(msg)
    })
        .then((res) => handleResponse(res))
        .catch((err) => new Promise((resolve, reject) => reject(err)))
}

// Authenticate user
export function authreq(username, password) { return authedFetch({ username, password })}
// Logoff user
export function logoffreq(userid, token) { return authedFetch({ userid, token})}