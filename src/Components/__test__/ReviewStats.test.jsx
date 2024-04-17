import {render, screen} from "@testing-library/react"
import ReviewStats from "../ReviewStats"
import ReviewContext from "../../context/ReviewContext"

//helper method
function renderReviewContext(children, {providerProps, ...renderOptions}) {
  return render(
    <ReviewContext.Provider {...providerProps}>
      {children}
    </ReviewContext.Provider>, renderOptions
  )
}

describe("ReviewStats Component", () => {
  const review = [
    {
      "id": 1,
      "rating": "9",
      "text": "Lorem, ipsum dolor sit amet cons"
    },

    {
      "id": 2,
      "rating": "7",
      "text": "Lorem, ipsum dolor sit amet cons pamela rayn"
    },

  ]

  const providerProps = {
    value: {review}
  }

  renderReviewContext(<ReviewStats />, {providerProps})
  expect(screen.getByText(/Reviews:/)).toHaveTextContent("Reviews: 2")
  expect(screen.getByText(/Average:/)).toHaveTextContent("Average: 8")

})

test("display 0 average rating and 0 reviews when there is none", () => {
  const providerProps = {
    value: {review: []}
  }
  renderReviewContext(<ReviewStats />, {providerProps})
  expect(screen.getByText(/Reviews:/)).toHaveTextContent("Reviews: 0")
  expect(screen.getByText(/Average:/)).toHaveTextContent("Average: 0")
})
