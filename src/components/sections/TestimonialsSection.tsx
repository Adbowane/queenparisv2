import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: 'image',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-1.jpg',
    },
    {
      type: 'image',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-2.jpg',
    },
    {
      type: 'image',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-3.jpg',
    },
    {
      type: 'image',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-4.jpg',
    },
    {
      type: 'image',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-5.jpg',
    },
    {
      type: 'image',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-6.jpg',
    },
    {
      type: 'video',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-8.mp4',
    },
    {
      type: 'video',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-9.mp4',
    },
    {
      type: 'video',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-13.mp4',
    },
    {
      type: 'video',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-16.mp4',
    },
    {
      type: 'video',
      src: '/Image/Queen_paris_Assets/Testimonials/Testimonial-17.mp4',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-[#cbb97b]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2e2008] mb-4">
            Témoignages Clients
          </h2>
          <p className="text-lg text-[#5f4c23] max-w-3xl mx-auto mb-4">
            Ce que nos clients disent de nous
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#c89e4b] text-3xl">★★★★★</span>
            <span className="text-[#2e2008] text-2xl font-bold">4.6/5</span>
            <span className="text-[#5f4c23]">(142 avis sur Planity)</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-2 border-[#c89e4b]">
                  <CardContent className="p-0">
                    {testimonial.type === 'image' ? (
                      <img
                        src={testimonial.src}
                        alt={`Témoignage client ${index + 1}`}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    ) : (
                      <video
                        src={testimonial.src}
                        controls
                        playsInline
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="mt-12 text-center">
          <p className="text-[#5f4c23] text-lg mb-4">
            Nos clientes adorent leur expérience chez Queen Paris !
          </p>
          <a
            href="https://www.instagram.com/queen_paris75003/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#c89e4b] hover:bg-[#7c7c14] text-white rounded-md font-semibold transition-colors"
          >
            Voir plus sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
