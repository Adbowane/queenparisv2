import { Instagram, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2e2008] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/Image/Queen_paris_Assets/logo.jpg"
              alt="Queen Paris Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-[#cbb97b] text-sm">
              Salon de manucure convivial où douceur rime avec professionnalisme
            </p>
          </div>

          <div>
            <h3 className="text-[#c89e4b] font-semibold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-[#cbb97b] hover:text-[#c89e4b] transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-[#cbb97b] hover:text-[#c89e4b] transition-colors">À Propos</a></li>
              <li><a href="#services" className="text-[#cbb97b] hover:text-[#c89e4b] transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-[#cbb97b] hover:text-[#c89e4b] transition-colors">Galerie</a></li>
              <li><a href="#pricing" className="text-[#cbb97b] hover:text-[#c89e4b] transition-colors">Tarifs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#c89e4b] font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="text-[#c89e4b] mt-1 flex-shrink-0" size={18} />
                <span className="text-[#cbb97b] text-sm">12 Rue Brantôme<br />75003 Paris<br />Passage des Ménétriers</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-[#c89e4b] flex-shrink-0" size={18} />
                <span className="text-[#cbb97b] text-sm">Métro: Etienne Marcel</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#c89e4b] font-semibold mb-4 text-lg">Horaires</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="text-[#c89e4b] mt-1 flex-shrink-0" size={18} />
                <div className="text-[#cbb97b] text-sm">
                  <p>Lun - Sam: 10h - 20h</p>
                  <p>Dimanche: 12h - 17h</p>
                </div>
              </li>
              <li className="mt-4">
                <a
                  href="https://www.instagram.com/queen_paris75003/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#cbb97b] hover:text-[#c89e4b] transition-colors"
                >
                  <Instagram size={20} />
                  <span className="text-sm">@queen_paris75003</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5f4c23] mt-8 pt-8 text-center">
          <p className="text-[#cbb97b] text-sm">
            &copy; {new Date().getFullYear()} Queen Paris. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
