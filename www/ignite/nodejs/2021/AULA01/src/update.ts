import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
const result = await prisma.courses.update({

    where : {
        id: '9c31ba34-c7d2-4c1b-bcf9-8a9537ed86a1'
    },
    data:{
        duration : 300

    }
})
console.log(result);
    
}

main();