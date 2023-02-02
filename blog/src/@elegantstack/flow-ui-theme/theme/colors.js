// Importing default theme color object to mutate it
import baseColors from '@elegantstack/flow-ui-theme/src/theme/colors'

const rrColours = {
    // Alpha (primary)
    alphaLighter: '#78716c',
    alphaLight: '#44403c',
    alpha: '#1c1917',
    alphaDark: '#1c1917',
    alphaDarker: '#1c1917',
    // Beta (secondary)
    betaLighter: '#fecdd3',
    betaLight: '#fb7185',
    beta: '#f43f5e',
    betaDark: '#e11d48',
    betaDarker: '#9f1239'
  }

export default {
    ...baseColors,
    ...rrColours
}