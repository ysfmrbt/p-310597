
import { Sidebar } from "@/components/layout/Sidebar";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Edit } from "lucide-react";

const messages = [
  { id: 1, sender: "Marie Dubois", avatar: null, subject: "Question sur ma commande", preview: "Bonjour, je souhaiterais savoir quand ma commande sera livrée...", time: "14:25", unread: true },
  { id: 2, sender: "Jean Martin", avatar: null, subject: "Retour produit", preview: "J'aimerais retourner le produit que j'ai reçu car il ne correspond pas...", time: "12:40", unread: true },
  { id: 3, sender: "Support technique", avatar: null, subject: "Mise à jour système", preview: "Une mise à jour du système est prévue ce weekend. Veuillez noter que...", time: "Hier", unread: false },
  { id: 4, sender: "Thomas Petit", avatar: null, subject: "Demande d'information", preview: "Bonjour, je souhaiterais avoir plus d'informations sur vos produits...", time: "Hier", unread: false },
  { id: 5, sender: "Lucie Bernard", avatar: null, subject: "Problème de paiement", preview: "J'ai rencontré un problème lors du paiement de ma commande...", time: "15/06", unread: false },
  { id: 6, sender: "Marketing", avatar: null, subject: "Nouvelle campagne", preview: "Voici les détails de notre prochaine campagne marketing...", time: "14/06", unread: false },
  { id: 7, sender: "Service client", avatar: null, subject: "Rappel procédure", preview: "Nous vous rappelons la procédure à suivre pour les retours...", time: "13/06", unread: false },
];

const Inbox = () => {
  return (
    <div className="flex min-h-screen w-full bg-zinc-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <PageBreadcrumb />
        
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-full bg-white pl-8 md:w-64"
              />
            </div>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Nouveau message
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {messages.map((message) => (
                <div key={message.id} className={`p-4 hover:bg-gray-50 cursor-pointer flex items-start gap-4 ${message.unread ? 'bg-blue-50' : ''}`}>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center">
                        <span className={`font-medium mr-2 ${message.unread ? 'font-semibold' : ''}`}>{message.sender}</span>
                        {message.unread && <Badge variant="secondary" className="bg-blue-100 text-blue-800">Nouveau</Badge>}
                      </div>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                    <h3 className={`text-sm ${message.unread ? 'font-semibold' : ''}`}>{message.subject}</h3>
                    <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Inbox;
