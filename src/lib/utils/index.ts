import { createContext, useContext } from 'react'

export const pluralize = ({
  count,
  one,
  other,
}: {
  count: number
  one: string
  other: string
}): string => (count === 1 ? one : other)

export const sortDate = (a: string, b: string) => {
  a = a.split('-').join('')
  b = b.split('-').join('')

  return a.localeCompare(b)
}

export function createCtx<T extends Record<string, unknown> | null>() {
  const ctx = createContext<T | undefined>(undefined)

  function useCtx<K = Record<string, unknown>>() {
    const c = useContext(ctx)

    if (c === undefined) {
      throw new Error('useCtx must be inside a Provider with a value')
    }

    return c as T & K
  }

  return [useCtx, ctx.Provider, ctx] as const
}
