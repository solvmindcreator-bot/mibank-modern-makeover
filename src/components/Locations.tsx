import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { BilumPattern } from "./TribalPatterns";

const branches = [
  { name: "Port Moresby (Head Office)", address: "Section 68, Lot 12, Waigani Drive", phone: "325 8700", coords: "-9.4438,147.1803", type: "branch" },
  { name: "Boroko", address: "Boroko, NCD", phone: "325 8700", coords: "-9.4590,147.1920", type: "branch" },
  { name: "Lae", address: "2nd Street, Top Town, Lae", phone: "472 4844", coords: "-6.7333,147.0000", type: "branch" },
  { name: "Mt Hagen", address: "Hagen Drive, Mt Hagen", phone: "542 1077", coords: "-5.8600,144.2300", type: "branch" },
  { name: "Goroka", address: "Elizabeth Street, Goroka", phone: "532 3855", coords: "-6.0814,145.3870", type: "branch" },
  { name: "Kokopo", address: "Kokopo, East New Britain", phone: "982 9033", coords: "-4.3400,152.2700", type: "branch" },
  { name: "Madang", address: "Madang Town, Madang", phone: "422 1377", coords: "-5.2200,145.7960", type: "branch" },
  { name: "Wewak", address: "Wewak, East Sepik", phone: "456 2788", coords: "-3.9100,143.8600", type: "branch" },
  { name: "Kimbe", address: "Kimbe, West New Britain", phone: "983 5044", coords: "-5.5500,150.1400", type: "branch" },
  { name: "Buka", address: "Buka, AROB", phone: "973 9122", coords: "-5.4200,154.6700", type: "branch" },
  { name: "Kavieng", address: "Kavieng, New Ireland", phone: "984 2166", coords: "-2.5700,150.7900", type: "branch" },
  { name: "Kundiawa", address: "Kundiawa, Chimbu", phone: "735 1087", coords: "-6.0100,144.9700", type: "branch" },
  { name: "Mendi", address: "Mendi, Southern Highlands", phone: "549 1055", coords: "-6.1500,143.6500", type: "branch" },
  { name: "Alotau", address: "Alotau, Milne Bay", phone: "641 0233", coords: "-10.3100,150.4600", type: "branch" },
  { name: "Wabag", address: "Wabag, Enga", phone: "547 1259", coords: "-5.4900,143.7200", type: "branch" },
  { name: "Popondetta", address: "Popondetta, Oro Province", phone: "629 7266", coords: "-8.7700,148.2300", type: "branch" },
];

const Locations = () => {
  // Build Google Maps embed URL with markers for all branches
  const mapSrc = "https://www.mibank.com.pg/map_points/MiBankSites.html";

  return (
    <section id="locations" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Tribal background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04]">
        <BilumPattern />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark rounded-full text-sm font-semibold mb-4 tracking-wide">
            Our Locations
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Find MiBank <span className="text-gradient-gold">Near You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            With 16+ branches and many agents across Papua New Guinea, banking services are always within your reach.
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-card border-2 border-gold/20 mb-14"
        >
          {/* Tribal corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-2xl z-10" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-2xl z-10" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-2xl z-10" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-2xl z-10" />

          <iframe
            src={mapSrc}
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MiBank Locations across Papua New Guinea"
            className="w-full"
          />
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2.5 flex items-center gap-5 text-xs font-semibold border border-border shadow-md z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-[8px] font-black text-charcoal">Mi</span>
              <span className="text-foreground">Branches</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center text-[10px] font-black text-charcoal">A</span>
              <span className="text-foreground">Agents</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-muted-foreground flex items-center justify-center text-[10px] font-black text-white">T</span>
              <span className="text-foreground">Training</span>
            </div>
          </div>
        </motion.div>

        {/* Branch cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px -10px hsl(var(--gold) / 0.3)" }}
              className="bg-card rounded-xl p-5 border border-border hover:border-gold/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4 text-gold-dark" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight mb-1 group-hover:text-gold-dark transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-2">{branch.address}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Phone className="w-3 h-3 text-gold-dark" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-gradient-gold rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground"
        >
          <Clock className="w-6 h-6" />
          <p className="font-semibold text-center sm:text-left">
            Visit your nearest branch — Monday to Friday, 9:00am to 5:00pm
          </p>
          <a href="tel:16789" className="bg-charcoal/90 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-charcoal transition-colors">
            Call 16789
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
