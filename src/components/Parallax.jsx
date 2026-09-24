import { m } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

export default function Parallax() {
  const isMobile = useIsMobile();
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <m.div
        className="absolute top-[35vh] left-1/2 w-[300px] h-[300px] bg-indigo-500 opacity-30 blur-2xl rounded-full translate-x-[-50%] translate-y-[-50%]"
        animate={{ x: [0, -50, 0, 50, 0], y: [0, 30, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
