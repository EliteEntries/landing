import Image from "next/image";

function Logos() {
  return (
    <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-[var(--primary)] text-center">Our Partners</h2>
      {/* Location Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
        <Image
          src="/logos/locations/crunch.png"
          alt="Crunch Fitness"
          width={128}
          height={48}
          className="w-32 object-contain"
        />
        <Image
          src="/logos/locations/LA.png"
          alt="LA Fitness"
          width={128}
          height={48}
          className="w-32 object-contain"
        />
        <Image
          src="/logos/locations/Synergy.png"
          alt="Synergy Fitness"
          width={128}
          height={48}
          className="w-32 object-contain"
        />
        <Image
          src="/logos/locations/xsport.png"
          alt="XSport Fitness"
          width={128}
          height={48}
          className="w-32 object-contain"
        />
      </div>
      {/* Product Logos Row */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        <Image
          src="/logos/bearbalanced.png"
          alt="Bear Balanced"
          width={80}
          height={80}
          className="w-20 object-contain"
        />
        <Image
          src="/logos/dreamrecovery.png"
          alt="Dream Recovery"
          width={80}
          height={80}
          className="w-20 object-contain"
        />
        <Image
          src="/logos/muscletech.png"
          alt="Muscletech"
          width={80}
          height={80}
          className="w-20 object-contain"
        />
        <Image
          src="/logos/nodpod.png"
          alt="Nodpod"
          width={80}
          height={80}
          className="w-20 object-contain"
        />
        <Image
          src="/logos/organifi.png"
          alt="Organifi"
          width={80}
          height={80}
          className="w-20 object-contain"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-6 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start">
        <Logos />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-[var(--primary)] text-center">About Us</h2>
          <p className="mb-4">
            A specialty retail partner that connects high-demand consumer products with fitness and wellness environments. We work directly with gyms such as LA Fitness, Crunch Fitness, and Synergy Fitness to supply curated merchandise that aligns with their brand and offers members convenient access to premium goods.
          </p>
          <p className="mb-4">
            Our focus is on helping gyms generate ancillary revenue through turnkey retail solutions—eliminating the need for internal product research, sourcing, or fulfillment. We manage the entire supply chain, from procurement to delivery, ensuring quality control and consistency.
          </p>
          <p className="mb-4">
            Our distribution model is optimized for physical fitness spaces, where we maintain strong relationships and tailored placements to meet the unique needs of each partner location.
          </p>
          <p>
            By renting retail space or fully managing the retail footprint as a third-party provider, we allow gyms to capitalize on their foot traffic and member base without taking on additional workload or operational risk. Our turnkey model handles product sourcing, restocking, and display, delivering passive ancillary income with zero lift from internal staff.
          </p>
        </div>
      </div>
    </section>
  );
}