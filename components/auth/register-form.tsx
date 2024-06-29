"use client";
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { RegisterSchema } from "@/models/user.schema";
import { z } from "zod";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ModeToggle } from "../ui/theme-switcher";
import { Button } from "../ui/button";
import { FormError } from "../form.error";
import { FormSuccess } from "../form-success";
import { Register } from "@/actions/register.action";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error,setError] = useState<string | undefined>("");
  const [success,setSuccess] = useState<string | undefined> ("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      username:""
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");


    startTransition(()=> {
      Register(values)
      .then((data)=> {
        setError(data.error)
        setSuccess(data.success)
      })
    })
   
  };

  return (
    <CardWrapper
      headerLabel={"Create your account"}
      backButton={"Already have an account"}
      backButtonhref="/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="mushrafparwej"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="musharafparwez@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="**********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" disabled={isPending} className="w-full">
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
function register(values: { email: string; password: string; username: string; }) {
  throw new Error("Function not implemented.");
}

