
import { Button } from "@/components/ui/button";

export const TablePagination = () => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <Button variant="outline" className="gap-2 text-sm" disabled>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/19eb941d8ad8ecd73eaa8cb1fad04f1aee419a42ef1fac0b8cef3db07c7a61d2"
          alt=""
          className="h-4 w-4"
        />
        Précedent
      </Button>

      <div className="flex gap-1">
        {[1, 2, 3, "...", 65, 66].map((page, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "ghost"}
            size="sm"
            className="min-w-9 px-3"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button variant="outline" className="gap-2 text-sm">
        Suivant
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/3ad306a399965ea84461d24576f11f14a76514607ba07c1f18158d6a5665c090"
          alt=""
          className="h-4 w-4"
        />
      </Button>
    </div>
  );
};
