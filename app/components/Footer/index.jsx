import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/logo.png"
            alt="Digital Project Logo"
            width={80}
            height={80}
            
          />
          <h1 className="tracking-widest text-sm font-light">DIGITAL PROJECT</h1>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="font-bold mb-4">Contacts</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPinIcon size={16} />
              <span>1234 Sample Street<br />Austin Texas 78704</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={16} />
              <span>512.333.2222</span>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={16} />
              <span>sampleemail@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
