import { FastifyRequest, FastifyReply, DoneFuncWithErrOrRes } from 'fastify';

export function loggerMiddleware(
  req: FastifyRequest,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) {
  console.log(`${req.method} - ${req.url}`);
  done();
}
