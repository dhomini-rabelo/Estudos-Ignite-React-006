import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
    emailVerified: null
  }
  export interface Session {
    user: User
  }
}
