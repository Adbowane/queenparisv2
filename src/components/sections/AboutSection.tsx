import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#cbb97b]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e2008] mb-4">
            À Propos de Queen Paris
          </h2>
          <p className="text-lg text-[#5f4c23] max-w-3xl mx-auto">
            Un salon convivial où douceur rime avec professionnalisme
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <img
              src="/Image/Queen_paris_Assets/Presentation/Presentation-2.jpg"
              alt="Salon Queen Paris"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <p className="text-[#3c3c1a] leading-relaxed">
              Situé dans le 3e arrondissement de Paris, le salon de manucure Queen Paris vous accueille
              du lundi au samedi, de 10h à 20h, dans le passage des Ménétriers, et le dimanche de 12h à 17h
              (arrêt station de métro Etienne Marcel).
            </p>
            <p className="text-[#3c3c1a] leading-relaxed">
              <strong className="text-[#2e2008]">Bin et Hélène</strong>, vos prothésistes ongulaires,
              font de Queen Paris un salon convivial où douceur rime avec professionnalisme.
              Très à l'écoute, elles savent quelle forme d'ongles s'adaptera à vos doigts,
              pour amincir vos mains ou apporter de la longueur à des doigts courts.
            </p>
            <p className="text-[#3c3c1a] leading-relaxed">
              Elles sont également très créatives. Que vous veniez pour une manucure avec vernis
              ou la pose de faux ongles, leurs palettes de couleurs permettent de jolies combinaisons
              pour faire de vos ongles des ongles uniques, comme vous.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-[#c89e4b] hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#c89e4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2e2008] mb-2">Créativité</h3>
              <p className="text-[#5f4c23]">
                Osez les motifs pour vous démarquer et attirer les regards sur vos mains
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#c89e4b] hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#c89e4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2e2008] mb-2">Inclusivité</h3>
              <p className="text-[#5f4c23]">
                Services pour hommes et femmes dans une ambiance conviviale
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#c89e4b] hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#c89e4b] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-[#2e2008] mb-2">Professionnalisme</h3>
              <p className="text-[#5f4c23]">
                Très à l'écoute pour adapter chaque prestation à vos besoins
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
