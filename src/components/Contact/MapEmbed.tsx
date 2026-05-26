export function MapEmbed() {
  return (
    <div className="contact-map mt-8 md:mt-10">
      <iframe
        title="Map to The Oxford Academy, Edamal Street, Theni"
        src="https://maps.google.com/maps?q=Edamal+Street+Theni+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="290"
        style={{ border: 0, display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
