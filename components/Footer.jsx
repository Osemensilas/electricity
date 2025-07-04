import Link from "next/link";

const Footer = () => {
    return ( 
        <>
        <footer className="w-screen bg-neutralDark text-white py-16 px-8 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                {/* Logo and description */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                <img src="/logo.png" alt="Bodant Logo" className="h-16 mb-4" />
                <p className="text-gray-300 mb-4 max-w-xs text-center md:text-left">
                    Bodant Innovation Resource Limited – Engineering excellence, innovative solutions, and reliable facility management.
                </p>
                <div className="flex gap-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg className="w-6 h-6 fill-current hover:text-primary" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0"/></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg className="w-6 h-6 fill-current hover:text-primary" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg className="w-6 h-6 fill-current hover:text-primary" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
                    </a>
                </div>
                </div>
                {/* Navigation */}
                <div className="flex-1 flex flex-col items-center md:items-start">
                <h4 className="font-bold mb-4 text-lg">Navigation</h4>
                <ul className="space-y-2 text-gray-300">
                    <li><Link href="/" className="hover:text-primary">Home</Link></li>
                    <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                    <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                    <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                </ul>
                </div>
                {/* Contact Form */}
                <div className="flex-1">
                <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
                <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); /* handle submit here */ }}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                    required
                    />
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    className="px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
                    required
                    />
                    <button
                    type="submit"
                    className="bg-primary text-offBlack font-semibold py-2 rounded hover:bg-opacity-90 transition"
                    >
                    Send Message
                    </button>
                </form>
                </div>
            </div>
            <div className="text-center text-gray-400 mt-12 text-sm">
                &copy; {new Date().getFullYear()} Bodant Innovation Resource Limited. All rights reserved.
            </div>
        </footer>
        </>
     );
}
 
export default Footer;