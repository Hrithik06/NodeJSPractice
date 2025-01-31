const express = require('express')
import type { Request, Response, NextFunction } from 'express'
const { adminAuth, userAuth } = require('./middlewares/auth')
const app = express()

app.use('/admin', adminAuth)

app.get(
    '/admin/getAllData',
    (req: Request, res: Response, next: NextFunction) => {
        res.send('Admin All Data')
    }
)
app.get(
    '/admin/deleteData',
    (req: Request, res: Response, next: NextFunction) => {
        res.send('Admin Delete Data')
    }
)

//As we are logging in no Auth
app.get('/user/login', (req: Request, res: Response) => {
    res.send('User logged in successfully.')
})
//Only one user request we can directly pass Auth Middleware here.
app.get('/user', userAuth, (req: Request, res: Response) => {
    res.send('User Route')
})

app.get('/user/data', userAuth, (req: Request, res: Response) => {
    res.send('User Data')
})
app.listen(7777, () => {
    console.log('Listening at 7777')
})
