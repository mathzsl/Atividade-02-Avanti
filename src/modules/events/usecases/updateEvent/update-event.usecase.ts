import { AppError } from "../../../../../errors/app-error";
import { prisma } from "../../../../database/prismaClient";
import { EventDTO } from "../../dtos/EventDTO";

export class UpdateEventUseCase {
  async execute(id: string, data: EventDTO) {
    const eventExists = await prisma.events.findUnique({ where: { id } });

    if (!eventExists) {
      throw new AppError("Event does not exist!");
    }

    const updatedEvent = await prisma.events.update({ data, where: { id } });

    return updatedEvent;
  }
}
