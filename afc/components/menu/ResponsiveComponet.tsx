// app/page.tsx or components/ResponsiveComponent.tsx
'use client'

import PizzaSpinWheel from "./carousel"
import { useIsMobile } from "./hooks/IsMobile"
import PizzaSpinWheelMobile from "./MenuSpinnerMobile"


const ResponsiveComponent = () => {

  return (
    <>
      {useIsMobile() ? <PizzaSpinWheelMobile /> : <PizzaSpinWheel />}
    </>
  )
}

export default ResponsiveComponent
