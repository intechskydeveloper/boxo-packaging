"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SlidingContact() {
  const items = ["sales@boxopackaging.com", "+1 234 567 890"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="w-full h-8 flex items-center justify-center overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={items[index]}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-sm font-extrabold text-gray-800 whitespace-nowrap"
        >
          <Link href={"/"}>{items[index]}</Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
