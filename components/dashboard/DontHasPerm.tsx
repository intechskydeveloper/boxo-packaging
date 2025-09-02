import React from "react";
import ButtonLink from "../Common/ButtonLink";
import { SignedIn } from "@clerk/nextjs";

const DontHasPerm = async () => {
  return (
    <div className="flex flex-col items-center mx-auto justify-center min-h-screen">
      <div className="text-center">
        <p className="text-2xl font-semibold mb-2">
          You don't have permission to manage dashboard.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          If you believe this is an error, please contact your administrator.
        </p>
        <div className="space-x-4">
          <ButtonLink
            href="/"
            className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md "
            variant={"default"}
          >
            Go to Home
          </ButtonLink>
          <ButtonLink
            href="/auth/sign-in"
            className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md "
            variant={"outline"}
          >
            Login admin account
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default DontHasPerm;
