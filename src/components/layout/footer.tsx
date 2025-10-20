import LogoSquare from "@/components/logo-square";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { getMenu } from "@/lib/shopify";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import FooterMenu from "./footer-menu";

// Keep constants dynamic & robust
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2025 + (currentYear > 2025 ? `-${currentYear}` : "");
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyright = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="relative mt-12 border-t border-border bg-gradient-to-br from-muted/50 to-background text-muted-foreground">
      <div className="container py-8 md:py-12 max-w-7xl mx-auto px-4">
        {/* Desktop: 5-column layout, Mobile: stacked layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          
          {/* Branding & Company Info - Takes 2 columns on desktop */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <LogoSquare size="sm" />
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-primary">
                Redevs Commerce
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm md:max-w-none">
              Elevate your shopping experience with exclusive products, secure payments, and trusted customer support. Your satisfaction is our priority.
            </p>
            
            {/* Social Icons - Better spacing for desktop */}
            <div className="flex gap-4 pt-2">
              <a 
                aria-label="Facebook" 
                target="_blank" 
                href="https://facebook.com" 
                className="hover:text-primary transition-colors duration-200 p-2 -m-2 hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                aria-label="Instagram" 
                target="_blank" 
                href="https://instagram.com" 
                className="hover:text-primary transition-colors duration-200 p-2 -m-2 hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                aria-label="X" 
                target="_blank" 
                href="https://x.com" 
                className="hover:text-primary transition-colors duration-200 p-2 -m-2 hover:scale-110"
              >
                <FaXTwitter size={24} />
              </a>
              <a 
                aria-label="YouTube" 
                target="_blank" 
                href="https://youtube.com" 
                className="hover:text-primary transition-colors duration-200 p-2 -m-2 hover:scale-110"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 md:mb-6 font-semibold text-primary text-base">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/collections/new" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/bestsellers" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/sale" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  On Sale
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/all" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 md:mb-6 font-semibold text-primary text-base">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/help/contact" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/help/shipping" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link 
                  href="/help/returns" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link 
                  href="/help/faq" 
                  className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Combined Section: Dynamic Menu + Quick Actions */}
          <div className="text-center md:text-left">
            {/* Dynamic Footer Menu - Show on desktop */}
            {menu.length > 0 ? (
              <>
                <h4 className="mb-4 md:mb-6 font-semibold text-primary text-base">Company</h4>
                <div className="space-y-3">
                  <FooterMenu menu={menu} />
                </div>
              </>
            ) : (
              <>
                <h4 className="mb-4 md:mb-6 font-semibold text-primary text-base">Quick Actions</h4>
                <div className="space-y-3">
                  <Link 
                    href="/account" 
                    className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                  >
                    My Account
                  </Link>
                  <Link 
                    href="/cart" 
                    className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                  >
                    View Cart
                  </Link>
                  <Link 
                    href="/wishlist" 
                    className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                  >
                    Wishlist
                  </Link>
                  <Link 
                    href="/orders" 
                    className="text-sm hover:text-primary transition-colors duration-200 block py-1 hover:translate-x-1"
                  >
                    Order History
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Newsletter Section - Desktop Only */}
      </div>

      <Separator />
      
      {/* Footer Bottom - Enhanced for desktop */}
      <div className="container py-4 md:py-6 max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-xs text-center md:text-left">
              © {copyrightDate} {copyright && <>{copyright}.</>} All rights reserved.
            </p>
            <div className="hidden md:block w-1 h-1 bg-muted-foreground/40 rounded-full"></div>
            <p className="text-xs text-muted-foreground/80">
              Made with ❤️ for amazing customers
            </p>
          </div>
          
          {/* Legal Links & Theme Toggle - Better spacing for desktop */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link 
              href="/privacy" 
              className="text-xs hover:text-primary transition-colors duration-200 py-2"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-xs hover:text-primary transition-colors duration-200 py-2"
            >
              Terms of Service
            </Link>
            <Link 
              href="/cookies" 
              className="text-xs hover:text-primary transition-colors duration-200 py-2"
            >
              Cookie Policy
            </Link>
            <div className="flex items-center ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
