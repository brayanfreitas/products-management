"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
const infra_1 = require("../../infra");
tsyringe_1.container.register('CustomerRepository', { useClass: infra_1.CustomerPrismaRepository });
//# sourceMappingURL=repository.js.map