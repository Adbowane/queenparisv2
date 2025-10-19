import { useState } from 'react';
import pricingData from '@/Data/Pricing.json';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Beauté');

  const categories = Object.keys(pricingData.prestations);

  return (
    <section id="pricing" className="py-20 bg-[#2e2008]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Tarifs
          </h2>
          <p className="text-lg text-[#cbb97b] max-w-3xl mx-auto">
            Transparence et qualité pour tous vos soins
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-[#c89e4b] text-2xl">★</span>
            <span className="text-white text-xl font-semibold">{pricingData.note}/5</span>
            <span className="text-[#cbb97b]">sur Planity</span>
          </div>
        </div>

        <Tabs defaultValue="Beauté" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 bg-[#3c3024] h-auto p-2 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-[#c89e4b] data-[state=active]:text-white text-[#cbb97b] whitespace-normal h-auto py-2"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingData.prestations[category as keyof typeof pricingData.prestations].map((service, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-[#2e2008] text-lg">{service.nom}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#5f4c23]">⏱️ {service.durée}</span>
                        <span className="text-[#c89e4b] font-bold text-xl">{service.tarif}</span>
                      </div>
                      <Button
                        className="w-full bg-[#c89e4b] hover:bg-[#7c7c14] text-white"
                        asChild
                      >
                        <a href="#contact">Réserver</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-[#cbb97b] mb-4">
            Paiement sur place • Réservation gratuite 24h/24 et 7j/7
          </p>
          <Button
            size="lg"
            className="bg-[#c89e4b] hover:bg-[#7c7c14] text-white text-lg px-8"
            asChild
          >
            <a href="#contact">Prendre Rendez-vous</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
