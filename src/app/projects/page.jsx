// app/projects/page.jsx
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Book_Store",
      description: "Book_Store is a responsive online bookstore built with React, Node.js, Express, Firebase, and MongoDB, featuring user authentication, admin book management, and a clean Tailwind CSS-powered UI. ",
      image: "/images/project1.png",
      tags: ["Node.js", "React", "Express", "Tailwind CSS", "Firebase","MongoDB"],
      githubLink: "https://github.com/Sonali-Singh31/Book-Store.git",
      liveLink: "https://book-store-frontend-amber.vercel.app/"
    },
    {
      title: "Social_Book",
      description: "Social_Book is a social networking web app built with Python, Django, HTML, JavaScript, and Tailwind CSS. It features user login, the ability to create posts, follow friends, and comment on posts.",
      image: "/images/project2.png",
      tags: ["Python", "Django", "HTML","Javascript", "Tailwind CSS"],
      githubLink: "https://github.com/Sonali-Singh31/Social-Book.git",
      liveLink: "https://sonali3112.pythonanywhere.com/"
    },
    {
      title: "Instagram_Clone",
      description: "A full-featured Instagram clone built with React.js, Tailwind CSS, and Firebase. It includes user authentication, photo posts, likes, comments, stories, real-time updates, and user profiles, closely replicating Instagram's core functionalities",
      image: "/images/project3.png",
      tags: ["React.js", "Tailwind CSS", "Firebase"],
      githubLink: "https://github.com/Sonali-Singh31/Social-app.git",
      liveLink: "https://social-n085mbv6z-sonali-singhs-projects-eedf38de.vercel.app/auth"
    },
    {
      title: "Feedback-Collector",
      description: "A feedback collection platform built with React, Tailwind CSS, and Firebase. Users can submit feedback through a simple form, and entries are stored in Firebase and displayed in real-time on the dashboard.",
      image: "/images/project4.png",
      tags: ["React", "Tailwind CSS", "Firebase"],
      githubLink: "https://github.com/Sonali-Singh31/Feedback-Collector.git",
      liveLink: "https://feedback-collector-sonali.netlify.app/"
    },
    {
      title: "Blog_Writer",
      description: "An AI-powered blog writing tool built with Python that conducts research using public APIs like NewsData.io, Datamuse, and Quotable.io. It generates SEO-optimized content and exports it in Markdown format.",
      image: "/images/project5.png",
      tags: ["Python", "API Integration","optimize for SEO"],
      githubLink: "https://github.com/Sonali-Singh31/Blog_writer.git",
      liveLink: "#"
    },
    {
      title: "Todo-list",
      description: "A simple and responsive Todo List app built with React, Firebase, and Tailwind CSS. Users can add, delete, and mark tasks as completed, with real-time data syncing via Firebase.",
      image: "/images/project6.png",
      tags: ["Next.js", "API Integration", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/Sonali-Singh31/Todo-list.git",
      liveLink: "https://6686be728835561a4c005efb--animated-salamander-bba55e.netlify.app/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
            <div
              className={`h-48 w-full ${project.image.includes('/') ? '' : `bg-${project.image}`} bg-cover bg-center`}
              style={project.image.includes('/') ? { backgroundImage: `url(${project.image})` } : {}}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-3 py-1 bg-gray-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.githubLink} className="flex items-center gap-1 text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> Code
                </a>
                <a href={project.liveLink} className="flex items-center gap-1 text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
