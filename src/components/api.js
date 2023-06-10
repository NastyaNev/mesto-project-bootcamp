const config = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
        authorization: '074a28df-5a24-4ba3-ac4e-c10822c2f568',
        'Content-Type': 'application/json'
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(checkResponse)
}

export function setUserInfo(name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
        .then(checkResponse)
}

export function setUserAvatar(avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        headers: config.headers,
        method: 'PATCH',
        body: JSON.stringify({
            avatar: avatar
        })
    })
        .then(checkResponse)
}

export function getCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(checkResponse)
}

export function setCards(name, link) {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(checkResponse)
}

export function deleteCards(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        headers: config.headers,
        method: 'DELETE'
    })
        .then(checkResponse);
}

export function setLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        headers: config.headers,
        method: 'PUT'
    })
        .then(checkResponse);
}

export function deleteLike(id) {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        headers: config.headers,
        method: 'DELETE'
    })
        .then(checkResponse);
}

// function test_1() {
//     return 1;
// }

// var a= test_1()

// var b = a/2

// function test_2() {
//     return fetch(`${config.baseUrl}/cards/likes/${id}`, {
//         headers: config.headers,
//         method: 'DELETE'
//     })
// }

// function test_3() {
//     return fetch(`${config.baseUrl}/users/likes/${id}`, {
//         headers: config.headers,
//         method: 'DELETE'
//     })
// }



// test_2().then(likes=>{
//     test_3().then(users => {
//         if (users.data.length > 3) {
//             var d  = likes.data;
//         }
//     })   
// })
// send get userid request |-------------------------------------------| receive get userid response
//                                                             call()  send get user likes by id reques |-------------------------------|  receive get user likes likesby id response

// var c = test_2();
// var f= test_3();

// c.then(likes=>{
//     f.then(users => {
//         if (users.data.length > 3) {
//             var d  = likes.data;
//         }  
//     })   
// })


// Promise.all([test_2(), test_3()]).then(([likes, users]) => {
//     if (users.data.length > 3) {
//         var d  = likes.data;
//     }  
// })

// send get likes request -------------------------------------------receive get likes response
                       
// send get users reques -------------------------------  receive get users response
                                                                  