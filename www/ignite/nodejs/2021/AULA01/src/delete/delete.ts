import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const resul = await prisma.coursesModules.delete({
        where:{
            id:""
        }
    })
    console.log(resul);
}

main();