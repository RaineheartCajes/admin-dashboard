import { getDiagnosis } from "@/app/utils/api"; // @/app/utils/app 
import { MyChart } from "@/components/MyChart"; // /app/components/chart

export default async function Home() {
  const diagnosis = await getDiagnosis();

  return (
    <div className="max-w-full w-full">
      <MyChart diagnosis={diagnosis} />
    </div>
  );
}