import {  useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, X, Twitter, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, success: false });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (errors[name]) setErrors((s) => ({ ...s, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus({ submitting: true, success: false });
    // simulate async submission (replace with real API call)
    await new Promise((r) => setTimeout(r, 900));
    setStatus({ submitting: false, success: true });
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus({ submitting: false, success: false }), 4000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact us</h1>
      <p className="text-gray-500 mb-6">Have a question or want to work together? Fill out the form and we'll get back to you shortly.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Info column */}
            <aside className="rounded-xl bg-linear-to-b from-indigo-600 to-indigo-500 p-6 text-white shadow">
          <h2 className="text-xl font-semibold mb-4">Our contact</h2>       
          <div className="flex items-start gap-3 mb-3">
            <Mail className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-indigo-100">support@example.com</div>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <Phone className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-sm text-indigo-100">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Address</div>
              <div className="text-sm text-indigo-100">123 React Ave, Web City</div>
            </div>
          </div>

          {/* Small embedded map */}
          {/* <div className="mt-4 rounded overflow-hidden shadow-sm relative">
            {!mapLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}
            <iframe
              title="Company location"
              src="https://www.google.com/maps?q=123+React+Ave+Web+City&output=embed"
              width="100%"
              height="200"
              loading="lazy"
              onLoad={() => setMapLoaded(true)}
              onError={() => setMapLoaded(true)}
              className={`w-full h-48 border-0 transition-opacity duration-500 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div> */}

          <div className="mt-6">
            <h3 className="font-medium mb-2">Office hours</h3>
            <p className="text-sm text-indigo-100">Mon — Fri: 9:00AM — 6:00PM</p>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Follow us</h3>
            <div className="flex gap-3 text-indigo-100">
              <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yourcompany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Form column */}
        <section className="bg-white rounded-xl shadow p-6">
          {status.success && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 p-3 rounded mb-4">
              <CheckCircle className="w-5 h-5" />
              <div className="flex-1">Thanks! Your message was sent successfully.</div>
              <button onClick={() => setStatus({ ...status, success: false })} className="text-green-700"><X className="w-4 h-4" /></button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status.submitting}
                  className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${errors.name ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"}`}
                  placeholder="Your name"
                />
                {errors?.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>} 
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status.submitting}
                  className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${errors.email ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"}`}
                  placeholder="you@example.com"
                  type="email"
                />
                {errors?.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>} 
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                disabled={status.submitting}
                className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${errors.subject ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"}`}
                placeholder="Brief subject"
              />
              {errors?.subject && <p className="text-sm text-red-600 mt-1">{errors.subject}</p>} 
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                disabled={status.submitting}
                className={`w-full min-h-[120px] rounded-md border px-3 py-2 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${errors.message ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200"}`}
                placeholder="Tell us a bit about your inquiry"
              />
              {errors?.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>} 
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status.submitting}
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition cursor-pointer text-white px-4 py-2 rounded-md shadow"
                aria-busy={status?.submitting}
              >
                {status?.submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 " />
                    <span >Send message</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setErrors({}); }}
                className="text-sm bg-red-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-red-700 active:scale-95"
              >
                Reset
              </button>

            </div>
              <div className="w-full text-center mt-2 text-sm text-gray-500">We respond in 1–2 business days.</div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;