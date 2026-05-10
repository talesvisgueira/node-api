// import { app } from './app';
import { app } from './app.js';
import { env } from './env';

app.listen( {
    port: env.PORT,
}).then( () => {
    console.log(`Http Server rodando na porta: ${env.PORT}`);
});