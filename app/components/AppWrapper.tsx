'use client'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import ThemeProvider from './ThemeProvider'
import { CssBaseline } from '@mui/material'

interface AppWrapperProps {
  children: ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <ThemeProvider>
      <Analytics />
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
