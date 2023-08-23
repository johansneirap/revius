import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { getTokenFromAPIServer } from '@/utils'

const callbacks: any = {}
callbacks.signIn = async function signIn({ user, account }: any) {
  if (account.provider === 'google') {
    const googleUser = { ...user, accessToken: account.access_token }
    user.accessToken = await getTokenFromAPIServer('google', googleUser)
    return true
  }
  if (account.provider === 'facebook') {
    const facebookUser = { ...user, accessToken: account.access_token }
    user.accessToken = await getTokenFromAPIServer('facebook', facebookUser)
    return true
  }
  return false
}
callbacks.jwt = async function jwt({ token, user }: any) {
  if (user) {
    token = { accessToken: user.accessToken, user }
  }
  return token
}
callbacks.session = async function session({ session, token }: any) {
  session.accessToken = token.accessToken
  session.user = token.user
  return session
}

const providers = [
  FacebookProvider({
    clientId: String(process.env.FB_ID),
    clientSecret: String(process.env.FB_SECRET),
  }),
  GoogleProvider({
    clientId: String(process.env.GOOGLE_ID),
    clientSecret: String(process.env.GOOGLE_SECRET),
  }),
]
const pages = { signIn: 'login' }
const options = {
  providers,
  pages,
  callbacks,
  secret: process.env.JWT_SECRET,
}
const CustomAuth = (req: any, res: any) => NextAuth(req, res, options)
export default CustomAuth
