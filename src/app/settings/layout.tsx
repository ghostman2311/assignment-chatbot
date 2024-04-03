import SettingsTabs from "./components/settings-tabs";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="container mx-auto p-5">
      <h1 className=" text-2xl font-bold mb-5">Account Settings</h1>
      <SettingsTabs />
      {children}
    </div>
  );
}
