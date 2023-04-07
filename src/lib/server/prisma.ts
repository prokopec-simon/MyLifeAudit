import { PrismaClient } from '@prisma/client';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

//TODO: Check if this is the correct way to have prisma in production.
//if (env.NODE_ENV !== "production") {
global.prisma = prisma;
//}
