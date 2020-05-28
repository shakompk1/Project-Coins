const mysql = require('mysql');
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require("body-parser");
const cors = require('cors');
const randomString = require('./randomString');
const path = require('path')

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Saxriyar001',
    database: process.env.DB_NAME || 'coins'
});
app.get('/coins', (req, res) => {
    const type = req.query.type ? `WHERE type='${req.query.type}'` : 'WHERE id > 0';
    const status = req.query.status ? `status='${req.query.status}'` : `status='true'`;
    pool.query(`SELECT * FROM coins ${type} AND ${status}`, (err, data) => {
        if (!err) {
            res.json(data)
        } else {
            req.status(500)
        }
    });
});
app.post('/coins/user/bgrep', (req, res) => {
    console.log('gg')
    const { name, text } = req.body;
    const sendBqRepSql = (`INSERT INTO bagreporter(name,text) VALUES
    ('${name}','${text}')`);
    pool.query(sendBqRepSql, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.status(500);
        }
    })
})
app.get('/coins/user/bgrep', (req, res) => {
    console.log('gg')
    const takeBqRepSql = (`SELECT * FROM bagreporter`);
    pool.query(takeBqRepSql, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.status(500);
        }
    })
})
app.get('/coins/page/:id', (req, res) => {
    const idOfUser = Number(req.params.id);
    const searchCoinsDataSql = `SELECT * FROM coins WHERE id=${idOfUser}`;
    pool.query(searchCoinsDataSql, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            res.status(500);
        }
    })
});
app.get('/coins/search', (req, res) => {
    const { name, information, country, composition, quality, priceFrom, priceTo, yearIssueFrom, yearIssueTo } = req.query;
    const nameInformation = name ? `name LIKE '%${name}%' OR information LIKE '%${information}%'` : 'id > 0';
    const countrySql = country ? `AND country='${country}'` : '';
    const compositionSql = composition ? `AND composition='${composition}'` : '';
    const qualitySql = quality ? `AND quality='${quality}'` : '';
    const priceFromSql = priceFrom ? `AND price>=${+priceFrom}` : '';
    const priceToSql = priceTo ? `AND price<=${+priceTo}` : '';
    const yearIssueFromSql = yearIssueFrom ? `AND date>=${+yearIssueFrom}` : '';
    const yearIssueToSql = yearIssueTo ? `AND date<=${+yearIssueTo}` : '';
    const OrderBy = name ? `ORDER BY CASE  WHEN name LIKE '${name}%' THEN 1  WHEN name LIKE '%${information}' THEN 3  ELSE 2  END` : '';
    const searchDataSql = `SELECT * FROM coins.coins WHERE(${nameInformation} ${countrySql}) ${compositionSql} ${qualitySql} ${priceFromSql} ${priceToSql} ${yearIssueFromSql} ${yearIssueToSql} AND status = 'true' ${OrderBy}`
    pool.query(searchDataSql, (err, data) => {
        if (!err) {
            res.json(data)
        } else {
            res.status(500)
        }
    });
});
app.get('/coins/column', (req, res) => {
    const { value } = req.query;
    const columnFindSql = (`SELECT ${value} FROM coins.coins GROUP BY ${value} HAVING count(*) > 0; `)
    pool.query(columnFindSql, (err, data) => {
        if (!err) {
            res.json(data);
        } else {
            req.status(500);
        }
    })
});
app.post('/register', (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.pass, salt);
    const user = {
        login: req.body.login,
        salt: salt,
        hash: hash,
        rol: 'user'
    };
    const checkUserSql = (`SELECT * FROM users WHERE login = '${user.login}'`)
    const addUserSql = (`INSERT INTO users(login, salt, hash, rol, token) VALUES
        ('${user.login}', '${user.salt}', '${user.hash}', '${user.rol}', '')`)
    pool.query(checkUserSql, (err, datacheck) => {
        if (datacheck.length === 0) {
            pool.query(addUserSql, (err, data) => {
                if (!err) {
                    res.json(data);
                } else {
                    res.status(500);
                }
            });
        } else {
            res.send(false);
        }
    });
});
app.post('/login', (req, res) => {
    const userLogin = req.body.login;
    const userPass = req.body.pass;
    const checkUserLogoSql = (`SELECT * FROM users WHERE login = '${userLogin}'`);
    pool.query(checkUserLogoSql, (err, data) => {
        if (!err) {
            if (data.length === 0) {
                res.send(false)
            }
            else {
                const salt = data[0].salt;
                const hash = bcrypt.hashSync(userPass, salt);
                if (data[0].hash === hash) {
                    const newToken = randomString();
                    pool.query(`UPDATE coins.users SET token = '${newToken}' WHERE login = '${userLogin}'; `)
                    res.json(({ login: userLogin, token: newToken, rol: data[0].rol }));

                } else {
                    res.send(false);
                }
            }
        } else {
            res.status(500);
        }
    })
});
app.post('/coins', (req, res) => {
    let coins = {
        name: req.body.name,
        imgFrontUrl: req.body.imgFrontUrl,
        imgBackUrl: req.body.imgBackUrl,
        country: req.body.country,
        composition: req.body.composition,
        quality: req.body.quality,
        denomination: req.body.denomination,
        date: +req.body.date,
        weight: req.body.weight,
        price: +req.body.price,
        information: req.body.information,
        type: req.body.type,
        status: req.body.status
    }
    const addCoinsSql = (`INSERT INTO coins(name, imgFrontUrl, imgBackUrl, country, composition, quality, denomination, date, weight, price, information, type, status) VALUES
        ('${coins.name}', '${coins.imgFrontUrl}', '${coins.imgBackUrl}', '${coins.country}', '${coins.composition}', '${coins.quality}', '${coins.denomination}', '${coins.date}', '${coins.weight}', '${coins.price}', '${coins.information}', '${coins.type}', '${coins.status}')`)
    pool.query(addCoinsSql, (err, data) => {
        if (!err) {
            res.send('4')
        } else {
            res.status(500)
        }
    })
});
app.put('/coins/update', (req, res) => {
    const coins = {
        id: req.body.id,
        name: req.body.name,
        imgFrontUrl: req.body.imgFrontUrl,
        imgBackUrl: req.body.imgBackUrl,
        country: req.body.country,
        composition: req.body.composition,
        quality: req.body.quality,
        denomination: req.body.denomination,
        date: +req.body.date,
        weight: req.body.weight,
        price: +req.body.price,
        information: req.body.information,
        type: req.body.type
    }
    const user = {
        login: req.body.login,
        token: req.body.token,
        rol: req.body.rol
    }
    const checkTokenSql = `SELECT * FROM users WHERE login = '${user.login}'`
    pool.query(checkTokenSql, (err, data) => {
        if (!err) {
            if (data[0].token === user.token && data[0].rol === user.rol) {
                const updateDataSql = `UPDATE coins.coins SET name = '${coins.name}', imgFrontUrl = '${coins.imgFrontUrl}', imgBackUrl = '${coins.imgBackUrl}', country = '${coins.country}', composition = '${coins.composition}', quality = '${coins.quality}', denomination = '${coins.denomination}', date = '${coins.date}', weight = '${coins.weight}', price = '${coins.price}', information = '${coins.information}', type = '${coins.type}' WHERE id = '${coins.id}'; `
                pool.query(updateDataSql, (err, data) => {
                    if (!err) {
                        res.send('4')
                    } else {
                        res.send('3')
                    }
                })
            } else {
                res.send('2')
            }
        } else {
            res.send('1')
        }
    })
});
app.put('/coins/accept', (req, res) => {
    const coins = {
        id: req.body.id
    }
    const user = {
        login: req.body.login,
        token: req.body.token,
        rol: req.body.rol,
    }
    const checkTokenSql = `SELECT * FROM users WHERE login = '${user.login}'`
    pool.query(checkTokenSql, (err, data) => {
        if (!err) {
            if (data[0].token === user.token && data[0].rol === user.rol) {
                const updateDataSql = `UPDATE coins.coins SET status = 'true' WHERE id = '${coins.id}'; `
                pool.query(updateDataSql, (err, data) => {
                    if (!err) {
                        res.send(data)
                    } else {
                        res.send('3')
                    }
                })
            } else {
                res.send('2')
            }
        } else {
            res.send('1')
        }
    })
});

app.delete('/coins/delete/:id', (req, res) => {
    const login = req.body.login;
    const token = req.body.token;
    const rol = req.body.rol;
    const checkTokenSql = `SELECT * FROM users WHERE login = '${login}'`
    pool.query(checkTokenSql, (err, data) => {
        if (!err) {
            if (data[0].token === token && data[0].rol === rol) {
                const id = +req.params.id;
                const deleteCoinsSql = (`DELETE FROM coins WHERE id = '${id}' `)
                pool.query(deleteCoinsSql, (err, data) => {
                    if (!err) {
                        pool.query('SELECT * FROM coins', (err, data) => {
                            res.json(data)
                        })
                    } else {
                        res.status(500)
                    }
                });
            } else {
                res.send(false)
            }
        } else {
            res.send(false)
        }
    })
});
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})
app.listen(port, () => { console.log('Serve online') })