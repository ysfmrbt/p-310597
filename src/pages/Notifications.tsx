
import { Sidebar } from "@/components/layout/Sidebar";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellRing, ShoppingCart, Package, User, CreditCard, AlertTriangle } from "lucide-react";

const notifications = [
  { id: 1, type: "order", title: "Nouvelle commande reçue", description: "Commande #1234 de Marie Dubois", time: "Il y a 15 minutes", read: false },
  { id: 2, type: "delivery", title: "Colis expédié", description: "Commande #1230 a été expédiée", time: "Il y a 2 heures", read: false },
  { id: 3, type: "customer", title: "Nouveau client inscrit", description: "Jean Martin a créé un compte", time: "Il y a 3 heures", read: true },
  { id: 4, type: "payment", title: "Paiement reçu", description: "Paiement de €89.99 pour la commande #1228", time: "Il y a 5 heures", read: true },
  { id: 5, type: "alert", title: "Stock faible", description: "Le produit 'Chemise en lin' est presque épuisé", time: "Hier, 15:30", read: true },
  { id: 6, type: "order", title: "Commande annulée", description: "Commande #1225 a été annulée par le client", time: "Hier, 12:45", read: true },
  { id: 7, type: "payment", title: "Remboursement effectué", description: "Remboursement de €59.99 pour la commande #1220", time: "15/06, 10:15", read: true },
];

const getIcon = (type: string) => {
  switch (type) {
    case "order":
      return <ShoppingCart className="h-5 w-5 text-blue-500" />;
    case "delivery":
      return <Package className="h-5 w-5 text-green-500" />;
    case "customer":
      return <User className="h-5 w-5 text-purple-500" />;
    case "payment":
      return <CreditCard className="h-5 w-5 text-amber-500" />;
    case "alert":
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return <BellRing className="h-5 w-5 text-gray-500" />;
  }
};

const Notifications = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <PageBreadcrumb />
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <Button variant="outline">Marquer tout comme lu</Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="unread">Non lues</TabsTrigger>
            <TabsTrigger value="orders">Commandes</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 hover:bg-gray-50 flex items-start gap-4 ${!notification.read ? 'bg-blue-50' : ''}`}>
                      <div className="mt-0.5">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>{notification.title}</span>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                        {!notification.read && (
                          <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800">Non lu</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="unread">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {notifications.filter(n => !n.read).map((notification) => (
                    <div key={notification.id} className="p-4 hover:bg-gray-50 bg-blue-50 flex items-start gap-4">
                      <div className="mt-0.5">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold">{notification.title}</span>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                        <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800">Non lu</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {notifications.filter(n => n.type === 'order').map((notification) => (
                    <div key={notification.id} className={`p-4 hover:bg-gray-50 flex items-start gap-4 ${!notification.read ? 'bg-blue-50' : ''}`}>
                      <div className="mt-0.5">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>{notification.title}</span>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                        {!notification.read && (
                          <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800">Non lu</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payments">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {notifications.filter(n => n.type === 'payment').map((notification) => (
                    <div key={notification.id} className={`p-4 hover:bg-gray-50 flex items-start gap-4 ${!notification.read ? 'bg-blue-50' : ''}`}>
                      <div className="mt-0.5">
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>{notification.title}</span>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600">{notification.description}</p>
                        {!notification.read && (
                          <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-800">Non lu</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Notifications;
