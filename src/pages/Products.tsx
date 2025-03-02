
import { Sidebar } from "@/components/layout/Sidebar";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter } from "lucide-react";

const products = [
  { id: "PRD-1001", name: "Chemise en lin", category: "Chemises", price: "€79.99", stock: 24, status: "in-stock" },
  { id: "PRD-1002", name: "Pantalon chino", category: "Pantalons", price: "€59.99", stock: 15, status: "in-stock" },
  { id: "PRD-1003", name: "Robe d'été", category: "Robes", price: "€89.99", stock: 7, status: "low-stock" },
  { id: "PRD-1004", name: "Cravate en soie", category: "Accessoires", price: "€39.99", stock: 32, status: "in-stock" },
  { id: "PRD-1005", name: "Veste en cuir", category: "Vestes", price: "€199.99", stock: 0, status: "out-of-stock" },
  { id: "PRD-1006", name: "Écharpe en laine", category: "Accessoires", price: "€49.99", stock: 18, status: "in-stock" },
  { id: "PRD-1007", name: "Jeans slim", category: "Pantalons", price: "€69.99", stock: 5, status: "low-stock" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "in-stock":
      return "bg-green-100 text-green-800";
    case "low-stock":
      return "bg-amber-100 text-amber-800";
    case "out-of-stock":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "in-stock":
      return "En stock";
    case "low-stock":
      return "Stock faible";
    case "out-of-stock":
      return "Rupture";
    default:
      return status;
  }
};

const Products = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <PageBreadcrumb />
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Produits</h1>
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
              Nouveau produit
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Produit</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(product.status)} variant="outline">
                        {getStatusLabel(product.status)}
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

export default Products;
