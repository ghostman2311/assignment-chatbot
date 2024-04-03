import {
  PlusCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ChatBot() {
  return (
    <div className="p-3">
      <div className="flex ">
        <div className="flex-1" />
        <div className="bg-orange-500 flex items-center p-3 rounded-lg">
          <PlusCircleIcon className="h-6 w-6 text-white" />
          <button className=" text-white text-sm px-4 py-1 ">
            New Chatbot
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/settings/chatbot/edit"
                  className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600"
                >
                  Edit Chatbot
                </Link>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-500">Created on March 29, 2024</p>
              <p className="text-gray-500">&#9679;</p>
              <p className="text-gray-500">Created by Ben Petersen</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/settings/chatbot/edit"
                  className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600"
                >
                  Edit Chatbot
                </Link>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-500">Created on March 29, 2024</p>
              <p className="text-gray-500">&#9679;</p>
              <p className="text-gray-500">Created by Ben Petersen</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/settings/chatbot/edit"
                  className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600"
                >
                  Edit Chatbot
                </Link>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-500">Created on March 29, 2024</p>
              <p className="text-gray-500">&#9679;</p>
              <p className="text-gray-500">Created by Ben Petersen</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/settings/chatbot/edit"
                  className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600"
                >
                  Edit Chatbot
                </Link>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-500">Created on March 29, 2024</p>
              <p className="text-gray-500">&#9679;</p>
              <p className="text-gray-500">Created by Ben Petersen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
