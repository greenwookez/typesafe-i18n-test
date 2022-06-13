import React from "react"
import { Link } from "react-router-dom"
import { useI18nContext } from "./packages/localization/i18n-react"

export const Nav = () => {
  const { setLocale } = useI18nContext()

  return (
    <ul>
      <li><button onClick={() => setLocale("ru")}>RU</button></li>
      <li><button onClick={() => setLocale("en")}>EN</button></li>
      <li><button onClick={() => setLocale("de")}>DE</button></li>
      <li><Link to="/">Home Page</Link></li>
      <li><Link to="/namespace">Namespace Page</Link></li>
    </ul>
  )
}