describe("createAccount", () => {
  it("should create a new account", async () => {
    const accountData = {
      email: "test@example.com",
      password: "password123",
    };

    const response = await createAccount(accountData);

    expect(response).toHaveProperty("id");
    expect(response.email).toBe(accountData.email);
  });
});

// Mock implementation of createAccount for testing purposes
async function createAccount(data: { email: string; password: string }) {
  // Simulate account creation logic
  return {
    id: "12345",
    email: data.email,
  };
}