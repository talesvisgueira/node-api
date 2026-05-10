import fastify from "fastify";
import { knex } from './database';
import { pluginHomeRoutes } from './routes/home.routes.js';
import { pluginProjectRoutes } from './routes/projetos.routes.js';

export const app = fastify();

app.get("/hello", async (request,reply) => {
    // const teste = await knex('sqlite_schema').select('*');
    reply.code(200)
        .header('Content-Type', 'application/json')
        .send({ name: 'Welcome to new Site...' });
});

app.register(pluginHomeRoutes, { prefix: 'home' });
app.register(pluginProjectRoutes, { prefix: 'projetos' });