"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./common/utils");
require("./common/container");
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const middlewares_1 = require("./infra/middlewares");
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const common_1 = require("./common");
const customerRoutes_1 = require("./routes/customerRoutes");
(async () => {
    const server = (0, fastify_1.default)({ logger: true });
    server.addHook('preHandler', middlewares_1.loggerMiddleware);
    const swaggerUiOptions = await (0, common_1.fastifySwaggerUiOptions)();
    server.register(swagger_1.default, common_1.fastifySwaggerOptions);
    server.register(swagger_ui_1.default, swaggerUiOptions);
    server.register(async function (fastifyInstance) {
        (0, customerRoutes_1.customerFuelRoutes)(fastifyInstance);
    });
    server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
})();
//# sourceMappingURL=server.js.map