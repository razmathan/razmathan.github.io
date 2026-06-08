import React from 'react'

function Footer() {
  return (
    // The outer div spans 100% width and holds the top border
    <footer className="w-full border-t border-earth-800 mt-auto">
        <div className="max-w-5xl w-full mx-auto py-6 flex items-center justify-center px-6">
            <p className="m-0 text-sm text-sage">
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