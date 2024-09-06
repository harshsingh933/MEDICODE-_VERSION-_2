import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
//import useWindowSize from '../../hooks/useWindowSize'; // Import useWindowSize hook
import logo from '../../src/assest/banner/logo.png'

const Footer = () => {
 // const { width } = useWindowSize(); // Destructure width from useWindowSize hook

  // Define styles
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '40px 20px',
      borderTop: '1px solid #e0e0e0',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerSection: {
      flex: 1,
      margin: '0 20px',
      minWidth: '200px',
    },
    footerLogo: {
      height: '80px',
      marginBottom: '15px',
    },
    footerDescription: {
      color: '#6c757d',
    },
    sectionTitle: {
      marginBottom: '15px',
      fontSize: '16px',
      color: '#333',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      marginBottom: '10px',
    },
    link: {
      textDecoration: 'none',
      color: '#007bff',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    socialIcons: {
      display: 'flex',
    },
    socialIcon: {
      marginRight: '10px',
      color: '#007bff',
      fontSize: '20px',
      textDecoration: 'none',
    },
    socialIconHover: {
      color: '#0056b3',
    },
    footerBottom: {
      textAlign: 'center',
      marginTop: '20px',
      color: '#6c757d',
    },
    '@media (max-width: 768px)': {
      container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      footerSection: {
        marginBottom: '20px',
      },
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <div style={styles.footerSection}>
          <img src={logo} alt="Pharma Logo" style={styles.footerLogo} />
          <p style={styles.footerDescription}>
            Your one-stop destination for medicines and healthcare products. We offer a wide range of prescription and over-the-counter medicines, personal care items, and more.
          </p>
        </div>

        {/* Quick Links */}
         
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><Link to="/about" style={styles.link}>About Us</Link></li>
              <li style={styles.listItem}><Link to="/contact" style={styles.link}>Contact Us</Link></li>
              <li style={styles.listItem}><Link to="/terms" style={styles.link}>Terms of Service</Link></li>
              <li style={styles.listItem}><Link to="/privacy" style={styles.link}>Privacy Policy</Link></li>
              <li style={styles.listItem}><Link to="/faq" style={styles.link}>FAQ</Link></li>
            </ul>
          </div>
        

        {/* Contact Details */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionTitle}>Contact Us</h4>
          <p>Email: support@pharmawebsite.com</p>
          <p>Phone: 91 9334204351</p>
          <p>Address: 123 Pharma Street, City, Country</p>
        </div>

        {/* Social Media */}
        <div style={styles.footerSection}>
          <h4 style={styles.sectionTitle}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaInstagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Pharma Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
