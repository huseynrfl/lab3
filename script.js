document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const userData = {
        name: "HÜSEYN <span class='highlight'>RƏFİLİ</span>",
        title: "STUDENT",
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

    // --- ADD DATA TO PAGE ---
    document.getElementById('userName').innerHTML = userData.name;
    document.getElementById('userTitle').textContent = userData.title;

    const createList = (array, iconPath = "") => {
        return array.map(item => 
            `<p class="editable" contenteditable="false"><img src="photos/${iconPath}${item.icon || ''}" alt="" class="icon"> ${item.text}</p>`
        ).join('');
    };

    const createEducation = (array) => {
        return array.map(item => `<p><strong>${item.period}</strong><br>${item.school}</p>`).join('');
    };

    const createSkills = (array) => {
        return `<ul style="list-style-type: none;">${array.map(skill => `<li>${skill}</li>`).join('')}</ul>`;
    };

    const createWork = (array) => {
        return array.map(job => `
            <p><strong>${job.title}</strong></p>
            <ul style="list-style-type: none;">${job.details.map(d => `<li>${d}</li>`).join('')}</ul>
        `).join('');
    };

    const createCertifications = (array) => {
        return array.map(cert => `
            <p><strong>${cert.name}</strong></p>
            <p>${cert.description}</p>
        `).join('');
    };

    const createProjects = (array) => {
        return array.map(project => `
            <p><strong>${project.name}</strong></p>
            <p>${project.description}</p>
        `).join('');
    };

    document.getElementById('contactInfo').innerHTML = createList(userData.contact);
    document.getElementById('socialMedia').innerHTML = createList(userData.socialMedia);
    document.getElementById('educationInfo').innerHTML = createEducation(userData.education);
    document.getElementById('skillsInfo').innerHTML = createSkills(userData.skills);
    document.getElementById('languagesInfo').innerHTML = createSkills(userData.languages);
    document.getElementById('profileInfo').innerHTML = `<p>${userData.profile}</p>`;
    document.getElementById('workExperience').innerHTML = createWork(userData.workExperience);
    document.getElementById('referenceInfo').innerHTML = `<p>${userData.reference}</p>`;
    document.getElementById('certificationsInfo').innerHTML = createCertifications(userData.certifications);
    document.getElementById('projectsInfo').innerHTML = createProjects(userData.projects);

    // --- OLD FUNCTIONS (Edit, Save, Accordion, Zip) ---
    const editBtn = document.getElementById('editBtn');
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    let isEditing = false;

    // Accordion open/close
    accordionBtns.forEach(button => {
        button.addEventListener('click', () => {
            const panel = button.nextElementSibling;
            if (panel.classList.contains('active')) {
                panel.style.maxHeight = null;
                panel.classList.remove('active');
            } else {
                panel.classList.add('active');
                panel.style.maxHeight = "300px";
            }
        });
    });

    // Toggle edit mode
    editBtn.addEventListener('click', () => {
        isEditing = !isEditing;
        editBtn.textContent = isEditing ? 'Save' : 'Edit';

        // Open Accordion panels
        accordionBtns.forEach(btn => {
            const panel = btn.nextElementSibling;
            panel.classList.add('active');
            panel.style.maxHeight = "300px";
        });

        // Activate all editable fields
        const editableElements = document.querySelectorAll('h1, h3, .accordion-panel p, .accordion-panel li, .accordion-panel .editable');
        editableElements.forEach(el => {
            el.setAttribute('contenteditable', isEditing);
        });

        // Save
        if (!isEditing) {
            downloadFiles();
        }
    });

    // Add a new line on Enter key
    const panels = document.querySelectorAll('.accordion-panel');
    panels.forEach(panel => {
        panel.addEventListener('keydown', e => {
            if (!isEditing) return;
            if (e.key === 'Enter') {
                e.preventDefault();
                document.execCommand('insertHTML', false, '<br><br>');
            }
        });
    });

    // Download the page as ZIP
    async function downloadFiles() {
        const zip = new JSZip();

        // Add HTML file
        const html = document.documentElement.outerHTML;
        zip.file("index.html", html);

        // Add CSS file
        const cssPath = Array.from(document.styleSheets).find(s => s.href && s.href.endsWith("style.css"))?.href;
        if (cssPath) {
            try {
                const response = await fetch(cssPath);
                const cssText = await response.text();
                zip.file("style.css", cssText);
            } catch (err) {
                console.warn("CSS dosyası alınamadı:", err);
            }
        }

        // Add script file
        const scriptPath = Array.from(document.scripts).find(s => s.src && s.src.endsWith("script.js"))?.src;
        if (scriptPath) {
            try {
                const response = await fetch(scriptPath);
                const scriptText = await response.text();
                zip.file("script.js", scriptText);
            } catch (err) {
                console.warn("Script dosyası alınamadı:", err);
            }
        }

        // Add photos
        const images = [...document.querySelectorAll("img")];
        for (let img of images) {
            const src = img.src;
            if (src.startsWith("blob:")) continue;
            try {
                const res = await fetch(src);
                const blob = await res.blob();
                const name = img.src.split("/").pop();
                zip.file(`photos/${name}`, blob);
            } catch (err) {
                console.warn("Resim yüklenemedi:", src);
            }
        }

        // Download ZIP
        zip.generateAsync({ type: "blob" }).then(content => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(content);
            a.download = 'cv.zip';
            a.click();
        });
    }
});
