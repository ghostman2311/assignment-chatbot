import Services from "@/components/services";
import { Tabs } from "@/components/tabs";

export default function Integration() {
  return (
    <div className="p-5">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Integration</h1>
        <p className="mb-8 text-gray-800">
          Connect all your tools to leverage the best performance for your
          business
        </p>
        <input
          className="border p-2 w-full mb-8 text-gray-100"
          type="text"
          placeholder="Search integrations"
        />

        <div className="flex">
          <div className="w-1/4 pr-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Categories</h2>
            <ul>
              <li className="my-2 text-gray-900">Accounting</li>
              <li className="my-2 text-gray-900">Business operations</li>
              <li className="my-2 text-gray-900">Collaboration</li>
              <li className="my-2 text-gray-900">Embedded partner</li>
              <li className="my-2 text-gray-900">Expense management</li>
              <li className="my-2 text-gray-900">Financial benefits</li>
              <li className="my-2 text-gray-900">Hiring and onboarding</li>
            </ul>
          </div>

          <div className="w-3/4">
            <Tabs />
            <Services />
          </div>
        </div>
      </div>
    </div>
  );
}
