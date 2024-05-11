import { prisma } from "../../../../database/prismaClient";
import { EventDTO } from "../../dtos/EventDTO";

export class CreateEventUseCase {
  async execute(data: EventDTO) {
    const event = await prisma.events.create({ data });

    return event;
  }
}
