
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              SONALI SINGH
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Full Stack Developer specializing in modern web technologies and creating beautiful, functional applications.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-[#00010d] shadow-md text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition transform hover:scale-105 hover:bg-[rgba(0,1,13,0.6)]">
              View My Work <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className=" bg-[#00010d] shadow-md text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105 hover:bg-[rgba(0,1,13,0.6)]">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-16 px-4 bg-[#000024]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book_Store */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/images/project1.png)' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Book_Store</h3>
                <p className="text-gray-300 mb-4">
                  A responsive online bookstore with user authentication, admin book management, and Tailwind-powered UI.
                </p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Instagram_Clone */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/images/project3.png)' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Instagram_Clone</h3>
                <p className="text-gray-300 mb-4">
                  A full-featured clone with real-time updates, posts, likes, stories, and user profiles using Firebase.
                </p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Feedback-Collector */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(/images/project4.png)' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Feedback-Collector</h3>
                <p className="text-gray-300 mb-4">
                  A React + Firebase platform for collecting user feedback and displaying it on a real-time dashboard.
                </p>
                <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 justify-center">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">React.js</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">Next.js</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">Tailwind CSS</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">TypeScript</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">Node.js</span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300">Firebase</span>
          </div>
          <div className="mt-8">
            <Link href="/skills" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 justify-center">
              View All Skills <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
