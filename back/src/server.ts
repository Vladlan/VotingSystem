import * as express from 'express';
import * as path from 'path';

import { WelcomeRoute } from './routes';

const app: express.Application = express();
const port = process.env.PORT || 4000;


app.use(express.static('./public'));
app.use('/welcome', WelcomeRoute);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../front/public/index.html'));
});

const server = app.listen(port);
const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('connected %s', socket.id);
});
