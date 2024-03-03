import React from 'react'

const BackgroundHighlight = ({ shadowBlur, shadowSpread, highlightColor, innerSize, topPos, rightPos, setHeight = false, setZ = false, centerHoriz = false }) => (
    <div style={{ boxShadow: `0px 0px ${shadowBlur} ${shadowSpread} ${highlightColor}`, top: topPos, right: rightPos, background: highlightColor, height: setHeight ? setHeight : innerSize, width: innerSize, zIndex: setZ ? setZ : "-10" }} className={`${centerHoriz ? "translate-x-1/2" : ""} opacity-5 rounded-full blur-lg  w-[${innerSize}] absolute`}>
    </div>
)

export default BackgroundHighlight
