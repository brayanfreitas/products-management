"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = void 0;
const tsyringe_1 = require("tsyringe");
const customerService = tsyringe_1.container.resolve('CustomerService');
const createCustomer = async (req, reply) => {
    try {
        const data = req.body;
        const customer = await customerService.createCustomer(data);
        return reply.send(customer);
    }
    catch (error) {
        return reply.status(error.statusCode).send({ error: error.message });
    }
};
exports.createCustomer = createCustomer;
//# sourceMappingURL=stationController.js.map