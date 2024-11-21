import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "../Header"
import { HEADER_NAVIGATION_ITEMS } from "@/utils/constant"

describe("Header", () => {
  it("SHOULD match snapshot", () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("SHOULD renders logo", () => {
    render(<Header />)
    const logo = screen.getByAltText("logo")
    expect(logo).toBeInTheDocument()
  })

  it("SHOULD renders all navigation links", () => {
    render(<Header />)

    for (const link of HEADER_NAVIGATION_ITEMS) {
      const anchor = screen.getByText(link.label)
      expect(anchor).toBeInTheDocument()
      expect(anchor.closest("a")).toHaveAttribute("href", link.href)
    }
  })

  it("SHOULD renders the Sign in button", () => {
    render(<Header />)
    const signInButton = screen.getByText("Sign in")
    expect(signInButton).toBeInTheDocument()
  })
})
