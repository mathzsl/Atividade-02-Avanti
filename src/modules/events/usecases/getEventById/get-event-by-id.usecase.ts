import { AppError } from "../../../../../errors/app-error";
import { prisma } from "../../../../database/prismaClient";

export class GetEventByIdUseCase {
  async execute(id: string) {
    const event = await prisma.events.findUnique({ where: { id } });

    if (!event) {
      throw new AppError("Event does not exists!");
    }

    return event;
  }
}
