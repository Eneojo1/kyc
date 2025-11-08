// components/Hero.tsx
interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center bg-gray-100">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
      </div>
    </section>
  );
}
