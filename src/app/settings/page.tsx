import { Tabs } from "@/components/tabs";
import {
  PlusCircleIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

export default function Settings() {
  return (
    <div className="container mx-auto p-5">
      <Tabs />
      <div className="flex p-5">
        <div className="flex-1" />
        <div className="bg-orange-500 flex items-center p-2 rounded-lg">
          <PlusCircleIcon className="h-6 w-6 " />
          <button className=" text-white text-sm px-4 py-1 ">
            New Chatbot
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="container mx-auto px-4">
          <div className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit Chatbot
                </button>
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
        <div className="container mx-auto px-4">
          <div className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit Chatbot
                </button>
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
        <div className="container mx-auto px-4">
          <div className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit Chatbot
                </button>
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
        <div className="container mx-auto px-4">
          <div className="border p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg text-gray-900 font-bold">Lorem Ipsum</h2>
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit Chatbot
                </button>
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
