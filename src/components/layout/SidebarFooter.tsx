
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/7526c9431b0e018279229c19795868a02c20ac27e1171eb529d727f95a6ffa2e",
    label: "Paramétres",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/2ffb0e08ce833f68afeed999cd3b1adde013ba8682fcc66254d904ae7fe455e9",
    label: "Support",
  },
];

export const SidebarFooter = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="px-4 py-2">
        {footerItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="flex w-full items-center justify-start gap-3 px-4 py-2 mb-1 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <div className="flex items-center justify-center w-5 h-5">
              <img src={item.icon} alt="" className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </Button>
        ))}
      </div>
      <Separator className="my-2 bg-gray-200" />
      <div className="p-4">
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between px-4 py-2 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/3bccc318700ecf3152d9dd90a338bda15b1d638f100c19668ab8e781177034e4"
              alt="Profile"
              className="w-10 h-10 rounded-md"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">Erica</span>
              <span className="text-xs font-medium text-gray-600">
                erica@example.com
              </span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/d2a56c4d0a8eb0f03e276df3e3e3d62430e319d52c4831651ed42f49c5fc6d0f"
            alt="Menu"
            className="w-5 h-5"
          />
        </Button>
      </div>
    </div>
  );
};
