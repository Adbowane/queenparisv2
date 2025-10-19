import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Extensions d\'Ongles',
      description: 'Pose complète résine, gel acrylique ou gel liquide avec vernis semi-permanent',
      image: '/Image/Queen_paris_Assets/Services/Service-1.jpg',
      price: 'À partir de 50€',
    },
    {
      title: 'Extension Chablons',
      description: 'Pose chablons avec baby boomer ou french pour un effet élégant',
      image: '/Image/Queen_paris_Assets/Services/Service-2.jpg',
      price: 'À partir de 65€',
    },
    {
      title: 'Dip Powder',
      description: 'Technique moderne pour des ongles naturels renforcés et durables',
      image: '/Image/Queen_paris_Assets/Services/Service-3.jpg',
      price: 'À partir de 50€',
    },
    {
      title: 'Gel-X',
      description: 'Extensions légères avec vernis semi-permanent, french ou baby boomer',
      image: '/Image/Queen_paris_Assets/Services/Service-4.jpg',
      price: 'À partir de 50€',
    },
    {
      title: 'Beauté des Mains',
      description: 'Soin complet avec ou sans vernis, semi-permanent disponible',
      video: '/Image/Queen_paris_Assets/Services/Service-5.mp4',
      price: 'À partir de 16€',
    },
    {
      title: 'Services pour Messieurs',
      description: 'Beauté des mains et pieds adaptée aux hommes',
      video: '/Image/Queen_paris_Assets/Services/Service-13.mp4',
      price: 'À partir de 16€',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#2e2008]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-[#cbb97b] max-w-3xl mx-auto">
            Des prestations sur-mesure pour sublimer vos mains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={service.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-[#2e2008]">{service.title}</CardTitle>
                <CardDescription className="text-[#5f4c23]">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-[#c89e4b] font-semibold text-lg">{service.price}</span>
                  <Button
                    size="sm"
                    className="bg-[#c89e4b] hover:bg-[#7c7c14] text-white"
                    asChild
                  >
                    <a href="#pricing">Voir Tarifs</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#c89e4b] hover:bg-[#7c7c14] text-white text-lg px-8"
            asChild
          >
            <a href="#pricing">Voir Tous les Tarifs</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
