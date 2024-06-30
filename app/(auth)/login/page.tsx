import LoginForm from '@/components/auth/login-form'
import React from 'react'

const SignIn = () => {
  console.log(process.env.
    GITHUB_CLIENT_SECRET)
  return (
    <LoginForm />
  )
}

export default SignIn