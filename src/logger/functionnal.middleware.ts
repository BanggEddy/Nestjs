import { NextFunction, Request, Response } from "express";

export function logger(req: Request, res: Response, next: NextFunction)
{
    console.log("Requête passée à travers le logger functional middleware");
    next();
}