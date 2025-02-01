const express = require('express')
import type { Request, Response, NextFunction } from 'express'
const app = express()

app.get('/getUserData', (req: Request, res: Response) => {
    // try {
    //Logic for DB call
    throw new Error('abcdefsifjs')
    res.send('User Data')
    // } catch (e: any) {
    //     // res.status(500).send(e.message)
    //     res.status(500).send('Something went wrog contact Customer Support')
    // }
})
app.use('/', (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log('err:')
    console.log(err)
    console.log('\n\n\n')
    if (err) {
        res.status(500).send('Something went wrong')
    }
})

app.listen(7777, () => {
    console.log('Listening at port 7777')
})
