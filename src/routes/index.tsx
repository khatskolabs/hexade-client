import React from "react"
import { Home, CreateOrder, CheckOrder, PrivacyPolicy, NotFound } from "../pages"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/create-order",
    element: <CreateOrder />
  },
  {
    path: "/check-order",
    element: <CheckOrder />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes
