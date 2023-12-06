"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseUrl = void 0;
require("dotenv/config");
const createDatabaseUrl = (dbName) => {
    return `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${dbName}${process.env.DB_SSLMODE}`;
};
exports.createDatabaseUrl = createDatabaseUrl;
//# sourceMappingURL=config.js.map