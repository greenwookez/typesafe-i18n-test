import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home.react"
import TypesafeI18n from "./packages/localization/i18n-react"
import { Namespace } from "./Namespace.react"

export const App: React.FC = () => {
  return (
    <TypesafeI18n locale='en'>
      <h1>Test typesafe-i18n App:</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/namespace" element={<Namespace />} />
        </Routes>
      </BrowserRouter>
    </TypesafeI18n>
  )
}
