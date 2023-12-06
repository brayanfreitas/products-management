"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
function loggerMiddleware(req, reply, done) {
    console.log(`${req.method} - ${req.url}`);
    done();
}
exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger.js.map