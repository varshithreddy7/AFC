import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="relative">
          <Image
            src="/images/Afc-logo.png"
            alt="AFC Logo"
            width={120}
            height={120}
            className="mx-auto mb-4 animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-4 border-t-[#ebbd28] border-transparent animate-spin"></div>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">AFC</h2>
        <p className="text-gray-400 text-sm">Loading delicious content...</p>
        
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-[#ebbd28] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#ebbd28] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-[#ebbd28] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
}
