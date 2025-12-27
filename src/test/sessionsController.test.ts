import { app } from "@/app";
import { prisma } from "@/database/prisma";
import request from "supertest";

describe("SessionsController", () => {
  let user_id: string;

  afterAll(async () => {
    await prisma.users.delete({ where: { id: user_id } });
  });

  it("should authenticated a and get acess token", async () => {
    const userResponse = await request(app).post("/users").send({
      name: "auth Test User",
      email: "auth_test_user@gmail.com",
      password: "password1234",
    });

    user_id = userResponse.body.id;

    const SessionsResponse = await request(app).post("/sessions").send({
      email: "auth_test_user@gmail.com",
      password: "password1234",
    });

    expect(SessionsResponse.status).toBe(200);
    expect(SessionsResponse.body.token).toEqual(expect.any(String));
  });
});
