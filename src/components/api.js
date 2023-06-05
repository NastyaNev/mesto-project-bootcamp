export function getUserInfo() {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/users/me', {
        headers: {
            authorization: '074a28df-5a24-4ba3-ac4e-c10822c2f568',
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}


export function getCards() {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/cards', {
        headers: {
            authorization: '074a28df-5a24-4ba3-ac4e-c10822c2f568',
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}

export function setCards(name, link) {
    return fetch('https://nomoreparties.co/v1/wbf-cohort-9/cards', {
        headers: {
            authorization: '074a28df-5a24-4ba3-ac4e-c10822c2f568',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}