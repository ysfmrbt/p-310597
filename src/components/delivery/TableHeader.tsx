import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TableHeader = () => {
  return (
    <div className="border-zinc-200 flex w-full items-center gap-[40px_100px] overflow-hidden font-semibold justify-between flex-wrap px-5 py-4 border-b">
      <div className="flex flex-col text-black text-center">
        <h1 className="text-3xl leading-[1.2] tracking-[-0.75px]">Livraison</h1>
        <p className="text-sm leading-none">Suivez les livraisons.</p>
      </div>

      <div className="flex items-center gap-3 text-base text-[#010101] font-medium w-[225px]">
        <div className="items-center border border-[color:var(--Border-borderPrimary,#E4E4E7)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] bg-white flex w-[225px] overflow-hidden px-3 py-1.5 rounded-lg border-solid">
          <div className="flex w-full items-center gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/46170298e531369d76e73c5090583e9ed292bdecd17b1cf8dc549426f4f76f61"
              alt="Search"
              className="w-4 h-4"
            />
            <Input
              type="text"
              placeholder="Recherche"
              className="border-none shadow-none p-0 h-auto"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/445590dfabbaed7e2a60979c46e9da27c2c84060d7f70a9f68366bc38f5768f2"
              alt="Clear"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="flex min-w-60 gap-4 text-sm leading-none">
        <Button variant="outline" className="gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/8bdab8c7437b200510e1625d755e8af9d18259700bdf59c79b5c2558d45ec20a"
            alt=""
            className="w-4 h-4"
          />
          Génerer rapport
        </Button>
        <Button variant="outline" className="gap-2 bg-blue-100 border-blue-500">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/90070d0acffe6b551a1a0e551b0331af70a01a9099c793f9728d443aa0decb6a"
            alt=""
            className="w-4 h-4"
          />
          Exporter
        </Button>
      </div>
    </div>
  );
};
