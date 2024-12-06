export default function Food() {
    const projects = [
        { title: "JavaScript Library", imageUrl: "https://via.placeholder.com/150", link: "https://ohkrah.github.io/JavaScript-Library/", repoLink: "https://github.com/Ohkrah/JavaScript-Library" },
        { title: "non-Emerge", imageUrl: "https://via.placeholder.com/150", link: "https://example.com/project2", repoLink: "hhttps://github.com/Dragonung/non-emerge" },
        { title: "Profession ReadMe Generator", imageUrl: "https://via.placeholder.com/150", link: "https://drive.google.com/file/d/18mbGOpI7yxas0VM6_5zbFsP5OSY45Meb/preview", repoLink: " https://github.com/pada2024/Professional-README-Generator-Application" },
        { title: "RegEx", imageUrl: "https://via.placeholder.com/150", link: "https://gist.github.com/pada2024/60a5d21246a74c0169b1a14a99b58df4", repoLink: "  https://gist.github.com/pada2024" },
        { title: "Note Taker", imageUrl: "https://via.placeholder.com/150", link: " https://pada2024.github.io/Note-Taker-/", repoLink: "https://github.com/pada2024/Note-Taker" },
        { title: "JavaScript Payroll App", imageUrl: "https://via.placeholder.com/150", link: "https://pada2024.github.io/JavaScript-Payroll-App/", repoLink: "https://github.com/pada2024/JavaScript-Payroll-App" },
    ];

    return (
        <div>
            <h1>Food Bank Page</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                            />
                            <h2>{project.title}</h2>
                        </a>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}


// import React from 'react';

// export default function Food() {
//     return (
//         <div>
//             <h1>Food Bank Resources</h1>
//             <p>
                
//                 {/* Add more content as necessary */}
//             </p>
//             <a href="https://www.contracosta.edu/wp-content/uploads/2020/04/Food-Pantry-Calendar.pdf" download>
//                 Download Food Bank Calendar
//             </a>
//         </div>
//     );
// }

