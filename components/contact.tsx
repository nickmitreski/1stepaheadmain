export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container grid gap-20 md:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4 text-2xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Let's Connect
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We’re here to answer your questions, explore opportunities, and discuss your next idea. Whether you're
            looking for a partnership or need program details, our team is ready to help.
          </p>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Contact Details</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li>
                <strong>Email:</strong> <a href="mailto:hello@1stepahead.au" className="underline">hello@1stepahead.au</a>
              </li>
              <li>
                <strong>Instagram:</strong> <a href="https://instagram.com/1stepahead.au" className="underline" target="_blank" rel="noreferrer">@1stepahead.au</a>
              </li>
              <li>
                <strong>Based in:</strong> VIC — available Australia-wide online
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-2xl border shadow-lg bg-background">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <label className="block text-sm font-medium">First Name</label>
                <input className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="First Name" required />
              </div>
              <div className="space-y-2 text-left">
                <label className="block text-sm font-medium">Last Name</label>
                <input className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Last Name" required />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label className="block text-sm font-medium">Email Address</label>
              <input type="email" className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Email Address" required />
            </div>
            <div className="space-y-2 text-left">
              <label className="block text-sm font-medium">Subject</label>
              <input className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Subject" required />
            </div>
            <div className="space-y-2 text-left">
              <label className="block text-sm font-medium">Message</label>
              <textarea rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2" placeholder="Write your message here..." required />
            </div>
            <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-primary-foreground text-lg font-medium shadow transition-colors hover:bg-primary/90 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
