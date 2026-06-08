import React from 'react'

function Footer() {
  return (
    // The outer div spans 100% width and holds the top border
    <footer className="w-full border-t border-orange-900 mt-12">
        {/* The inner div centers the content to 1200px */}
        <div className="max-w-[1260px] w-full mx-auto py-8 flex items-center justify-center px-4">
            <p className="m-0 text-sm text-orange-700">
                © {new Date().getFullYear()} — Mathanraj Rajendran
            </p>
            {/* <div className="flex">
                <a href="/privacy" className="mx-2 text-blue-600 no-underline hover:underline">Privacy</a>
                <a href="/terms" className="mx-2 text-blue-600 no-underline hover:underline">Terms</a>
            </div> */}
        </div>
    </footer>
  )
}

export default Footer