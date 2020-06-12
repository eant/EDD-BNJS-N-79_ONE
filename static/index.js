const express = require('express');
const app = express();
const port = 3000;

app.use( express.urlencoded({ extended : false }) )
app.use( express.json() )

app.get('/*', express.static('./public'));

app.post('/usuarios', (req, res) => {

    console.log('BACK /usuarios POST');

    console.log(req.body);

    res
        .status(200)
        .json({
            message: 'ok'
        })
})

app.listen(port, () => console.log(`app started on port ${port}`))