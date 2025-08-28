import { getBottomDescription } from "@/app/actions/product";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import RichtextHandler from "./RichtextHandler";

const BottomDescription = async ({ id }: { id: string }) => {
  const html = await getBottomDescription(id);
  return <RichtextHandler html={html as string} className="mt-20" />;
};

export default BottomDescription;
