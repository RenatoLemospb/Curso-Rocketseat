import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

async function main() {
  const result =  await prisma.courses.create({
        data: {
            name:"Curso de Java",
            duration: 500,
            description: "Curso de java 17",
            teacher: {
                create: {
                    name: "Rafa Camarda",
                }
            }
        }
    });
    console.log(result);
}

main();