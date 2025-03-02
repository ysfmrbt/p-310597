
import { Sidebar } from "@/components/layout/Sidebar";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter } from "lucide-react";

const customers = [
  { id: "1", name: "Marie Dubois", email: "marie@example.com", orders: 12, spent: "€1,234.00", lastOrder: "16/05/2023" },
  { id: "2", name: "Jean Martin", email: "jean@example.com", orders: 8, spent: "€876.50", lastOrder: "12/05/2023" },
  { id: "3", name: "Lucie Bernard", email: "lucie@example.com", orders: 5, spent: "€432.75", lastOrder: "09/05/2023" },
  { id: "4", name: "Thomas Petit", email: "thomas@example.com", orders: 3, spent: "€210.25", lastOrder: "02/05/2023" },
  { id: "5", name: "Sophie Leroy", email: "sophie@example.com", orders: 15, spent: "€1,567.00", lastOrder: "28/04/2023" },
  { id: "6", name: "Pierre Moreau", email: "pierre@example.com", orders: 7, spent: "€765.30", lastOrder: "25/04/2023" },
  { id: "7", name: "Camille Roux", email: "camille@example.com", orders: 10, spent: "€980.45", lastOrder: "20/04/2023" },
];

const Customers = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <PageBreadcrumb />
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Clients</h1>
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
              Nouveau client
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Commandes</TableHead>
                  <TableHead>Dépensé</TableHead>
                  <TableHead>Dernière commande</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{customer.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.spent}</TableCell>
                    <TableCell>{customer.lastOrder}</TableCell>
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

export default Customers;
