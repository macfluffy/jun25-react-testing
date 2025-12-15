import { describe } from "vitest";

describe("Sanity check", () => {
    it("Adds numbers correctly", () => {
        // Arrange + Act
        const result = 1 + 1;

        // Assert
        expect(result).toBe(2);
    });
});