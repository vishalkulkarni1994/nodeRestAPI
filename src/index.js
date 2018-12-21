import express from 'express';

const app = express();

const port = process.env.port || 3000;

app.listen(port, err => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log(' server listening at port yay' + port + process.env.NODE_ENV);
        console.log(`${process.env.port}`);
        console.log(`server listening at port ${port}`);
    }
})