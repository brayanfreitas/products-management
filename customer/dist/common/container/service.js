"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const customer_service_1 = require("../../services/customer.service");
const tsyringe_1 = require("tsyringe");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return tsyringe_1.container; } });
tsyringe_1.container.register('CustomerService', { useClass: customer_service_1.CustomerService });
//# sourceMappingURL=service.js.map