import { prisma } from "../../../../database/prismaClient";

export class FindAllEventUseCase {
  async execute() {
    const result = await prisma.events.findMany();

    return result;
  }
}
