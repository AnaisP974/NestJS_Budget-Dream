import { NextFunction, Response } from "express";

export function localData(req:  any, res: Response, next: NextFunction) {
    res.locals.connected = req.session.connected;
    res.locals.user = req.session.user;
    res.locals.message = req.session.message;
    res.locals.register = req.session.register;

    next();
}