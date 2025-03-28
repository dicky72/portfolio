import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-muted/30">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 Dicky Juliansyah. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}