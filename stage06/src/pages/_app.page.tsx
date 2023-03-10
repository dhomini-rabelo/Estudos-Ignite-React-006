import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../code/settings/frontend'

dayjs.locale('pt-br')

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
