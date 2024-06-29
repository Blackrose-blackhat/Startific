"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";

import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButton: string;
  backButtonhref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButton,
  backButtonhref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
           <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonhref} label={backButton}/>
      </CardFooter>
    </Card>
  );
};
