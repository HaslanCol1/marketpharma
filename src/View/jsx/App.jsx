import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../css/App.css';
import Cliente from '../Imagenes/cliente.png';
import Medicamentos from '../Imagenes/Medicamentos.jpg';
import Suplemento from '../Imagenes/Suplemento.jpg';
import Dermocosmetica from '../Imagenes/Dermatologico.jpg';
import Farmacia from '../Imagenes/Farmacia.jpg';
import Facebook from '../Imagenes/Facebook.png';
import Instagram from '../Imagenes/Instagram.png';
import Twitter from '../Imagenes/Twitter.png';
import Whatsapp from '../Imagenes/Whatsapp.png';
import FarmaciaHero from '../Imagenes/FarmaciaHero.jpg';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      {/* Hero Section */}
      <section 
  className="hero" 
  id="home"
  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${FarmaciaHero})` }}
>
  <div className="container">
    <div className="hero-content">
      <h1>TU SALUD EN LAS<br/>MEJORES MANOS</h1>
      <p>En MarketPharma encontrarás los mejores productos farmacéuticos y atención personalizada para el cuidado de tu salud.</p>
      <div className="hero-buttons">
        <Link to="/productos" className="btn btn-primary">Ver productos</Link>
      </div>
    </div>
  </div>
</section>
      
      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>Sobre Nosotros</h2>
          </div>
          <div className="about-content">
            <div className="about-image">
              <img src={Farmacia} alt="MarketPharma Interior" />
            </div>
            <div className="about-text">
              <h3>Comprometidos con tu bienestar desde 2010</h3>
              <p>MarketPharma nació con una visión clara: hacer que los medicamentos y productos de salud sean accesibles para todos, con un servicio de calidad y asesoría profesional.</p>
              <p>Contamos con un equipo de farmacéuticos altamente calificados listos para resolver tus dudas y brindarte la mejor orientación en tus tratamientos.</p>
              <div className="features">
                <div className="feature">
                  <i className="fas fa-pills"></i>
                  <div className="feature-text">
                    <h4>Productos certificados</h4>
                    <p>Medicamentos de calidad garantizada</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-truck"></i>
                  <div className="feature-text">
                    <h4>Entrega a domicilio</h4>
                    <p>Recibe tus productos sin salir de casa</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-shield-alt"></i>
                  <div className="feature-text">
                    <h4>Productos garantizados</h4>
                    <p>Garantía en todos nuestros productos</p>
                  </div>
                </div>
                <div className="feature">
                  <i className="fas fa-percent"></i>
                  <div className="feature-text">
                    <h4>Descuentos especiales</h4>
                    <p>Promociones para clientes frecuentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Productos</h2>
          </div>
          <div className="product-categories">
            <div className="category-card">
              <div className="category-image">
                <img src={Medicamentos} alt="Medicamentos" />
              </div>
              <div className="category-content">
                <h3>Medicamentos</h3>
                <p>Amplia variedad de medicamentos genéricos y de marca con prescripción y de venta libre.</p>
                <Link to="/productos" className="btn btn-outline">Ver más</Link>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-image">
                <img src={Dermocosmetica} alt="Dermocosmética" />
              </div>
              <div className="category-content">
                <h3>Dermocosmética</h3>
                <p>Productos especializados para el cuidado de la piel con respaldo dermatológico.</p>
                <Link to="/productos" className="btn btn-outline">Ver más</Link>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-image">
                <img src={Suplemento} alt="Vitaminas y Suplementos" />
              </div>
              <div className="category-content">
                <h3>Vitaminas y Suplementos</h3>
                <p>Complementos nutricionales para fortalecer tu sistema inmunológico y mejorar tu salud.</p>
                <Link to="/productos" className="btn btn-outline">Ver más</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Lo Que Dicen Nuestros Clientes</h2>
          </div>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>"Los productos que he comprado en MarketPharma siempre son de excelente calidad. La entrega a domicilio es rápida y el empaque protege bien los medicamentos. ¡Totalmente recomendado!"</p>
              <div className="testimonial-author">
                <img src={Cliente} alt="Cliente satisfecho" />
                <div className="author-info">
                  <h4>Marta Rodríguez</h4>
                  <span>Cliente desde 2020</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p>"El servicio a domicilio es rápido y eficiente. En menos de una hora tenía los medicamentos que necesitaba para mi madre, quien no puede salir de casa. Un servicio realmente valioso."</p>
              <div className="testimonial-author">
                <img src={Cliente} alt="Cliente satisfecho" />
                <div className="author-info">
                  <h4>Roberto Méndez</h4>
                  <span>Cliente desde 2021</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p>"Los precios son muy competitivos y siempre tienen disponibilidad de mis medicamentos para la hipertensión. Su programa de descuentos para clientes frecuentes realmente hace la diferencia."</p>
              <div className="testimonial-author">
                <img src={Cliente} alt="Cliente satisfecho" />
                <div className="author-info">
                  <h4>Carmen Jiménez</h4>
                  <span>Cliente desde 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2>¿Buscas productos farmacéuticos de calidad?</h2>
          <p>En nuestra tienda online encontrarás todo lo que necesitas para cuidar tu salud con los mejores precios del mercado.</p>
          <Link to="/productos" className="btn">¡COMPRA AHORA!</Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>MarketPharma</h3>
              <p>Tu farmacia online de confianza, comprometida con tu salud y bienestar. Ofrecemos productos de calidad a precios competitivos.</p>
              <div className="social-links">
                <a href="#"><img src={Facebook} alt="Facebook" className="social-icon" /></a>
                <a href="#"><img src={Instagram} alt="Instagram" className="social-icon" /></a>
                <a href="#"><img src={Twitter} alt="Twitter" className="social-icon" /></a>
                <a href="#"><img src={Whatsapp} alt="WhatsApp" className="social-icon" /></a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Enlaces Rápidos</h3>
              <ul className="footer-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#testimonials">Testimonios</a></li>
                <li><Link to="/registro">Registrarse</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Horarios</h3>
              <ul className="footer-links">
                <li>Lunes - Viernes: 8:00 AM - 10:00 PM</li>
                <li>Sábados: 8:00 AM - 8:00 PM</li>
                <li>Domingos: 9:00 AM - 6:00 PM</li>
                <li>Feriados: 10:00 AM - 5:00 PM</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contáctanos</h3>
              <ul className="footer-links">
                <li><i className="fas fa-map-marker-alt"></i> Av. Principal #456, Ciudad</li>
                <li><i className="fas fa-phone"></i> +57 987 654 3210</li>
                <li><i className="fas fa-envelope"></i> info@marketpharma.com</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 MarketPharma. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;