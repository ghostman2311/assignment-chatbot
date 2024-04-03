import {
  EllipsisVerticalIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import avatarImage1 from "@/images/avatars/avatar-1.png";
import Image from "next/image";

export default function Users() {
  return (
    <div className="p-3">
      <div className="flex ">
        <div className="flex-1" />
        <div className="bg-orange-500 flex items-center p-3 rounded-lg">
          <PlusCircleIcon className="h-6 w-6 " />
          <button className=" text-white text-sm px-4 py-1 ">
            Invite User
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Image
                  src={avatarImage1}
                  alt=""
                  className="h-14 w-14 flex-none rounded-full"
                />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col p-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg text-gray-900 font-bold">
                        Ben Petersen
                      </h2>
                      <span className="bg-green-200 text-green-500 border-green-500 border  px-4 py-0.5 text-sm  rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-gray-400 text-sm">
                        Last seen on March 29, 2024 10:00 pm
                      </p>
                      <p className="text-gray-400 text-sm">&#9679;</p>
                      <p className="text-gray-400 text-sm">test@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit User
                </button>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Image
                  src={avatarImage1}
                  alt=""
                  className="h-14 w-14 flex-none rounded-full"
                />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col p-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg text-gray-900 font-bold">
                        Arian Klau
                      </h2>
                      <span className="bg-green-200 text-green-500 border-green-500 border  px-4 py-0.5 text-sm rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-gray-400 text-sm">
                        Last seen on March 29, 2024 10:00 pm
                      </p>
                      <p className="text-gray-400 text-sm">&#9679;</p>
                      <p className="text-gray-400 text-sm">test@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit User
                </button>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Image
                  src={avatarImage1}
                  alt=""
                  className="h-14 w-14 flex-none rounded-full"
                />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col p-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg text-gray-900 font-bold">
                        Lorem Ipsum
                      </h2>
                      <span className="bg-blue-200 text-blue-500 border-blue-500 border  px-4 py-0.5 text-sm  rounded-full">
                        Invited
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-gray-400 text-sm">
                        Last seen on March 29, 2024 10:00 pm
                      </p>
                      <p className="text-gray-400 text-sm">&#9679;</p>
                      <p className="text-gray-400 text-sm">test@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit User
                </button>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-3">
          <div className="border p-3 rounded mb-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Image
                  src={avatarImage1}
                  alt=""
                  className="h-14 w-14 flex-none rounded-full"
                />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col p-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg text-gray-900 font-bold">
                        Lorem Ipsum
                      </h2>
                      <span className="bg-green-200 text-green-500 border-green-500 border  px-4 py-0.5 text-sm  rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <p className="text-gray-400 text-sm">
                        Last seen on March 29, 2024 10:00 pm
                      </p>
                      <p className="text-gray-400 text-sm">&#9679;</p>
                      <p className="text-gray-400 text-sm">test@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className=" px-4 py-0.5 text-sm rounded border-orange-600 border-2 text-orange-600">
                  Edit User
                </button>
                <EllipsisVerticalIcon className="h-6 w-6 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
