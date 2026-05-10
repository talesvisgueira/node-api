import type { FastifyInstance } from "fastify";

export async function pluginProjectRoutes( app :FastifyInstance ) {
    app.get("/", async (request,reply) => {
        reply.code(200)
            .header('Content-Type', 'application/json')
            .send({ name: 'Tela de projetos...' });
    });

}