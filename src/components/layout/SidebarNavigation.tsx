
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/84c0f6583009e81169e3098c4cbc52e8b8d572c74a7d4b284acc5378e9299e4b",
    label: "Inbox",
    path: "/inbox"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/1ae1bbfa947f07903fd1dd933dca52042fe5a952b72217e8da024ef1f9e0dde6",
    label: "Notifications",
    path: "/notifications"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/0e511aea444ba98bf19389f9e47021d39962f29fa318fb910ba93ae90c540a46",
    label: "Tableau de bord",
    path: "/dashboard"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/3ffadf1a9be169b51fd142dfc7d6ad03af30d44b946c101484af76761e6846d2",
    label: "Commandes",
    path: "/orders"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/4429faf67ef9aa145caf6c311927475d4664d35c063bd2649d901cdf69d3efee",
    label: "Clients",
    path: "/customers"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/208c86c88e0050453c06ef6b31ce5b02cc4278372ca696a9f8ae8ae0a7318b38",
    label: "Produits",
    path: "/products"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/0402bd11c8834084b3ec2981634a0a41/91426ce4fe260ffcaf5f57eb1af3999f8898bbea531112b2ae867fc68f9c2fe4",
    label: "Remises",
    path: "/discounts"
  },
];

export const SidebarNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="flex flex-col px-4 py-2">
      {navigationItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          className={`flex w-full items-center justify-start gap-3 px-4 py-2 mb-1 rounded-lg relative ${
            location.pathname === item.path ? "bg-blue-50" : ""
          }`}
          onClick={() => handleNavigation(item.path)}
        >
          <div className="flex items-center justify-center w-5 h-5">
            <img src={item.icon} alt="" className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium text-black">{item.label}</span>
          {location.pathname === item.path && (
            <div className="bg-blue-700 absolute flex w-0.5 h-5 left-0 rounded-full" />
          )}
        </Button>
      ))}
    </nav>
  );
};
