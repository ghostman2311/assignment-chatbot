import Card from "@/components/card";

export default function Home() {
  return (
    <div className="p-5">
      <div className="container mx-auto pb-5">
        <div className="rounded mb-4">
          <h1 className="text-2xl font-medium leading-6 text-gray-900 mb-3">
            Welcome back, <span className="font-black">Ben! 👋</span>
          </h1>
         
          <p className="text-gray-500 w-10/12">
            Here, you will find the most recent insights into your business
            performance, ensuring you have the latest data at your fingertips
            for strategic planning.
          </p>
        </div>
      </div>
      <div className="container border rounded w-100 h-auto text-gray-900 p-7 bg-white">
      <Card/>
      </div>
    </div>
  );
}
