import { Button } from "@/components/ui/button";

export const SidebarHeader = () => {
  return (
    <div className="flex w-full flex-col items-stretch justify-center p-4">
      <Button
        variant="ghost"
        className="flex w-full items-center gap-3 justify-between p-2 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-5 items-center gap-2 justify-center w-5">
            <div className="bg-slate-400 border-zinc-200 border flex min-h-6 min-w-6 w-6 h-6 py-2 rounded-full border-solid" />
          </div>
          <span className="text-black text-sm font-semibold">Carré Blanc</span>
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
