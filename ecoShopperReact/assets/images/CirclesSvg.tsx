import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function CirclesSvg(props: SvgProps) {
  return (
    <Svg
      width={428}
      height={387}
      viewBox="0 0 428 387"
      fill="none"
      {...props}
    >
      <Path
        d="M101 228.5c0 38.936-31.564 70.5-70.5 70.5S-40 267.436-40 228.5-8.436 158 30.5 158s70.5 31.564 70.5 70.5z"
        fill="#FFE145"
      />
      <Path
        d="M204 165c0 51.362-41.638 93-93 93s-93-41.638-93-93 41.638-93 93-93 93 41.638 93 93z"
        fill="#FDC229"
      />
      <Path
        d="M340 126c0 69.588-56.412 126-126 126S88 195.588 88 126 144.412 0 214 0s126 56.412 126 126z"
        fill="#FDA829"
      />
      <Path
        d="M471 152.5c0 80.91-65.59 146.5-146.5 146.5S178 233.41 178 152.5 243.59 6 324.5 6 471 71.59 471 152.5z"
        fill="#F90"
      />
      <Path
        d="M610 226c0 88.918-72.082 161-161 161s-161-72.082-161-161S360.082 65 449 65s161 72.082 161 161z"
        fill="#FF7A00"
      />
    </Svg>
  )
}

export default CirclesSvg
