const data = {
    contact: [
        { icon: "phone.png", text: "+994 51 979 14 55" },
        { icon: "email.png", text: "rfilihusu@gmail.com" },
        { icon: "location.png", text: "Azerbaijan/Baku/Garadagh" }
    ],
    socialMedia: [
            { icon: "instagram.png", text: "huseynrfl" },
            { icon: "tik-tok.png", text: "huseynrfl" },
            { icon: "github.png", text: "huseynrfl" }
        ],
        education: [
            { period: "2013 - 2019", school: "School №-83 lyceum" },
            { period: "2019 - 2024", school: "Haydar Aliyev's named lyceum" },
            { period: "2024 - 2025", school: "AzTU - Azerbaijan Technical University Information security" }
        ],
        skills: ["Creative problem-solving", "Team collaboration", "Strategic thinking", "Bodybuilder"],
        languages: ["Azerbaijani", "English", "Turkish"],
        profile: "Driven and detail-oriented professional with a passion for technology and innovation. Known for solving complex problems through creative solutions and strategic thinking.",
        workExperience: [
            {
                title: "Software Developer | XYZ Tech Solutions",
                details: ["Developed and maintained web applications, collaborating with cross-functional teams to deliver high-quality software solutions. Utilized technologies such as Python, JavaScript, and SQL to enhance system performance and user experience."]
            },
            {
                title: "Project Manager | ABC Marketing Agency",
                details: ["Analyzed large datasets to uncover actionable insights and provide data-driven recommendations to stakeholders. Developed automated reporting tools using Excel and Power BI, improving efficiency and accuracy in decision-making."]
            }
        ],
        reference: "I had the pleasure of working closely with John for over two years at XYZ Tech Solutions, where he served as a Senior Manager. John was an exceptional leader, known for his strategic approach to problem-solving and his ability to guide teams through complex projects.",
        certifications: [
            {
                name: "CompTIA Cybersecurity Analyst (CySA+)",
                description: "The CySA+ certification focuses on the skills needed to monitor and secure networks, respond to incidents, and perform vulnerability management."
            },
            {
                name: "AWS Certified Solutions Architect – Associate",
                description: "This certification validates expertise in designing distributed applications and systems on the AWS platform."
            }
        ],
        projects: [
            {
                name: "E-commerce Website Development",
                description: "Led the development of a fully functional e-commerce website for a small business, using React for the frontend and Node.js for the backend."
            },
            {
                name: "Cybersecurity Risk Assessment and Mitigation",
                description: "Conducted a comprehensive security audit for a financial institution, identifying vulnerabilities in their network infrastructure and data storage practices."
            }
        ]
    };

  document.getElementById("email").innerText = data.contact[1].text;
  document.getElementById("no").innerText = data.contact[0].text;
  document.getElementById("location").innerText = data.contact[2].text;
  document.getElementById("instagram").innerText = data.socialMedia[0].text;
  document.getElementById("tiktok").innerText = data.socialMedia[1].text;
  document.getElementById("github").innerText = data.socialMedia[2].text;

  document.getElementById("education").innerHTML = data.education.map(item => `<p><strong>${item.period}</strong><br> ${item.school}</p>`).join("");

  document.getElementById("skill").innerHTML = data.skills.map(skill => `<li>${skill}</li>`).join("");

  document.getElementById("experience").innerHTML = data.workExperience.map(exp => `<p><strong>${exp.title}</strong><br> ${exp.details}</p>`).join("");

  document.getElementById("language").innerHTML = data.languages.map(lang => `<li>${lang}</li>`).join("");
  document.getElementById("project").innerHTML = data.projects.map(lang => `<p><strong>${lang.name}</strong><br> ${lang.description}</p>`).join("");
  document.getElementById("certification").innerHTML = data.certifications.map(lang => `<p><strong>${lang.name}</strong><br> ${lang.description}</p>`).join("");
  document.getElementById("reference").innerHTML = `<p>${data.reference}</p>`;
  document.getElementById("profile-info").innerHTML = `<p>${data.profile}</p>`;

function addSkill() {
    const skill = document.getElementById("skill-input").value;
    document.getElementById("skill").innerHTML += `<li>${skill}</li>`;
}

function addLanguage() {
    const language = document.getElementById("language-input").value;
    document.getElementById("language").innerHTML += `<li>${language}</li>`;
}
