function getDataServer(value) {
    const type = value ? `?type=${value}` : '';
    return fetch(`/coins${type}`)
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function getCoinDataServer(value) {
    const type = value ? `${value}` : '';
    return fetch(`/coins/page/${type}`)
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function findDataServer(value) {
    const { nameInformation, composition, country, quality, priceFrom, priceTo, yearIssueFrom, yearIssueTo } = value
    const nameInfoReq = nameInformation ? `name=${nameInformation}&information=${nameInformation}&` : '';
    const compositionReq = composition ? `composition=${composition}&` : '';
    const countryReq = country ? `country=${country}&` : '';
    const qualityReq = quality ? `quality=${quality}&` : '';
    const priceFromReq = priceFrom ? `priceFrom=${priceFrom}&` : '';
    const priceToReq = priceTo ? `priceTo=${priceTo}&` : '';
    const yearIssueFromReq = yearIssueFrom ? `yearIssueFrom=${yearIssueFrom}&` : '';
    const yearIssueToReq = yearIssueTo ? `yearIssueTo=${yearIssueTo}&` : '';
    return fetch(`/coins/search?${nameInfoReq}${compositionReq}${countryReq}${qualityReq}${priceFromReq}${priceToReq}${yearIssueFromReq}${yearIssueToReq}`)
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function takeColumnNameDataServer(value) {
    const column = value;
    return fetch(`/coins/column?value=${column}`)
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function waitreqDataServer(value) {
    const status = value ? `?status=${value}` : '';
    return fetch(`/coins${status}`)
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function getBagReportServer() {
    return fetch(`/coins/user/bgrep`)
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function addBagReportServer(value) {
    return fetch(`/coins/user/bgrep`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: value.name,
            text: value.text
        })
    })
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function addDataServer(value, user) {
    const status = (user.rol === 'admin') ? 'true' : 'false';
    return fetch(`/coins`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: value.name,
            imgFrontUrl: value.imgFrontUrl,
            imgBackUrl: value.imgBackUrl,
            country: value.country,
            composition: value.composition,
            quality: value.quality,
            denomination: value.denomination,
            date: +value.date,
            weight: value.weight,
            price: +value.price,
            information: value.information,
            type: value.type,
            status: status
        })
    })
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function acceptDataServer(value, user) {
    return fetch(`/coins/accept`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: value,
            login: user.login,
            token: user.token,
            rol: user.rol

        })
    })
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function updateDataServer(value, user) {
    return fetch(`/coins/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: value.id,
            name: value.name,
            imgFrontUrl: value.imgFrontUrl,
            imgBackUrl: value.imgBackUrl,
            country: value.country,
            composition: value.composition,
            quality: value.quality,
            denomination: value.denomination,
            date: +value.date,
            weight: value.weight,
            price: +value.price,
            information: value.information,
            type: value.type,
            login: user.login,
            token: user.token,
            rol: user.rol

        })
    })
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}
function deleteDataServer(value, user) {
    const id = value;
    const login = user.login;
    const token = user.token;
    const rol = user.rol;
    return fetch(`/coins/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            token: token,
            rol: rol

        })
    })
        .then(data => data.json())
        .then(res => {
            return res
        })
        .catch(() => 'Произошла ошибка во время загрузки данных!')
}

function loginDataServer(login, pass) {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            pass: pass
        })
    }).then(data => data.json())
        .then(res => {
            return res
        })
}
function reqisDataServer(login, pass) {
    return fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            pass: pass
        })
    }).then(data => data.json())
        .then(res => {
            return res
        })
}

export { getDataServer, findDataServer, takeColumnNameDataServer, loginDataServer, addDataServer, updateDataServer, deleteDataServer, reqisDataServer, waitreqDataServer, acceptDataServer, getCoinDataServer, addBagReportServer, getBagReportServer };
