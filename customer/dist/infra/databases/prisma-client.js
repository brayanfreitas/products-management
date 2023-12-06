"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerDatabase = void 0;
const client_1 = require("@@/prisma/generated/client");
exports.customerDatabase = new client_1.PrismaClient({
    datasourceUrl: process.env.DATABASE_URL
});
//# sourceMappingURL=prisma-client.js.map