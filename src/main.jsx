import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { categories, galleryImages, leaders, services, stats, whyChoose } from './siteData.js';

const phone = '918278611911';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceFilter, setServiceFilter] = useState('all');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filteredServices = useMemo(
    () => (serviceFilter === 'all' ? services : services.filter((item) => item.category === serviceFilter)),
    [serviceFilter],
  );

  const filteredGallery = useMemo(
    () => (galleryFilter === 'all' ? galleryImages : galleryImages.filter((item) => item.category === galleryFilter)),
    [galleryFilter],
  );

  const whatsapp = (text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  function submitInquiry(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      '*New Inquiry - G.N. Welding Nimbahera*',
      '',
      `Name: ${form.get('name')}`,
      `Mobile: ${form.get('mobile')}`,
      `City: ${form.get('city')}`,
      `Service: ${form.get('service')}`,
      `Project Details: ${form.get('details')}`,
    ].join('\n');
    window.open(whatsapp(message), '_blank', 'noopener,noreferrer');
    event.currentTarget.reset();
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="G.N. Welding home">
          <span className="brand-mark">GN</span>
          <span>
            <strong>G.N. Welding</strong>
            <small>Nimbahera</small>
          </span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['Services', 'Gallery', 'Founder', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-call" href="tel:+918278611911">Call Now</a>
        </nav>
        <button className="menu-btn" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-media">
            <ImageSlider images={['/assets/categories/bandgadi1.jpg', '/assets/categories/bandgadi2.jpg']} alt="GN Welding vehicle work" />
          </div>
          <div className="hero-content">
            <span className="eyebrow">Professional Welding & Fabrication</span>
            <h1>DJ Vehicle, Band Vehicle और Custom Metal Work के Specialist.</h1>
            <p>
              Nimbahera में strong fabrication, clean finishing, custom body design, gates, railings,
              aluminum work और industrial structures के लिए trusted workshop.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={whatsapp('Hello G.N. Welding, mujhe project quotation chahiye.')} target="_blank" rel="noreferrer">
                WhatsApp Quote
              </a>
              <a className="btn secondary" href="#gallery">Work Dekho</a>
            </div>
            <div className="stats-strip">
              {stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="founder">
          <div className="section-head">
            <span className="eyebrow">Founder & Management</span>
            <h2>Strong Leadership • Trusted Craftsmanship • Professional Workshop Management.</h2>
      
          </div>
          <div className="leader-grid">
            {leaders.map((leader) => (
              <article className="leader-card" key={leader.name}>
                <img src={leader.image} alt={leader.name} />
                <div>
                  <span className="role">{leader.role}</span>
                  <h3>{leader.name}</h3>
                  <p>{leader.description}</p>
                  <a href={whatsapp(`Hello ${leader.name}, mujhe G.N. Welding se kaam karwana hai.`)} target="_blank" rel="noreferrer">
                    WhatsApp Connect
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-head split">
            <div>
              <span className="eyebrow">Services</span>
              <h2>हर category में practical design, strong fabrication और clean finishing.</h2>
            </div>
            <p>Band gadi, main gate, railing और CNC sheet जैसे काम real workshop images के साथ दिखाए गए हैं.</p>
          </div>
          <FilterBar active={serviceFilter} onChange={setServiceFilter} />
          <div className="service-grid">
            {filteredServices.map((service) => (
              <article className="service-card" key={service.title}>
                <ImageSlider images={service.images} alt={service.title} />
                <div className="service-body">
                  <span>{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={whatsapp(`Hello G.N. Welding, mujhe ${service.title} ke liye quotation chahiye.`)} target="_blank" rel="noreferrer">
                    Quote Lo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section why">
          <div className="section-head centered">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Quality material, सही measurement और साफ finishing पर पूरा focus.</h2>
          </div>
          <div className="why-grid">
            {whyChoose.map((item) => (
              <article key={item.title}>
                <strong>{item.icon}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-head split">
            <div>
              <span className="eyebrow">Gallery</span>
              <h2>हमारे काम की real project gallery.</h2>
            </div>
            <p>Category filter से काम देखें और image click करके full preview open करें.</p>
          </div>
          <FilterBar active={galleryFilter} onChange={setGalleryFilter} />
          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <button className="gallery-item" type="button" key={`${item.title}-${index}`} onClick={() => setLightbox(index)}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-head centered">
            <span className="eyebrow">Work Process</span>
            <h2>Inquiry से delivery तक simple और clear process.</h2>
          </div>
          <div className="process-grid">
            {['Requirement', 'Measurement', 'Design', 'Fabrication', 'Finishing'].map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
                <p>हर step पर size, material और finishing confirm करके काम आगे बढ़ता है.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">Contact</span>
              <h2>अपना project detail भेजें, quotation WhatsApp पर मिल जाएगा.</h2>
              <p>Bapu Basti, Near Ladda Hospital, Nimbahera, Rajasthan</p>
              <a className="phone-link" href="tel:+918278611911">+91 82786 11911</a>
            </div>
            <form onSubmit={submitInquiry}>
              <input name="name" placeholder="आपका name" required />
              <input name="mobile" placeholder="Mobile number" required />
              <input name="city" placeholder="City" required />
              <select name="service" required defaultValue="">
                <option value="" disabled>Select service</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
              <textarea name="details" placeholder="Project details लिखें" rows="4" required />
              <button className="btn primary" type="submit">WhatsApp पर भेजें</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <strong>G.N. Welding Nimbahera</strong>
        <span>DJ Vehicle, Band Vehicle, Gates, Railings, Aluminum Work, Steel Fabrication</span>
      </footer>

      <div className="floating-actions">
        <a href={whatsapp('Hello G.N. Welding, mujhe quotation chahiye.')} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="tel:+918278611911">Call</a>
      </div>

      {lightbox !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button type="button" onClick={() => setLightbox(null)} aria-label="Close image">x</button>
          <img src={filteredGallery[lightbox].image} alt={filteredGallery[lightbox].title} />
          <strong>{filteredGallery[lightbox].title}</strong>
        </div>
      )}
    </>
  );
}

function FilterBar({ active, onChange }) {
  return (
    <div className="filter-bar">
      <button className={active === 'all' ? 'active' : ''} type="button" onClick={() => onChange('all')}>All</button>
      {categories.map((category) => (
        <button
          className={active === category.id ? 'active' : ''}
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0);
  const safeImages = images?.length ? images : ['/assets/categories/dj-vehicle.svg'];
  const hasSlider = safeImages.length > 1;

  function move(direction) {
    setIndex((current) => (current + direction + safeImages.length) % safeImages.length);
  }

  return (
    <div className="image-slider">
      <img src={safeImages[index]} alt={alt} />
      {hasSlider && (
        <>
          <button className="slider-arrow prev" type="button" onClick={() => move(-1)} aria-label="Previous image">
            &lt;
          </button>
          <button className="slider-arrow next" type="button" onClick={() => move(1)} aria-label="Next image">
            &gt;
          </button>
          <div className="slider-dots" aria-label="Image slider dots">
            {safeImages.map((image, dotIndex) => (
              <button
                className={dotIndex === index ? 'active' : ''}
                key={image}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Image ${dotIndex + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
