import {render, screen} from "@testing-library/react"
import Header from '../Header';



test("should render some text to the screen", () => {
  render(<Header text="Peace is a girl" />);
  const paragraphText = screen.getByText(/peace is a girl/i)
  expect(paragraphText).toBeInTheDocument();
}) 

test("should be an heading element", () => {
  render(<Header text="Peace is a girl" />);
  const paragraphText = screen.getByRole("heading")
  expect(paragraphText).toBeInTheDocument();
}) 

test("should have a given test id", () => {
  render(<Header text="Peace is a girl" />);
  const paragraphText = screen.getByTestId("t3048")
  expect(paragraphText).toBeInTheDocument();
}) 

