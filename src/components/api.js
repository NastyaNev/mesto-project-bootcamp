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

export function getUserAvatar() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
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

// export function deleteCards(id) {
//     return fetch(`${config.baseUrl}/${id}`, {
//         headers: config.headers,
//         method: 'DELETE',
//         body: JSON.stringify({
//             userId: _id
//         })
//     })
//         .then(checkResponse);
// }

// const cards = JSON.stringify(cards);
// const cardId  =

// export function deleteCards() {
//     const card = res.json();
//     return fetch(`${config.baseUrl}/cards/${card._id}`, {
//         headers: config.headers,
//         method: 'DELETE',
//         body: JSON.stringify({
//             id: _id
//         })
//     })
//         .then(checkResponse)
// }