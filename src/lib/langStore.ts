import { DEFAULT_LANG, type Lang } from './i18n'

const STORAGE_KEY = 'ilan-lang'

let listeners: (() => void)[] = []
let cached: Lang | null = null

function readFromStorage(): Lang {
  if (cached !== null) return cached
  const saved = window.localStorage.getItem(STORAGE_KEY)
  cached = saved === 'hr' || saved === 'en' ? saved : DEFAULT_LANG
  return cached
}

export function subscribe(onChange: () => void): () => void {
  listeners.push(onChange)
  return () => {
    listeners = listeners.filter((l) => l !== onChange)
  }
}

/** Vrijednost na klijentu — čita zapamćeni izbor iz localStorage. */
export function getSnapshot(): Lang {
  return readFromStorage()
}

/** Vrijednost pri poslužiteljskom renderu i hidraciji — uvijek zadani jezik. */
export function getServerSnapshot(): Lang {
  return DEFAULT_LANG
}

export function setStoredLang(next: Lang): void {
  cached = next
  window.localStorage.setItem(STORAGE_KEY, next)
  listeners.forEach((l) => l())
}
