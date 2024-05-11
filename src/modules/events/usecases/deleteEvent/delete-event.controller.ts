import { Request, Response } from "express";
import { DeleteEventUseCase } from "./delete-event.usecase";

export class DeleteEventController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteEventUseCase = new DeleteEventUseCase();

    const result = await deleteEventUseCase.execute(id);

    return res.status(204).json(result);
  }
}
