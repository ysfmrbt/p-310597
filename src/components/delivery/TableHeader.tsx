
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TableHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-b border-zinc-200 p-6">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          Livraison
        </h1>
        <p className="text-sm text-zinc-600">Suivez les livraisons.</p>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-[225px]">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/46170298e531369d76e73c5090583e9ed292bdecd17b1cf8dc549426f4f76f61"
              alt="Search"
              className="h-4 w-4"
            />
          </div>
          <Input
            type="text"
            placeholder="Recherche"
            className="pl-9 pr-9"
          />
          <button className="absolute inset-y-0 right-3 flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/445590dfabbaed7e2a60979c46e9da27c2c84060d7f70a9f68366bc38f5768f2"
              alt="Clear"
              className="h-4 w-4"
            />
          </button>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/8bdab8c7437b200510e1625d755e8af9d18259700bdf59c79b5c2558d45ec20a"
              alt=""
              className="h-4 w-4"
            />
            Génerer rapport
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-blue-500 bg-blue-50 text-blue-500 hover:bg-blue-100"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/90070d0acffe6b551a1a0e551b0331af70a01a9099c793f9728d443aa0decb6a"
              alt=""
              className="h-4 w-4"
            />
            Exporter
          </Button>
        </div>
      </div>
    </div>
  );
};
