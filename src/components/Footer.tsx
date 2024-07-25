import logoSrc from '@/assets/images/logo-white.svg'
import iconFacebook from '@/assets/images/icon-facebook.svg'
import iconYoutube from '@/assets/images/icon-youtube.svg'
import iconTwitter from '@/assets/images/icon-twitter.svg'
import iconPinterest from '@/assets/images/icon-pinterest.svg'
import iconInstagram from '@/assets/images/icon-instagram.svg'
import { Link } from '@radix-ui/themes'

const Footer = () => {
  return (
    <footer className="bg-primary-dark-blue flex flex-col items-center p-10 space-y-8">
      <img src={logoSrc} alt="Easybank" />
      <ul className="flex gap-4" aria-label="socials">
        <li><Link href="#"><img src={iconFacebook} alt="facebook" className="w-6" /></Link></li>
        <li><Link href="#"><img src={iconYoutube} alt="youtube" className="w-6" /></Link></li>
        <li><Link href="#"><img src={iconTwitter} alt="twitter" className="w-6" /></Link></li>
        <li><Link href="#"><img src={iconPinterest} alt="pinterest" className="w-6" /></Link></li>
        <li><Link href="#"><img src={iconInstagram} alt="instagram" className="w-6" /></Link></li>
      </ul>
      <ul className="text-center text-sm space-y-[14px]">
        <li>
          <Link className="text-white">About Us</Link>
        </li>
        <li>
          <Link className="text-white">Contact</Link>
        </li>
        <li>
          <Link className="text-white">Blog</Link>
        </li>
        <li>
          <Link className="text-white">Careers</Link>
        </li>
        <li>
          <Link className="text-white">Support</Link>
        </li>
        <li>
          <Link className="text-white">Privacy Policy</Link>
        </li>
      </ul>
      <Link className="cta-btn">
        Request Invite
      </Link>
      <span className="text-sm text-neutral-gray-blue">&copy; Easybank. All Rights Reserved</span>
    </footer>
  )
}

export default Footer
