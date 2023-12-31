import 'reflect-metadata';
import './common/utils';
import './common/container';
import 'dotenv/config';
import fastify from 'fastify';
import { loggerMiddleware } from './infra/middlewares';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { fastifySwaggerOptions, fastifySwaggerUiOptions } from './common';
import { customerFuelRoutes } from '@/routes/customerRoutes';
import cors from '@fastify/cors'

(async () => {
  const server = fastify({ logger: true });

  server.addHook('preHandler', loggerMiddleware);

  const swaggerUiOptions = await fastifySwaggerUiOptions();

  server.register(fastifySwagger, fastifySwaggerOptions);

  server.register(fastifySwaggerUi, swaggerUiOptions);

  server.register(cors)

  server.register(
    async function (fastifyInstance) {
      customerFuelRoutes(fastifyInstance)
    });

  server.listen({ port: Number(process.env.PORT), host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
