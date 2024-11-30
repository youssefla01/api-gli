import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ExecutionContext } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  getRequest(context: ExecutionContext): Request {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies["access_token"];

    if (!token) {
      throw new Error("Token not found in cookies");
    }

    request.headers["authorization"] = `Bearer ${token}`;

    return request;
  }
}
