import Link from "next/link";

export default function EditChatBot() {
  return (
    <div className="p-3">
      <div className="bg-white p-6 shadow-sm rounded-lg">
        <div className="mb-4">
          <Link
            href="/settings/chatbot"
            className="text-orange-600 hover:text-orange-900"
          >
            &lt; Back
          </Link>
        </div>
        <h1 className="text-xl font-semibold mb-2">Edit Chatbot</h1>
        <p className="mb-6 text-gray-600">Edit your chatbot here</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-y p-5">
            <div className="flex flex-1 max-w-80 justify-between items-center">
              <label className="block text-md font-medium text-gray-700">
                Name
              </label>
              <p className="text-md text-gray-700">Lorem Ipsum</p>
            </div>
            <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border text-orange-600">
              Edit
            </button>
          </div>
          <div className="flex items-center justify-between border-b p-5">
            <div className="flex flex-1 max-w-80 justify-between items-center">
              <label className="block text-md font-medium text-gray-700">
                Description
              </label>
              <p className="text-md text-gray-700">Lorem Ipsum</p>
            </div>
            <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border text-orange-600">
              Edit
            </button>
          </div>
          <div className="flex items-center justify-between border-b p-5">
            <div className="flex flex-1 max-w-80 justify-between items-center">
              <label className="block text-md font-medium text-gray-700">
                Chatbot Prompt
              </label>
              <p className="text-md text-gray-700">Lorem Ipsum</p>
            </div>
            <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border text-orange-600">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
