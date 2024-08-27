import { PrismaClient } from "@prisma/client";
import { create } from "domain";
import { connect } from "http2";

const prisma = new PrismaClient();

async function main() {
  const result =  await prisma.courses.create({
        data: {
           name : "Curso de React Native",
           description: "Curso excelente de React Native",
           duration: 300,
           teacher:{
            connect:{
                id: "",
            }
           }
        }
    });
    console.log(result);
}

main();