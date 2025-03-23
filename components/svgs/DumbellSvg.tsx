import * as React from "react"
import Svg, { SvgProps, Path, Text } from "react-native-svg"
const DumbellSvg = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -10 110 135" {...props}>
    <Path
      fillRule="evenodd"
      d="M37.5 59.375V75a6.251 6.251 0 0 1-6.25 6.25h-9.375a6.251 6.251 0 0 1-6.25-6.25V25a6.251 6.251 0 0 1 6.25-6.25h9.375A6.251 6.251 0 0 1 37.5 25v15.625h25V25a6.251 6.251 0 0 1 6.25-6.25h9.375a6.251 6.251 0 0 1 6.25 6.25v50a6.251 6.251 0 0 1-6.25 6.25H68.75A6.251 6.251 0 0 1 62.5 75V59.375zM31.25 75V25h-9.375v50zm37.5-50v50h9.375V25zM62.5 46.875h-25v6.25h25zm-50 21.875H9.375a6.248 6.248 0 0 1-6.25-6.25v-25a6.248 6.248 0 0 1 6.25-6.25H12.5v6.25H9.375v25H12.5zm75-37.5h3.125a6.248 6.248 0 0 1 6.25 6.25v25a6.248 6.248 0 0 1-6.25 6.25H87.5V62.5h3.125v-25H87.5z"
    />
     
  </Svg>
)
export default DumbellSvg
