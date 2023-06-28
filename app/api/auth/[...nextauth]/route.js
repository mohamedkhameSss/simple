import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/next/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "",
      ClientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});
export { handler as GET, handler as POST };
