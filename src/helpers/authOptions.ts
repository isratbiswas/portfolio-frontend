import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      password?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    password?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("email and password are missing");
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
          if (!res?.ok) {
            console.error("Login Failed", await res.text());
            return null;
          }
          const user = await res.json();
          if (user) {
            return {
              id: user?._id,
              email: user?.email,
              image: user?.image,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
        // Add logic here to look up the user from the credentials supplied
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  // providers: [
  //   CredentialsProvider({
  //     name: "Credentials",

  //     credentials: {
  //       email: { label: "Email", type: "text" },
  //       password: { label: "Password", type: "password" },
  //     },
  //     async authorize(credentials) {
  //       if (!credentials?.email || !credentials.password) {
  //         console.error("Email or Password is missing");
  //         return null;
  //       }

  //       try {
  //         const res = await fetch(
  //           `https://portfolio-backend-navy-eight.vercel.app/api/v1/auth/login`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               email: credentials.email,
  //               password: credentials.password,
  //             }),
  //           }
  //         );
  //         console.log("Response From Backend:", res);
  //         if (!res?.ok) {
  //           console.error("Login Failed", await res.text());
  //           return null;
  //         }

  //         const user = await res.json();
  //         if (user.id) {
  //           return {
  //             id: user?.id,
  //             name: user?.name,
  //             email: user?.email,
  //           };
  //         } else {
  //           return null;
  //         }
  //       } catch (err) {
  //         console.error(err);
  //         return null;
  //       }
  //     },
  //   }),
  // ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user?.id;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (session?.user) {
  //       session.user.id = token?.id as string;
  //     }
  //     return session;
  //   },
  // },
  // secret: process.env.AUTH_SECRET,
};
console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
