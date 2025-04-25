// app/about/page.jsx
import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3">
          <div className="rounded-full overflow-hidden mx-auto w-64 h-64 relative bg-gray-700">
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <Image
                src="/images/Sonali.jpg"
                alt="Sonali"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">SONALI SINGH</h2>
          <h3 className="text-xl text-blue-400 mb-6">Full Stack Developer</h3>
          
          <p className="mb-6 text-gray-300">
            I'm a passionate Full Stack Developer currently studying Chemical Engineering at IIT BHU. 
            I started my coding journey in my first year, and over the years, I’ve honed my skills in web development, 
            working on several projects and contributing to various organizations.
          </p>
          
          <p className="mb-6 text-gray-300">
            I specialize in creating responsive, user-friendly interfaces using modern web technologies like React, 
            Next.js, and Tailwind CSS. I am also proficient in backend technologies like Node.js, Express, and Python, 
            working with databases such as MongoDB, PostgreSQL, and Firebase.
          </p>
          
          <p className="mb-6 text-gray-300">
            Outside of coding, I’m involved in the Society of Chemical Engineering (SoChem) and the COPS IIT BHU, 
            which comes under the SNTC council of IIT BHU. I’m passionate about contributing to open-source projects 
            and exploring new technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <a href="mailto:john@example.com" className="text-blue-400 hover:text-blue-300">rs6646208@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Location:</span>
              <span>Varanasi</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>

        <div className="space-y-8">
          {/* Head of Tech Team */}
          <div className="bg-[#000321] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Head of Tech Team</h3>
              <div className="text-blue-400">Jul 2024 – Present</div>
            </div>
            <h4 className="text-lg mb-4">Society of Chemical Engineering (IIT BHU) — Varanasi, UP, India</h4>
            <p className="text-gray-300">
              Led the development of the SoChem website and the Osmoze event platform.<br />
              Managed the GitHub repository, ensuring efficient collaboration and version control among team members.<br />
              Also managed the deployment of Osmoze 25, overseeing project events and handling Firebase for the platform.
            </p>
          </div>

          {/* Tech Executive */}
          <div className="bg-[#000321] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Tech Executive</h3>
              <div className="text-blue-400">Aug 2023 – Jun 2024</div>
            </div>
            <h4 className="text-lg mb-4">Society of Chemical Engineering (IIT BHU) — Varanasi, UP, India</h4>
            <p className="text-gray-300">
              Managed development of the web application’s frontend and backend for Osmoze.<br />
            </p>
          </div>

          {/* Core Team Member - COPS */}
          <div className="bg-[#000321] p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Core Team Member</h3>
              <div className="text-blue-400">Aug 2023 – Present</div>
            </div>
            <h4 className="text-lg mb-4">Software Development Group (COPS IIT BHU) — Varanasi, UP, India</h4>
            <p className="text-gray-300">
              Facilitator at a JavaScript workshop during “Introduction of Languages” under COPS IIT BHU.<br />
              Mentored freshers in DebugIT’24 (a week-long hackathon).
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
        
        <div className="bg-[#000321] p-6 rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h3 className="text-xl font-bold">B.Tech. in Chemical Engineering</h3>
            <div className="text-blue-400">2022 - Present</div>
          </div>
          <h4 className="text-lg">Indian Institute of Technology, BHU, Varanasi</h4>
        </div>
      </div>

      
    </div>
  );
}
