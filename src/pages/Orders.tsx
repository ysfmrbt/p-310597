
import { Sidebar } from "@/components/layout/Sidebar";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Plus } from "lucide-react";

const orders = [
  { id: "ORD-1234", customer: "Marie Dubois", date: "05/06/2023", status: "completed", total: "€129.99" },
  { id: "ORD-1235", customer: "Jean Martin", date: "05/06/2023", status: "processing", total: "€59.99" },
  { id: "ORD-1236", customer: "Lucie Bernard", date: "04/06/2023", status: "completed", total: "€89.99" },
  { id: "ORD-1237", customer: "Thomas Petit", date: "03/06/2023", status: "canceled", total: "€44.99" },
  { id: "ORD-1238", customer: "Sophie Leroy", date: "02/06/2023", status: "completed", total: "€149.99" },
  { id: "ORD-1239", customer: "Pierre Moreau", date: "01/06/2023", status: "processing", total: "€79.99" },
  { id: "ORD-1240", customer: "Camille Roux", date: "31/05/2023", status: "completed", total: "€109.99" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "canceled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Orders = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <PageBreadcrumb />
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Commandes</h1>
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
              Nouvelle commande
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Commande</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)} variant="outline">
                        {order.status === "completed" ? "Terminée" : 
                         order.status === "processing" ? "En cours" : "Annulée"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">{order.total}</TableCell>
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

export default Orders;
