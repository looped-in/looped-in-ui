import "@testing-library/jest-dom"
import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import SignIn from "../UpdatePassword"
import * as nextNavigation from "next/navigation"

jest.mock("next/navigation", () => ({
  useRouter: () => {
    return {
      back: jest.fn(),
    }
  },
}))

describe("SignIn page", () => {
  beforeEach(() => {
    jest.spyOn(nextNavigation, "useRouter").mockReturnValue({
      back: jest.fn(),
    } as any)
    jest.spyOn(React, "useState").mockReturnValue([false, jest.fn()] as any)
  })

  it("SHOULD render match snapshot", () => {
    const { container } = render(<SignIn />)
    expect(container).toMatchSnapshot()
  })

  it("SHOULD renders the logo", () => {
    render(<SignIn />)
    const logo = screen.getByAltText("logo")
    expect(logo).toBeInTheDocument()
  })

  it("SHOULD renders the welcome message", () => {
    render(<SignIn />)
    const welcomeMessage = screen.getByText("Welcome back!")
    expect(welcomeMessage).toBeInTheDocument()
  })

  it("SHOULD renders the email input", () => {
    render(<SignIn />)
    const emailInput = screen.getByPlaceholderText("Email Address")
    expect(emailInput).toBeInTheDocument()
  })

  it("SHOULD renders the password input", () => {
    render(<SignIn />)
    const passwordInput = screen.getByPlaceholderText("Password")
    expect(passwordInput).toBeInTheDocument()
  })

  it("SHOULD renders the sign in button", () => {
    render(<SignIn />)
    const signInButton = screen.getByText("Sign In")
    expect(signInButton).toBeInTheDocument()
  })

  it("SHOULD renders the 'Remember me' text", () => {
    render(<SignIn />)
    const rememberMeText = screen.getByText("Remember me")
    expect(rememberMeText).toBeInTheDocument()
  })

  it("SHOULD renders the 'Forgot Password?' text", () => {
    render(<SignIn />)
    const forgotPasswordText = screen.getByText("Forgot Password?")
    expect(forgotPasswordText).toBeInTheDocument()
  })

  it("SHOULD renders the sign-in image", () => {
    render(<SignIn />)
    const signInImage = screen.getByAltText("signInImage")
    expect(signInImage).toBeInTheDocument()
  })

  it("SHOULD handles sign in button click", () => {
    render(<SignIn />)
    const signInButton = screen.getByText("Sign In")
    fireEvent.click(signInButton)
    // Add your assertions here based on what should happen when the button is clicked
  })
})
