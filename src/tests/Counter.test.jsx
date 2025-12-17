// Necessary imports
import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components to be tested
import Counter from "../components/Counter";

// Test Cases
test("Shows the initial count", 
    () => {
        // Arrange: Render the Counter component
        render(<Counter />);

        // Act: Nothing to do

        // Assert: Check if the "0" is on the screen
        const countText = screen.getByText(/Count: 0/i);
        expect(countText).toBeInTheDocument()
    }
)

test("Increments the count when `Increment' is clicked", 
    async () => {
        // Arrange: Render the Counter component
        render(<Counter />);
        const user = userEvent.setup();

        // Act: Find the "Increment" button
        const incrementButton = screen.getByRole("button", {name: /increment/i});
        // Click it
        await user.click(incrementButton);

        // Assert: Check if "Count: 1" is in the Document
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    }
);

test("Decrements the count when `Decrement' is clicked", 
    async () => {
        // Arrange: Render the Counter component
        render(<Counter />);
        const user = userEvent.setup();

        // Act: Find the "Decrement" button
        const decrementButton = screen.getByRole("button", {name: /decrement/i});
        // Click it
        await user.click(decrementButton);

        // Assert: Check if "Count: 1" is in the Document
        expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
    }
);