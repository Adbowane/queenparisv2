import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#2e2008]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact & Réservation
          </h2>
          <p className="text-lg text-[#cbb97b] max-w-3xl mx-auto">
            Prenez rendez-vous ou contactez-nous pour toute question
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#2e2008] text-2xl">Informations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#c89e4b] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-[#2e2008] mb-1">Adresse</h3>
                  <p className="text-[#5f4c23]">
                    12 Rue Brantôme<br />
                    75003 Paris<br />
                    Passage des Ménétriers<br />
                    Métro: Etienne Marcel (Ligne 4)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#c89e4b] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-[#2e2008] mb-1">Horaires</h3>
                  <p className="text-[#5f4c23]">
                    Lundi - Samedi: 10h - 20h<br />
                    Dimanche: 12h - 17h<br />
                    Réservation 24h/24 et 7j/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="text-[#c89e4b] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-[#2e2008] mb-1">Suivez-nous</h3>
                  <a
                    href="https://www.instagram.com/queen_paris75003/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c89e4b] hover:text-[#7c7c14] transition-colors"
                  >
                    @queen_paris75003
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5938!2d2.3485!3d48.8644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b339%3A0x40b82c3688c9460!2s12%20Rue%20Brant%C3%B4me%2C%2075003%20Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#2e2008] text-2xl">Contactez-nous</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#2e2008] font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#cbb97b]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#2e2008] font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-[#cbb97b]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#2e2008] font-medium mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-[#cbb97b]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#2e2008] font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-[#cbb97b]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#c89e4b] hover:bg-[#7c7c14] text-white text-lg"
                >
                  Envoyer le message
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[#5f4c23] text-sm mb-3">
                  Ou réservez directement en ligne
                </p>
                <Button
                  className="w-full bg-[#2e2008] hover:bg-[#040404] text-white"
                  asChild
                >
                  <a href="https://www.planity.com/queen-paris-75003-paris" target="_blank" rel="noopener noreferrer">
                    Réserver sur Planity
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
