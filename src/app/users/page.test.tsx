import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UsersPage from "./page";

// // Mock entire faker library
// jest.mock("@faker-js/faker", () => ({
//   faker: {
//     seed: jest.fn(),
//     string: { uuid: jest.fn().mockReturnValue("fixed-uuid") },
//     person: { fullName: jest.fn().mockReturnValue("John Doe") },
//     internet: { email: jest.fn().mockReturnValue("john@example.com") },
//     helpers: {
//       arrayElement: jest
//         .fn()
//         .mockReturnValueOnce("Admin")
//         .mockReturnValueOnce("active"),
//     },
//     image: { avatar: jest.fn().mockReturnValue("mock-avatar-url") },
//   },
// }));

describe("UsersPage", () => {
  it("renders users table correctly", () => {
    render(<UsersPage />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("User", { selector: "th" })).toBeInTheDocument(); //specific query for the text
  });

  it("renders correct number of users", () => {
    render(<UsersPage />);
    const allRows = screen.getAllByRole("row");
    const bodyRows = allRows.filter((row) => row.closest("tbody") !== null);
    expect(bodyRows).toHaveLength(10); // Matches your body row data length
  });

  // User Data Rendering Tests
  test("displays user details correctly", () => {
    render(<UsersPage />);

    // const roles = screen.getAllByText(/Admin|User|Viewer/);
    // expect(roles.length).toBeGreaterThan(0);
    const statuses = screen.getAllByText(/active|inactive/, {
      selector: "tbody div",
    });
    expect(statuses.length).toBeGreaterThan(0);
  });

  //   // Avatar Tests
  //   test("renders user avatars with fallback", () => {
  //     render(<UsersPage />);
  //     const avatars = screen.getAllByRole("img");
  //     expect(avatars.length).toBeGreaterThan(0);
  //   });

  //   // Status Badge Tests
  //   test("renders status badges correctly", () => {
  //     render(<UsersPage />);
  //     const activeBadge = screen.getByText("active");
  //     const inactiveBadge = screen.getByText("inactive");

  //     expect(activeBadge).toHaveClass("bg-green-100");
  //     expect(inactiveBadge).toHaveClass("bg-gray-100");
  //   });

  //   // Table Header Tests
  //   test("renders correct table headers", () => {
  //     render(<UsersPage />);
  //     const headers = ["User", "Role", "Status", "Last Active"];
  //     headers.forEach((header) => {
  //       expect(screen.getByText(header)).toBeInTheDocument();
  //     });
  //   });
});
