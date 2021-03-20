export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

export const mainContainerWidthInPercentage = {
  xs: 95,
  sm: 93,
  md: 92,
  lg: 92,
  xl: 92,
}

export const contentContainerWidthInPercentage = Object.entries(
  mainContainerWidthInPercentage
).reduce((acc, [key, value], i) => {
  if (i === 0) {
    acc[key] = value
    return acc
  }

  acc[key] = value - 10
  return acc
}, {})
