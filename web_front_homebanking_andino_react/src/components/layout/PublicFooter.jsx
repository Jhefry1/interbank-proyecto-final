import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import Logo from '../ui/Logo.jsx'

const COLS = [
  {
    title: 'Productos',
    links: ['Cuenta de Ahorros', 'Cuenta Sueldo', 'Crédito de Consumo', 'Crédito Microempresa', 'Tarjeta de Débito'],
  },
  {
    title: 'Interbank',
    links: ['Nosotros', 'Trabaja con nosotros', 'Memoria anual', 'Sostenibilidad', 'Sala de prensa'],
  },
  {
    title: 'Ayuda',
    links: ['Centro de ayuda', 'Ubícanos', 'Reclamos', 'Transparencia', 'Tasas y tarifas'],
  },
]

export default function PublicFooter() {
  return (
    <footer className="lp-footer" id="footer">
      <div className="lp-footer-inner">
        <div className="lp-footer-brand">
          <Logo size={40} variant="light" subtitle="BANCA DIGITAL" />
          <p>© Copyright 2026 - Todos los derechos reservados
Banco Internacional del Perú S.A.A. 
Av. Carlos Villarán N° 140, La Victoria, Lima, Perú 
RUC: 20100053455.</p>
          <div className="lp-social">
            <a href="#footer" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#footer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#footer" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        {COLS.map((c) => (
          <div className="lp-footer-col" key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map((l) => (
                <li key={l}><a href="#footer">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lp-footer-col">
          <h4>Contacto</h4>
          <ul className="lp-contact">
            <li><Phone size={15} /> Banca telefónica: (01) 311-9000</li>
            <li><Mail size={15} /> contacto@interbank.pe</li>
            <li><MapPin size={15} /> Av. Carlos Villarán N° 140, Lima</li>
          </ul>
        </div>
      </div>     
    </footer>
  )
}
