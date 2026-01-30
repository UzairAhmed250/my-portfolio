import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pine-800 text-on-dark-high">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-playfair font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-playfair">Page Not Found</h2>
        <p className="text-on-dark-low max-w-md">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button className="button-glow mt-4">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}

