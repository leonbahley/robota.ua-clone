import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch("http://localhost:3001/auth/log-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const user = await res.json();

        if (user.token) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      if (trigger === "update") {
        if (session.info) {
          token.user = session.info;
          // token.user.name = session.info.name;
          // token.user.email = session.info.email;
          // token.user.phoneNumber = session.info.phoneNumber;
          // token.user.age = session.info.age;
          // token.user.location = session.info.location;
          // token.user.education = session.info.education;
          // token.user.workExperience = session.info.workExperience;
          // token.user.desiredPosition = session.info.desiredPosition;
          // token.user.favorites = session.info.favorites;
          // token.user.applications = session.info.applications;
        }
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});
