import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request, response: Response, next:NextFunction) {

    const authToken = request.headers.authorization;

    if(!authToken) {
      return response.status(401).end();
    }

    const [,token] = authToken.split(' ');

    try {
    const { sub } =  verify(token, "5458774ba4b590af04af2d8abc01f9c1") as Ipayload;

    request.user_id = sub;
      return next();
    } catch (error) {
        return response.status(401).end()
    }

}
