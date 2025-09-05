export default function ValuesWhite() {
  return (
    <section id="values-white" className="border-t bg-white">
      <div className="container py-24 md:py-32 grid gap-8 md:grid-cols-2 items-center">
        <div className="order-1 md:order-1 flex justify-center md:justify-start">
          <img src="/images/students2.png" alt="Values" className="max-w-full h-auto rounded-[32px]" />
        </div>
        <div className="order-2 md:order-2 text-left">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-6">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-foreground text-lg">
            <li><strong>Empower</strong> – through education and self-awareness</li>
            <li><strong>Trust</strong> – in the way we teach, lead, and support</li>
            <li><strong>Growth</strong> – as lifelong learners, individuals, and communities</li>
            <li><strong>Motivation</strong> – to take action and stay 1 step ahead</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


