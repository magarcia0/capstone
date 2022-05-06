//Some of this code was taken from the next-auth.js documentation
// https://next-auth.js.org/getting-started/example
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../lib/prisma.ts'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
   // ...add more providers here
  ],
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      if (user) {
        token.uid = user.id;
      }
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      //session.user.uid = user.id;
      return Promise.resolve(session);
    }
  },
  database: process.env.DATABASE_URL,
})