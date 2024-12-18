import { Category } from "@/types/category";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { v4 as uuidv4 } from "uuid";

const uniqId = uuidv4().toString();

async function main() {
  const hoodie = await prisma.product.upsert({
    where: { id: uniqId },
    update: {},
    create: {
      id: uniqId,
      category: "hoodie" as Category,
      image: "https://dummyimage.com/250x300/000/fff",
      price: "100",
      title: "Amazing black hoodie",
    },
  });
  console.log(hoodie);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
