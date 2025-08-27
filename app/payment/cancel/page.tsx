import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const PaymentCancelRoute = () => {
  return (
    <div className="w-full min-h-screen flex flex-1 justify-center items-center">
      <Card className="w-[350px]">
        <CardContent>
          <div className="w-full flex justify-center">
            <XIcon className="size-12 bg-red-500/30 text-red-500 rounded-full" />
          </div>
          <div className="mt-3 text-center sm:mt-5 w-full">
            <h2 className="text-xl font-semibold">Payment Cancelled</h2>
            <p className="mt-2 text-sm text-muted-foreground tracking-tight text-balance">
              No worries, you will not be charged
            </p>

            <Link
              href={"/"}
              className={buttonVariants({
                className: "w-full mt-5",
                variant: "outline",
              })}
            >
              <ArrowLeft className="size-4" />
              Go back to Home Page
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCancelRoute;
