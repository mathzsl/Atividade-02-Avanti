import { Request, Response } from "express";
import { CreateEventUseCase } from "./create-event.usecase";

export class CreateEventController {
  async handle(req: Request, res: Response) {
    const data = req.body;

    const createEventUseCase = new CreateEventUseCase();

    const result = await createEventUseCase.execute(data);

    return res.status(201).json(result);
  }
}
