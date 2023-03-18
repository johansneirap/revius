const FeatureCard = () => {
  return (
    <div className="flex flex-col md:px-6 border-r-gray-200 md:border-r-[1px] last:border-r-0">
      <h4 className="text-xl font-semibold md:text-2xl">Feature Card</h4>
      <p className="text-gray-800 font-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, vero
        est?
      </p>
    </div>
  )
}

export default function FeatureCards() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center gap-8 pt-10 px-6 py-8 md:pt-16 md:px-24">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </section>
  )
}
