import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <Image
            src="/images/Afc-logo.png"
            alt="AFC Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <div className="text-6xl font-bold text-[#ebbd28] mb-4">404</div>
          <h1 className="text-2xl font-bold text-white mb-2">Page Not Found</h1>
          <p className="text-gray-400 mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. Maybe it moved, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="block w-full bg-[#ebbd28] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Go to Homepage
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/menu"
              className="block bg-gray-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              View Menu
            </Link>
            <Link 
              href="/about"
              className="block bg-gray-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              About Us
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? Contact us:</p>
          <p className="text-[#ebbd28]">+91 76740 73004</p>
        </div>
      </div>
    </div>
  );
}
