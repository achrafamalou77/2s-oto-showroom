'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = `*Nouveau Lead Contact Website*\n\n*Nom:* ${formData.name}\n*Téléphone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const waUrl = `https://wa.me/213550599437?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');

    // Reset form optionally, though they jump to WA
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <main style={{ padding: '120px 0 80px', background: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>

        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--color-dark)', marginBottom: '16px', fontWeight: '800', letterSpacing: '-1px' }}>
            Contactez-nous
          </h1>
          <p style={{ color: 'var(--color-text)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Une question ? Un véhicule vous intéresse ? Notre équipe est prête à vous accompagner.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          background: '#fff',
          borderRadius: '24px',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden'
        }}>

          {/* Left Column - Details & Map */}
          <div style={{ padding: '48px', background: 'var(--color-dark)', color: '#fff' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '32px', fontWeight: '600' }}>Nos Coordonnées</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Adresse</strong>
                <p style={{ fontSize: '1.1rem' }}>Rue Nationale N° 5 Réghaïa<br />16036 Algiers, Algeria</p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Téléphone / WhatsApp</strong>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-primary)' }}>0550 59 94 37</p>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-primary)' }}>0784 09 57 23</p>
              </div>

              <div>
                <strong style={{ display: 'block', color: 'var(--color-gray)', fontSize: '0.9rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</strong>
                <p style={{ fontSize: '1.1rem' }}>contact@sarl2sauto.dz</p>
                <p style={{ fontSize: '1.1rem' }}>ssauto.alg@gmail.com</p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.9758233273933!2d3.36106017572543!3d36.72314187226924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e5d3e77e62b67%3A0x890df236e8806741!2s2s%20oto!5e0!3m2!1sen!2sdz!4v1775731596873!5m2!1sen!2sdz"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de 2s oto"
            />
          </div>

          {/* Right Column - Form */}
          <div style={{ padding: '48px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-dark)', marginBottom: '8px', fontWeight: '600' }}>Envoyez un message</h3>
            <p style={{ color: 'var(--color-text)', marginBottom: '32px' }}>Nous répondons généralement en quelques minutes via WhatsApp.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: 'var(--color-dark)' }}>Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)' }}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: 'var(--color-dark)' }}>Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)' }}
                  placeholder="+213 555 000 000"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', color: 'var(--color-dark)' }}>Votre Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg)', resize: 'vertical' }}
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '1.1rem', marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Discuter sur WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
