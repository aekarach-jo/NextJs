import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    providers: [
        GithubProviderb({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

    ],
    callbacks: {
        async jwt({ token, account}){
            if(account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user}){
            session.accessToken = token.accessToken
            return session
        }
    }
})