import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get("/dummy-get")
  getRootRoute() {
    return "Hi there";
  }
  @Get("/dummy-get-2")
  getByeThere() {
    return "bye there!";
  }
}
