export interface Breakpoints {
  readonly xs: string
  readonly sm: string
  readonly md: string
  readonly lg: string
  readonly xl: string
}

export interface ContainerWidth {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

// type Entries<T> = {
//   [K in keyof T]: [K, T[K]]
// }[keyof T][]

export const breakpoints: Breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

export const mainContainerWidthInPercentage: ContainerWidth = {
  xs: 95,
  sm: 93,
  md: 92,
  lg: 92,
  xl: 92,
}

function depictObjectKeyType<O>(o: O) {
  return Object.keys(o) as (keyof O)[]
}

export const contentContainerWidthInPercentage = depictObjectKeyType<ContainerWidth>(
  mainContainerWidthInPercentage
).reduce((acc, key, i) => {
  const value = mainContainerWidthInPercentage[key]
  if (typeof value === 'number') {
    if (i === 0) {
      acc[key] = value
      return acc
    }

    acc[key] = value - 10
    return acc
  } else {
    throw new Error('Wrong input types')
  }
}, {} as ContainerWidth)
