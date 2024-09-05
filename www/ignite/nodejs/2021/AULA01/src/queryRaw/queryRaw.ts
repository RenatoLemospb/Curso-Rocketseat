import { PrismaClient,Prisma, modules } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.$queryRaw<modules[]>(
        Prisma.sql `select * from modules`
        );
        result.map((item)=>console.log(item.name));
        // console.log(result);
    
}

main();