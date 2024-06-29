"use server"
import { RegisterSchema } from "@/models/user.schema";
import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return {
      error: "Invalid Fields!",
    };
  }

  const { email, password, username } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User Already Exists" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name:username,
    },
  });
  
 
  return {
    success: "User Created Successfully",
  };
};
