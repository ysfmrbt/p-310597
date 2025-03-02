
import { Sidebar } from "@/components/layout/Sidebar";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";

const discounts = [
  { id: "PROMO10", name: "Réduction 10%", type: "percentage", value: "10%", usageLimit: 100, used: 45, status: "active", expiry: "31/07/2023" },
  { id: "SUMMER23", name: "Promo été", type: "percentage", value: "15%", usageLimit: 200, used: 89, status: "active", expiry: "31/08/2023" },
  { id: "WELCOME", name: "Bienvenue", type: "fixed", value: "€10.00", usageLimit: 500, used: 321, status: "active", expiry: "31/12/2023" },
  { id: "FLASH50", name: "Vente Flash", type: "percentage", value: "50%", usageLimit: 50, used: 50, status: "expired", expiry: "15/05/2023" },
  { id: "FREESHIP", name: "Livraison gratuite", type: "shipping", value: "€0.00", usageLimit: 1000, used: 634, status: "active", expiry: "31/12/2023" },
  { id: "BLACK23", name: "Black Friday", type: "percentage", value: "30%", usageLimit: 300, used: 0, status: "scheduled", expiry: "27/11/2023" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800";
    case "expired":
      return "bg-red-100 text-red-800";
    case "scheduled":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "active":
      return "Actif";
    case "expired":
      return "Expiré";
    case "scheduled":
      return "Planifié";
    default:
      return status;
  }
};

const Discounts = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <PageBreadcrumb />
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Remises</h1>
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-full bg-white pl-8 md:w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nouvelle remise
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Valeur</TableHead>
                  <TableHead>Utilisation</TableHead>
                  <TableHead>Expiration</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {discounts.map((discount) => (
                  <TableRow key={discount.id}>
                    <TableCell className="font-medium">{discount.id}</TableCell>
                    <TableCell>{discount.name}</TableCell>
                    <TableCell>
                      {discount.type === "percentage" ? "Pourcentage" : 
                      discount.type === "fixed" ? "Montant fixe" : "Livraison"}
                    </TableCell>
                    <TableCell>{discount.value}</TableCell>
                    <TableCell>{discount.used}/{discount.usageLimit}</TableCell>
                    <TableCell>{discount.expiry}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(discount.status)} variant="outline">
                        {getStatusLabel(discount.status)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Discounts;
