'use client'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react'
import { dict, type Dict, type Lang } from '../lib/i18n'
import { getServerSnapshot, getSnapshot, setStoredLang, subscribe } from '../lib/langStore'

interface SiteValue {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
  quoteOpen: boolean
  openQuote: () => void
  closeQuote: () => void
}

const SiteContext = createContext<SiteValue | null>(null)

export function useSite(): SiteValue {
  const value = useContext(SiteContext)
  if (!value) throw new Error('useSite se mora koristiti unutar <SiteProvider>')
  return value
}

export default function SiteProvider({ children }: { children: React.ReactNode }) {
  // Zapamćeni jezik je vanjsko stanje (localStorage); na poslužitelju je uvijek hrvatski,
  // pa se prvi HTML i hidracija poklapaju.
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => setStoredLang(next), [])
  const openQuote = useCallback(() => setQuoteOpen(true), [])
  const closeQuote = useCallback(() => setQuoteOpen(false), [])

  const value = useMemo<SiteValue>(
    () => ({ lang, t: dict[lang], setLang, quoteOpen, openQuote, closeQuote }),
    [lang, setLang, quoteOpen, openQuote, closeQuote],
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}
