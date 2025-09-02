import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { checkRole } from "@/utils/roles";
import { toast } from "sonner";
import DontHasPerm from "@/components/dashboard/DontHasPerm";

const page = async () => {
  const isAdmin = await checkRole("admin");

  return isAdmin ? (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-screen max-w-md rounded-lg border md:min-w-full"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Products</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Categories and Sub Categories</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ) : (
    <DontHasPerm />
  );
};

export default page;
