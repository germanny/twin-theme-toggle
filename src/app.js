import React from "react"
import { GlobalStyles } from "twin.macro"

import { StylesBase, ThemeToggle, Logos } from "./components"

const App = () => (
  <div>
    <GlobalStyles />
    <StylesBase />
    <div tw="h-screen flex flex-col items-center">
      <Logos />
      <div tw="h-full flex justify-center items-center">
        <ThemeToggle />
      </div>
    </div>
  </div>
)

export default App
