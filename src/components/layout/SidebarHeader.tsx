
import { Button } from "@/components/ui/button";

export const SidebarHeader = () => {
  return (
    <div className="p-4">
      <Button
        variant="ghost"
        className="flex w-full items-center justify-between px-4 py-2 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-6 h-6">
            <div className="bg-primary border-gray-200 border flex h-6 w-6 rounded-full border-solid" />
          </div>
          <span className="text-gray-800 text-sm font-semibold">Carré Blanc</span>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/65bc4127e22ecf66a22375c0df50168169c67db38c103dca571c4c0baa2a8fd9"
          alt="Toggle menu"
          className="w-5 h-5"
        />
      </Button>
    </div>
  );
};
