import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:NEXT_PUBLIC.process.env.GITHUB_ID,
      clientSecret:NEXT_PUBLIC.process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)