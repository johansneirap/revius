import Image from 'next/image'

export default function CallToAction() {
  return (
    <section className="md:pt-20 pt-2 md:pb-40 pb-[20px] px-6 md:px-32 bg-gradient-to-r from-blue-700 to-blue-500 text-white flex flex-col md:flex-row justify-between items-center rounded-bl-[100px]">
      <div className=" md:w-[600px]">
        <h2 className="text-4xl md:text-6xl font-bold">
          Revius.cl coming soon!
        </h2>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quasi
          cumque molestias veritatis magnam ipsum facilis explicabo delectus
          suscipit! Asperiores animi quam illo, voluptatibus aut repudiandae quo
          officia natus dignissimos?
        </p>
        <div className="flex justify-start py-8 gap-4">
          <button className="rounded-full bg-violet-500 px-7 py-2">CTA</button>
          <button className="rounded-full bg-cyan-400 px-7 py-2">CTA 2</button>
        </div>
      </div>
      <Image
        src="/icons/undraw_feedback.svg"
        alt="Feedback"
        width={400}
        height={400}
        className="md:absolute md:top-[150px] md:left-[860px]"
      />
    </section>
  )
}
