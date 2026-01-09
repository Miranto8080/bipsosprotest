import Image from 'next/image';

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
          header,
          nav,
          footer {
            display: none !important;
          }
        `}</style>
      <main className="min-h-screen flex items-center justify-center relative">
        <Image
          src="/images/imagefond.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 w-full max-w-md">{children}</div>
      </main>
    </>
  );
}
