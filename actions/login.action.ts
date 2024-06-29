"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/models/user.schema";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid Fields!",
    };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    console.log("try triggered")

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
         

        default:
          console.log("error occurred")
          return { error: "Something went wrong!" };
          
      }
    }
    
    throw error;
  }
};
