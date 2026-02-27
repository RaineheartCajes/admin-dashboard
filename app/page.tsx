import LineChart from "@/components/LineChart";
import Image from "next/image";
export default function Home() {
  return (
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-10 py-1 px-5">
            <h1 className="text-5xl font-bold mb-6">My Chart</h1>
            <LineChart />
      </div>
    </div>
  );
}
