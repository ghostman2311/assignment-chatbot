"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "Users", href: "/settings/users", count: "52", current: true },
  { name: "Chatbot", href: "/settings/chatbot", count: "6", current: false },
];

export default function SettingsTabs() {
  const path = usePathname();
  return (
    <div className="hidden sm:block">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={classNames(
                path.includes(tab.href)
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                "flex whitespace-nowrap border-b-2 py-4 px-1 text-lg font-medium"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
