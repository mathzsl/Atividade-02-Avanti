import { Request, Response } from "express";
import { UpdateEventUseCase } from "./update-event.usecase";

export class UpdateEventController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;

    const updateEventUseCase = new UpdateEventUseCase();

    const result = await updateEventUseCase.execute(id, data);

    return res.status(200).json(result);
  }
}
