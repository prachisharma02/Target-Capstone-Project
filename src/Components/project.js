import React from "react";

const Projects = () => {
  const projects = [
    {
      id: "proj-001",
      title: "Personal Portfolio Website",
      category: "Web Development",
      desc: "A responsive personal portfolio built with modern web technologies. Showcases projects, skills, and contact information.",
      tech: "HTML, CSS, JavaScript, Portfolio",
      image: "https://i.pinimg.com/736x/fb/48/c1/fb48c1e95afb8dcf551f12789ea9ce7d.jpg",
      bg: "bg-blue-900",
      year: 2025,
      score: 92,
    },
    {
      id: "proj-002",
      title: "E-commerce App",
      category: "UI/UX + Development",
      desc: "A full-stack e-commerce platform with payment integration. Includes product listing, cart, and checkout system.",
      tech: "React, Node.js, Stripe, Ecommerce",
      image: "https://i.pinimg.com/736x/3f/30/73/3f3073ba4c9cf17d5614450417c9ce97.jpg",
      bg: "bg-green-900",
      year: 2025,
      score: 94,
    },
    {
      id: "proj-003",
      title: "Task Management Tool",
      category: "Web App",
      desc: "A productivity tool to manage daily tasks and projects. Features drag-and-drop task boards and deadlines.",
      tech: "React, Kanban, Productivity",
      image: "https://i.pinimg.com/1200x/27/2e/51/272e513ef63d269137d7344af5710c19.jpg",
      bg: "bg-yellow-900",
      year: 2025,
      score: 90,
    },
    {
      id: "proj-004",
      title: "Blog CMS Platform",
      category: "Backend Development",
      desc: "A custom CMS for creating and managing blog content. Supports markdown, categories, and user roles.",
      tech: "Node.js, Express, MongoDB, CMS",
      image: "https://i.pinimg.com/736x/e7/1f/86/e71f86f9f2115d969abad9df872eca12.jpg",
      bg: "bg-purple-900",
      year: 2025,
      score: 88,
    },
    {
      id: "proj-005",
      title: "Weather Dashboard",
      category: "API Integration",
      desc: "A weather app displaying real-time forecasts. Uses third-party APIs for dynamic weather data.",
      tech: "API, JavaScript, Dashboard",
      image: "https://i.pinimg.com/1200x/9d/09/c7/9d09c73ec5decc01aa987de7d053fef4.jpg",
      bg: "bg-red-900",
      year: 2025,
      score: 86,
    },
    {
      id: "proj-006",
      title: "Chat Application",
      category: "Real-time App",
      desc: "A real-time messaging app with WebSocket support. Includes private chats and notifications.",
      tech: "Socket.io, Node.js, Chat",
      image: "https://i.pinimg.com/1200x/d7/be/42/d7be42f33ae0f1219ff0d431409fbf24.jpg",
      bg: "bg-indigo-900",
      year: 2025,
      score: 93,
    },
    {
      id: "proj-007",
      title: "Fitness Tracker Mobile App",
      category: "Mobile Development",
      desc: "A mobile app to track workouts and health metrics. Includes progress charts and goal tracking.",
      tech: "Flutter, Health, Fitness",
      image: "https://i.pinimg.com/736x/88/cc/e6/88cce6690fd4b24f614139d47a35113a.jpg",
      bg: "bg-pink-900",
      year: 2025,
      score: 91,
    },
    {
      id: "proj-008",
      title: "AI Resume Analyzer",
      category: "AI/ML",
      desc: "An AI tool to analyze resumes and suggest improvements. Uses NLP to evaluate skills and formatting.",
      tech: "AI, NLP, Resume",
      image: "https://i.pinimg.com/736x/47/0c/ea/470ceae6cff488b593634d4d44ca7174.jpg",
      bg: "bg-gray-900",
      year: 2025,
      score: 95,
    },
    {
      id: "proj-009",
      title: "Social Media Dashboard",
      category: "Analytics",
      desc: "A dashboard to track social media performance metrics. Displays engagement, reach, and growth trends.",
      tech: "Analytics, Dashboard, Social Media",
      image: "https://i.pinimg.com/1200x/0a/b8/e8/0ab8e844fbea24c4db7004afec33708b.jpg",
      bg: "bg-cyan-900",
      year: 2025,
      score: 89,
    },
    {
      id: "proj-010",
      title: "Online Code Editor",
      category: "Developer Tool",
      desc: "A browser-based code editor with live preview. Supports multiple languages and syntax highlighting.",
      tech: "Code Editor, JavaScript, IDE",
      image: "https://i.pinimg.com/736x/38/f2/e4/38f2e4e6e6529b0943676a50bbc8c3f5.jpg",
      bg: "bg-orange-900",
      year: 2025,
      score: 92,
    },
    // --- Your original projects below ---
    {
      title: "AAM – Web SDK Integration",
      desc: "Implemented Adobe Audience Manager integration using Adobe Experience Platform Web SDK, Adobe Target, and Adobe Analytics. Tested on a fitness tracking website.",
      tech: "Adobe Audience Manager, AEP Web SDK, Adobe Target, Adobe Analytics",
      image:"https://experienceleague.adobe.com/en/docs/platform-learn/implement-web-sdk/applications-setup/media_14bdb44c9c2d8f84125154db6f5bd912a2e383440.png?width=750&format=png&optimize=medium"
    },
    {
      title: "Adobe Target Implementation Learning",
      desc: "Currently exploring Adobe Target implementation concepts, including activity setup, audience targeting and User permissions.",
      tech: "Adobe Target, JavaScript",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowpYDzt7m-hR48DB5o53kQJHVssQJqGu0hA&s"
    },
    {
      title: "Knowledge Articles & Documentation",
      desc: "Created detailed knowledge articles and technical documentation outlining Processes, integration steps, and troubleshooting guidelines to support customers and internal teams.",
      tech: "Adobe Audience Manager, Adobe Analytics",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AwIsBPr6VrWp9NWufzGXvWbjOpJFbz4aUQ&s"
    },
  ];
//   return (
//     <div
//       className="container-fluid py-5"
//       style={{
//         background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
//       }}
//     >
//       <div className="container">
//         <h2 className="display-5 fw-bold mb-5 text-dark text-center">
// Learnings        </h2>

//         <div className="row g-4">
//           {projects.map((project, idx) => (
//             <div key={idx} className="col-md-6">
//               <div
//                 className="card h-100 border-0 shadow-lg"
//                 style={{
//                   borderRadius: "20px",
//                   transition: "0.3s ease",
//                 }}
//               >
//                 <div className="card-body">
//                   <h5 className="card-title fw-semibold mb-3">
//                     {project.title}
//                   </h5>
//                   <p className="card-text text-secondary mb-3">
//                     {project.desc}
//                   </p>
//                   <p className="fw-medium text-primary mb-0">
//                     Tech: {project.tech}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
return (
  <div
    className="container-fluid py-5"
    style={{
      background: "linear-gradient(135deg, #fce4ec, #e3f2fd, #f3e5f5)",
    }}
  >
    <div className="container">
      <h2 className="display-5 fw-bold mb-5 text-dark text-center">
        Learnings
      </h2>

      <div className="row g-4">
        {projects.map((project, idx) => (
          <div key={idx} className="col-md-6">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              {/* Image — only shown if project has one */}
              {project.image && (
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              <div className="card-body p-4">
                {/* Category badge — only if present */}
                {project.category && (
                  <span
                    className="badge mb-2"
                    style={{
                      backgroundColor: "#e3f2fd",
                      color: "#1565c0",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    {project.category}
                  </span>
                )}

                <h5 className="card-title fw-semibold mb-2">{project.title}</h5>

                <p className="card-text text-secondary mb-3" style={{ fontSize: "0.92rem" }}>
                  {project.desc}
                </p>

                <p className="fw-medium text-primary mb-0" style={{ fontSize: "0.88rem" }}>
                  🛠 {project.tech}
                </p>

                {/* Score + Year row — only if present */}
                {(project.score || project.year) && (
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    {project.year && (
                      <span className="text-muted" style={{ fontSize: "0.82rem" }}>
                        📅 {project.year}
                      </span>
                    )}
                    {project.score && (
                      <span
                        style={{
                          backgroundColor: "#e8f5e9",
                          color: "#2e7d32",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                          padding: "3px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        ⭐ {project.score}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Projects;