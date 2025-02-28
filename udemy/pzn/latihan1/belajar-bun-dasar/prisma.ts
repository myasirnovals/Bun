import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Muhamad Yasir Noval",
        email: "yan@example.com",
        phone: "088343345665"
    }
});

console.info(contact);