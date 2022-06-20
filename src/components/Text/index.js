import React from "react"
import { CustomText } from "./style"

export default function Text({ children, ...props }) {
    return (
        <CustomText {...props}>
            {children}
        </CustomText>
    )
}