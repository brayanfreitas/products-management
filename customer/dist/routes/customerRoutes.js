"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerFuelRoutes = void 0;
const stationController_1 = require("../controllers/stationController");
async function customerFuelRoutes(fastify) {
    fastify.post('/createCustomer', stationController_1.createCustomer);
}
exports.customerFuelRoutes = customerFuelRoutes;
//# sourceMappingURL=customerRoutes.js.map