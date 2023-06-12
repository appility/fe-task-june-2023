import * as React from "react"
import { PropsWithChildren } from 'react'
import Header from "@/components/Header/Header"
  
const DefaultLayout = ({children}: PropsWithChildren) => {
    return <>
        <Header />
        {children}
    </>
}

export default DefaultLayout
