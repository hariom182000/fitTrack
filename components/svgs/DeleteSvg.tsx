import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DeleteSvg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    viewBox="0 0 100 125"
    {...props}
  >
    <Path d="M91.6 16.4h-25c-1.3-7.9-8.2-14-16.5-14h-.3c-8.3 0-15.2 6.1-16.5 14h-25c-2.2 0-3.9 1.7-3.9 3.9s1.7 3.9 3.9 3.9H14v56.4c0 9.4 7.5 16.9 16.9 16.9h37.8c9.4 0 16.9-7.5 16.9-16.9V24.2h5.9c2.2 0 3.9-1.7 3.9-3.9s-1.6-3.9-3.8-3.9zm-41.7-6.2h.3c4 0 7.4 2.6 8.5 6.2H41.3c1.2-3.6 4.5-6.2 8.6-6.2zm28.2 70.5c0 5.1-4 9.1-9.1 9.1H31c-5.1 0-9.1-4-9.1-9.1V24.2H78v56.4h.1z" />
    <Path d="M38.2 76.9c2.2 0 3.9-1.7 3.9-3.9V41.3c0-2.2-1.7-3.9-3.9-3.9s-3.9 1.7-3.9 3.9V73c0 2.2 1.7 3.9 3.9 3.9zM61.8 76.9c2.2 0 3.9-1.7 3.9-3.9V41.3c0-2.2-1.7-3.9-3.9-3.9s-3.9 1.7-3.9 3.9V73c0 2.2 1.9 3.9 3.9 3.9z" />
  </Svg>
);
export default DeleteSvg;
