// Allow native <marquee> in TSX as requested
declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: any;
    }
  }
}

type TechItem = { name: string; logo: string; invertDark?: boolean; scale?: number };

const items: TechItem[] = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertDark: true },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertDark: true },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", scale: 1.3 },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "XAMPP", logo: "https://cdn.simpleicons.org/xampp/F37623", scale: 1.2 },
];

const Tile = ({ name, logo, invertDark, scale }: TechItem) => (
  <div className="w-36 sm:w-40 mr-12 md:mr-16 inline-flex flex-col items-center">
    <div className="flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        style={{ transform: `scale(${scale ?? 1})` }}
        className={`w-11 h-10 md:w-14 md:h-14 object-contain ${invertDark ? 'filter invert brightness-150' : ''}`}
        onError={(e) => {
          const fallbackMap: Record<string, string> = {
            XAMPP: "https://upload.wikimedia.org/wikipedia/commons/7/78/XAMPP_logo.svg",
            Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          };
          const fallback = fallbackMap[name];
          if (fallback && (e.currentTarget as HTMLImageElement).src !== fallback) {
            (e.currentTarget as HTMLImageElement).src = fallback;
          }
        }}
      />
    </div>
    <div className="mt-3 text-sm md:text-base text-white text-center truncate w-full">{name}</div>
  </div>
);

const TechMarquee = () => {
  // Split into two unique sets, no duplicates across rows
  const topItems = items.filter((_, i) => i % 2 === 0);
  const bottomItems = items.filter((_, i) => i % 2 === 1);
  // Duplicate each list to create a perfect seamless loop
  const topRow = [...topItems, ...topItems];
  const bottomRow = [...bottomItems, ...bottomItems];
  return (
    <section className="py-16 md:py-30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-6">
          <h2 className="text-4xl md:text-5xl font-bold">
           Technologies <span className="text-gradient">we work with</span> 
           <br />
           <br />
           <br />

          </h2>
        </div>

        {/* Seamless, synced rows */}
        <div className="rounded-xl p-2 space-y-28">
          {/* Upper: right -> left */}
          <div className="overflow-hidden">
            <div
              className="flex items-center whitespace-nowrap"
              style={{
                animation: `marquee-left 28s linear infinite`,
              }}
            >
              {topRow.map((t, i) => (
                <Tile key={`top-${i}`} name={t.name} logo={t.logo} invertDark={t.invertDark} scale={t.scale} />
              ))}
            </div>
          </div>

          {/* Lower: left -> right */}
          <div className="overflow-hidden">
            <div
              className="flex items-center whitespace-nowrap"
              style={{
                animation: `marquee-right 28s linear infinite`,
              }}
            >
              {bottomRow.map((t, i) => (
                <Tile key={`bottom-${i}`} name={t.name} logo={t.logo} invertDark={t.invertDark} scale={t.scale} />
              ))}
            </div>
          </div>
        </div>

        {/* Keyframes for seamless marquee */}
        <style>
          {`
            @keyframes marquee-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default TechMarquee;
