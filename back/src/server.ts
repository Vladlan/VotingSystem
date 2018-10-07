import * as express from 'express';
import * as path from 'path';

import { WelcomeRoute } from './routes';

const app: express.Application = express();
const port = process.env.PORT || 3000;


app.use(express.static('./public'));
app.use('/welcome', WelcomeRoute);

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../front/public/index.html'));
});

app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});