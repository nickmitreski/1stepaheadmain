export default function Team() {
  return (
    <section id="team" className="py-20 md:py-24 bg-[#69dfa6]">
      <div className="container max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="text-left">
            <h2 className="text-black mb-8">Our Team</h2>
            <div className="space-y-6 text-black">
              <p className="text-lg">Our programs are co-facilitated by experts in:</p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  Financial literacy and tax systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  Youth mental health and psychology
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                  Education and behaviour change
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                We create safe, engaging spaces where young people can learn without judgement and walk away with real
                tools for life.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md h-80 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center" aria-label="Team image placeholder">
              <span className="text-white/80 text-sm">Team Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


