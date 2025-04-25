// app/skills/page.jsx
export default function Skills() {
    const technicalSkills = [
      { category: "Frontend", skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "CSS3", "Tailwind CSS", "Redux","BootStrap"] },
      { category: "Backend", skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "PostgreSQL", "MongoDB", "Firebase","SQL", "NoSQL"] },
      { category: "DevOps & Tools", skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify","Postman"] },
    ];
    
    const softSkills = [
      "Problem Solving", "Communication", "Team Collaboration", "Project Management", 
      "Time Management", "Adaptability", "Critical Thinking", "Attention to Detail"
    ];
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">My Skills</h1>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          
          <div className="space-y-12">
            {technicalSkills.map((skillSet, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-4">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="bg-gray-800 rounded-lg px-5 py-3 text-center hover:bg-gray-700 transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-8">Soft Skills</h2>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-800 border border-blue-500/30 rounded-lg px-5 py-3 text-center hover:bg-gray-700 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Skill Level</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl mb-6">Frontend Development</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>React.js</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Next.js</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>CSS/Tailwind</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl mb-6">Backend Development</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Django</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Node.js</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Firebase</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>RESTful APIs</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>

      </div>
    );
  }