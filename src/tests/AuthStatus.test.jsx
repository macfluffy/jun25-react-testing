// Import necessary testing packages
import React from "react";
import { render, screen } from "@testing-library/react";

// Import the Authorisation components that are to be tested
import { AuthProvider } from "../contexts/AuthContext";
import AuthStatus from "../components/AuthStatus";
import userEvent from "@testing-library/user-event";

function renderWithAuth(ui) {
    return render(<AuthProvider>{ui}</AuthProvider>);
}

test("Show logged-out message", 
    () => {
        // Arrange
        /*render(
        <AuthProvider>
            <AuthStatus />
        </AuthProvider>
        );*/
        renderWithAuth(<AuthStatus />);

        // Act: None

        // Assert
        const warning = screen.getByText(/You are not logged in/i);
        expect(warning).toBeInTheDocument();
        const loggedin = screen.getByRole("button", {name: /login as alice/i});
        expect(loggedin).toBeInTheDocument();
    }
);

test("Logs in and logs out via context", 
    async () => {
        // Arrange
        renderWithAuth(<AuthStatus />);
        const user = userEvent.setup();
        const loginButton = screen.getByRole("button", {name: /login as alice/i});

        // Act 1: Login
        await user.click(loginButton);

        // Assert 1: Welcome message and logout button
        const welcomeMessage = screen.getByText(/welcome alice/i);
        expect(welcomeMessage).toBeInTheDocument();
        
        // Act 2: Logout
        const logoutButton = screen.getByRole("button", {name: /logout/i});
        await user.click(logoutButton);
        const logoutMessage = screen.getByText(/you are not logged in/i);
        expect(logoutMessage).toBeInTheDocument();
    }
);
