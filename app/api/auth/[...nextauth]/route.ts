import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const patient = await prisma.patient.findUnique({
          where: { email: credentials.email },
        });

        if (!patient) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          patient.password
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: patient.id.toString(),
          email: patient.email,
          name: `${patient.firstName} ${patient.lastName}`,
        };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };