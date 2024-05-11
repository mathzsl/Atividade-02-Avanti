import { AppError } from "../../../../../errors/app-error";
import { prisma } from "../../../../database/prismaClient";

export class DeleteEventUseCase {
  async execute(id: string) {
    const eventExists = await prisma.events.findUnique({ where: { id } });

    if(!eventExists) {
      throw new AppError('Event does not exists!')
    }

    const eventRemoved = await prisma.events.delete({ where: { id } });

    return eventRemoved;
  }
}
