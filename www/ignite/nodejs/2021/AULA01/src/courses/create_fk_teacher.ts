import { PrismaClient } from "@prisma/client";
import { create } from "domain";

const prisma = new PrismaClient();

async function main() {
  const result =  await prisma.courses.create({
        data: {
            name:"Curso de ReactJS",
            duration: 300,
            description: "Curso excelente de ReactJS",
            fk_id_teacher: "",
        }
    });
    console.log(result);
}

main();