/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import pattern from "../../../../content/assets/shared/patterns/map-blue.svg"

export default {
  heroContainer: {
    position: `relative`,
    pt: [5, 6],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `full`,
      top: 0,
      right: 0,
      borderRadius: t => `0 0 ${t.radii.xl} ${t.radii.xl}`,
      borderRadius: `xl`,
      mx: `auto`,
      filter: `blur(5px)`
    },
    '::after': {
      zIndex: -2,
      background: `url(${pattern}) no-repeat left top`,
      backgroundSize: `cover`
    }
  }
}
