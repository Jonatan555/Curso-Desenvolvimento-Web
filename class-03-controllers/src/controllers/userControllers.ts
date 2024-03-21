import { Request, Response, NextFunction } from "express";

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, age } = req.body;

      if (id && name && age) {
        console.log();
        return res.status(201).json({ status: `user ${id} created` });
      }

      throw res.status(400).json({ status: `user not created!` });
    } catch (error) {
      next(error);
    }
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.status(201).json({ user: id });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, age } = req.body;

    if (id && name && age) {
      console.log("updatesd", { id, name, age });
      res.status(200).json({ status: `user ${id} updated!` });
      return;
    }

    res.json({ status: "user not updated!" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ status: `user ${id} deleted` });
  },
};
