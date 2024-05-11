import { Request, Response } from "express";
import { FindAllEventUseCase } from "./find-all-event.usecase";

export class FindAllEventController {
  async handle(req: Request, res: Response) {

    const findAllEventUseCase = new FindAllEventUseCase();

    const result = await findAllEventUseCase.execute();

    return res.status(200).json(result);
  }
}
