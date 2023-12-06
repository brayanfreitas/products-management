"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerPrismaRepository = void 0;
const tsyringe_1 = require("tsyringe");
const prisma_client_1 = require("../prisma-client");
let CustomerPrismaRepository = class CustomerPrismaRepository {
    async createCustomer(customerData) {
        const customer = await prisma_client_1.customerDatabase.customer.create({
            data: {
                name: customerData.name,
                email: customerData.email,
                cellPhone: customerData.cellPhone,
                cpf: customerData.cpf,
                gender: customerData.gender,
                dateOfBirth: customerData.dateOfBirth,
                address: {
                    create: {
                        street: customerData.address.street,
                        number: customerData.address.number,
                        district: customerData.address.district,
                        city: customerData.address.city,
                        state: customerData.address.state,
                        country: customerData.address.country,
                        zipCode: customerData.address.zipCode
                    }
                }
            }
        });
        return customer;
    }
};
exports.CustomerPrismaRepository = CustomerPrismaRepository;
exports.CustomerPrismaRepository = CustomerPrismaRepository = __decorate([
    (0, tsyringe_1.injectable)()
], CustomerPrismaRepository);
//# sourceMappingURL=prismaCustomer.repository.js.map