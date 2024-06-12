import { render, screen } from "@testing-library/react"
import App from "./App"

test("Test", () => {
    render(<App />)

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/react/i)
})