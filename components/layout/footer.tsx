import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import LogoSquare from "components/logo-square";
import { ThemeToggle } from "components/theme-toggle";
import { getMenu } from "lib/shopify";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

// Keep constants dynamic & robust
const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate =
    2025 + (currentYear > 2025 ? `-${currentYear}` : "");
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyright = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="relative mt-12 border-t border-border bg-gradient-to-br from-muted/50 to-background text-muted-foreground">
      <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-4 max-w-7xl mx-auto">
        {/* Branding & App Info */}
        <div className="space-y-3 text-center md:text-left">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-3">
            <LogoSquare size="sm" />
            <span className="text-2xl font-bold tracking-tighter text-primary">Redevs Commerce</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Elevate your shopping experience.<br />Exclusive products, secure payments, trusted support.
          </p>
          <div className="flex justify-center md:justify-start gap-3 pt-2">
            <a aria-label="Facebook" target="_blank" href="https://facebook.com" className="hover:text-primary">
              <FaFacebook size={20} />
            </a>
            <a aria-label="Instagram" target="_blank" href="https://instagram.com" className="hover:text-primary">
              <FaInstagram size={20} />
            </a>
            <a aria-label="X" target="_blank" href="https://x.com" className="hover:text-primary">
              <FaXTwitter size={20} />
            </a>
            <a aria-label="YouTube" target="_blank" href="https://youtube.com" className="hover:text-primary">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Columns (just illustrative, update with real links) */}
        <div className="text-center md:text-left">
          <h4 className="mb-3 font-semibold text-primary">Shop</h4>
          <ul className="space-y-2">
            <li><Link href="/collections/new" className="hover:underline">New Arrivals</Link></li>
            <li><Link href="/collections/bestsellers" className="hover:underline">Best Sellers</Link></li>
            <li><Link href="/collections/sale" className="hover:underline">On Sale</Link></li>
            <li><Link href="/collections/all" className="hover:underline">All Products</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="mb-3 font-semibold text-primary">Customer Care</h4>
          <ul className="space-y-2">
            <li><Link href="/help/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/help/shipping" className="hover:underline">Shipping</Link></li>
            <li><Link href="/help/returns" className="hover:underline">Returns & Refunds</Link></li>
            <li><Link href="/help/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div className="text-center md:text-left">
          <h4 className="mb-3 font-semibold text-primary">Stay Updated</h4>
          <form className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background rounded"
              required
            />
            <Button size="sm" type="submit" className="w-fit mx-auto md:mx-0">Subscribe</Button>
            <span className="text-xs text-muted-foreground">Get special offers & updates. No spam. Unsubscribe anytime.</span>
          </form>
        </div>
      </div>

      <Separator />
      <div className="container flex flex-col items-center justify-between gap-3 py-6 md:flex-row max-w-7xl mx-auto">
        <p className="text-xs text-center md:text-left">
          © {copyrightDate} {copyright && <>{copyright}.</>} All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-xs underline transition hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="text-xs underline transition hover:text-primary">Terms of Service</Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
