import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: ""
        },
        include: {
            modules: true,
        }
    });
    console.log(result);
}

main();