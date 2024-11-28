import React from 'react';
import FooterLink from './FooterLink';
import SocialSection from './SocialSection';
import { companyLinks, customerLinks, practitionerLinks, resourceLinks, socialLinks } from '../../constants/footerdata';
import './footer.css'; // Include the CSS file

const Footer = () => {
    return (
        <footer role="contentinfo">
            {/* Links Section */}
            <div className="links-section">
                <FooterLink title="For Practitioners" links={practitionerLinks} />
                <FooterLink title="For Customers" links={customerLinks} />
                <FooterLink title="Resources" links={resourceLinks} />
                <FooterLink title="Company" links={companyLinks} />
            </div>

            {/* Social Section */}
            <SocialSection socialLinks={socialLinks} />

            {/* Divider */}
            <div className="footer-divider" />

            {/* Bottom Section */}
            <div className="bottom-section">
                <p>Copyright © 2022. Ambel. All rights reserved.</p>
                <nav>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/cookies">Cookies</a>
                    <a href="/terms">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
