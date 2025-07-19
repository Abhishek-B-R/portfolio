import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[400px]"><NavBar /></div>
      <div className="w-full"></div>
    </div>
  )
};
