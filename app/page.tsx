"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function TypoLanding() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="text-3xl font-bold text-white">Typo</div>
          <div className="flex space-x-12">
            <a href="#features" className="text-white hover:text-cyan-400 transition-colors text-lg">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-cyan-400 transition-colors text-lg">
              Pricing
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none mb-8">
                Make your
                <br />
                type move.
              </h1>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-12">Bolder than bold.</p>
              <Button
                size="lg"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold text-xl px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get started
              </Button>
            </div>

            {/* Side Text */}
            <div className="lg:col-span-4 flex flex-col space-y-8 lg:space-y-16 text-right">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 tracking-wider">WARP TEXT</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 tracking-wider">
                SLIDE ACROSS
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 tracking-wider">
                GLITCH IT UP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Content */}
            <div className="scroll-animate">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                Ready to
                <br />
                break the
                <br />
                mold?
              </h2>
              <div className="space-y-4 text-lg lg:text-xl">
                <p>Create stunning, animated</p>
                <p>text with just a few clicks.</p>
                <p>No After Effects needed.</p>
              </div>
            </div>

            {/* Right Content - Empty for spacing */}
            <div></div>
          </div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 scroll-animate skew-text">
            See It In Motion
          </h2>

          {/* Video Container with Glitch Border */}
          <div className="relative mb-12 scroll-animate">
            <div className="glitch-border-container">
              <div className="video-container bg-gray-900 rounded-lg overflow-hidden relative">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>

                  {/* Mock UI Elements */}
                  <div className="relative z-10 w-full h-full p-8">
                    <div className="bg-black/50 rounded-lg p-6 max-w-2xl mx-auto">
                      <div className="text-4xl font-bold text-cyan-400 mb-4 animate-pulse">TYPO</div>
                      <div className="text-2xl font-bold mb-6 text-white">Motion Typography</div>

                      {/* Mock Timeline */}
                      <div className="bg-gray-800 rounded p-4 mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          <div className="text-sm text-gray-400">Timeline</div>
                        </div>
                        <div className="bg-gray-700 h-2 rounded-full overflow-hidden">
                          <div className="bg-cyan-400 h-full w-1/3 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Mock Controls */}
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-400 mb-1">Weight</div>
                          <div className="bg-gray-700 h-1 rounded-full">
                            <div className="bg-cyan-400 h-full w-2/3 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Slant</div>
                          <div className="bg-gray-700 h-1 rounded-full">
                            <div className="bg-cyan-400 h-full w-1/2 rounded-full"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 mb-1">Speed</div>
                          <div className="bg-gray-700 h-1 rounded-full">
                            <div className="bg-cyan-400 h-full w-3/4 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer group">
                    <div className="w-20 h-20 bg-cyan-400/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-gray-300 mb-8 scroll-animate">
            This isn't just design—it's motion made simple.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent hover:bg-cyan-400/10 text-cyan-400 border-cyan-400 hover:border-cyan-300 font-bold text-lg px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 scroll-animate"
          >
            Watch full demo
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cyan-400 mb-16 scroll-animate">
            Go BOLD, go TYPO.
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 scroll-animate">
                <span className="text-cyan-400 font-bold text-xl mt-1">&gt;</span>
                <span className="text-lg lg:text-xl">Instantly animate any font</span>
              </div>
              <div className="flex items-start space-x-4 scroll-animate">
                <span className="text-cyan-400 font-bold text-xl mt-1">&gt;</span>
                <span className="text-lg lg:text-xl">Pick from multiple kinetic styles</span>
              </div>
              <div className="flex items-start space-x-4 scroll-animate">
                <span className="text-cyan-400 font-bold text-xl mt-1">&gt;</span>
                <span className="text-lg lg:text-xl">Export as high-quality video or SVG</span>
              </div>
              <div className="flex items-start space-x-4 scroll-animate">
                <span className="text-cyan-400 font-bold text-xl mt-1">&gt;</span>
                <span className="text-lg lg:text-xl">Powered by AI magic</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <Button
                size="lg"
                className="bg-transparent hover:bg-cyan-400 text-cyan-400 hover:text-black font-bold text-xl px-8 py-4 rounded-full border-2 border-cyan-400 transition-all duration-300 hover:scale-105 scroll-animate"
              >
                Start creating
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
            <div className="text-2xl font-bold text-cyan-400">Typo</div>
            <div className="text-gray-400 text-center lg:text-right">Motion typography that breaks boundaries</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
