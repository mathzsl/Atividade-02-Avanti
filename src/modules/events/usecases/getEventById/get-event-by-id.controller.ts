import { Request, Response } from "express";
import { GetEventByIdUseCase } from "./get-event-by-id.usecase";

export class GetEventByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const updateEventUseCase = new GetEventByIdUseCase();

    const result = await updateEventUseCase.execute(id);

    return res.status(200).json(result);
  }
}
