import { PrismaClient } from "@prisma/client";

const prisma =new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de NodeJs",
            description: "Curso excelente de NodeJS"
        }
    })
console.log(result)    
}