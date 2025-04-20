import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Yandex from "@auth/core/providers/yandex";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [Google, Yandex]
});
