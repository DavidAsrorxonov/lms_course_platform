"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState, useTransition } from "react";
import { toast } from "sonner";

const VerifyRequest = () => {
  const [otp, setOtp] = useState("");
  const [emailPending, startEmailTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get("email");

  const router = useRouter();

  const verifyOtp = () => {
    startEmailTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email as string,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email verified!");
          },
        },
      });
    });
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent a 6-digit verification code to your email address. Please
          enter it below.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <p className="text-xs text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <Button className="w-full">Verify Account</Button>
      </CardContent>
    </Card>
  );
};

export default VerifyRequest;
