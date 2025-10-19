import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/Image/Queen_paris_Assets/Presentation/Presentation-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Queen Paris
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-[#cbb97b]">
          Vous rêvez d'ongles sublimes qui magnifieront vos mains ?
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Confiez vos dix doigts à l'équipe de Queen Paris
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#c89e4b] hover:bg-[#7c7c14] text-white text-lg px-8"
            asChild
          >
            <a href="#contact">Réserver en Ligne</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2e2008] text-lg px-8"
            asChild
          >
            <a href="#services">Découvrir nos Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
