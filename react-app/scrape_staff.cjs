const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_DIR = 'd:\\Downloads\\TEAM K\\gcee_clone\\gcee.ac.in';
const AJAX_DIR = path.join(BASE_DIR, 'include', 'ajax');
const REACT_PUB_DIR = '/include/ajax'; // Correct public reference

function capitalize(s) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

const DEPARTMENTS = {
    'cse': 'Computer Science and Engineering',
    'ece': 'Electronics and Communication Engineering',
    'eee': 'Electrical & Electronics Engineering',
    'mech': 'Mechanical Engineering',
    'civil': 'Civil Engineering',
    'it': 'Information Technology',
    'auto': 'Automobile Engineering',
    'mca': 'Computer Applications',
    'science&humanities': 'Science & Humanities'
};

const extractedData = {};

if (fs.existsSync(AJAX_DIR)) {
    const deps = fs.readdirSync(AJAX_DIR);
    
    deps.forEach(dep => {
        const depPath = path.join(AJAX_DIR, dep);
        if (fs.statSync(depPath).isDirectory() && DEPARTMENTS[dep]) {
            extractedData[dep] = {
                title: DEPARTMENTS[dep],
                staff: []
            };

            const files = fs.readdirSync(depPath);
            let idCount = 1;
            
            files.forEach(file => {
                if (file.endsWith('.html')) {
                    const filePath = path.join(depPath, file);
                    const html = fs.readFileSync(filePath, 'utf8');
                    const $ = cheerio.load(html);
                    
                    const name = $('p > strong').first().text().trim() || $('div.cbp-l-inline-right > p').first().text().replace('Dr.', 'Dr. ').trim();
                    const subtitle = $('.cbp-l-inline-subtitle').text().trim().split(',')[0];
                    const email = $('p:contains("E-Mail ID")').text().replace(/.*ID\s*:/, '').replace('E-Mail ID', '').trim();
                    const exp = $('p:contains("Experience")').text().replace(/.*?:/, '').trim();
                    const qual = $('p:contains("Qualification")').text().replace(/.*?:/, '').trim();
                    
                    const baseName = file.replace('.html', '');
                    let imagePath = null;
                    
                    const possibleJpg = path.join(depPath, baseName + '.jpg');
                    const possibleJpeg = path.join(depPath, baseName + '.jpeg');
                    const possiblePng = path.join(depPath, baseName + '.png');
                    
                    if (fs.existsSync(possibleJpg)) imagePath = `${REACT_PUB_DIR}/${dep}/${baseName}.jpg`;
                    else if (fs.existsSync(possibleJpeg)) imagePath = `${REACT_PUB_DIR}/${dep}/${baseName}.jpeg`;
                    else if (fs.existsSync(possiblePng)) imagePath = `${REACT_PUB_DIR}/${dep}/${baseName}.png`;

                    if (name) {
                        extractedData[dep].staff.push({
                            id: idCount++,
                            name: name.replace(/\s+/g, ' '),
                            role: subtitle || 'Faculty Member',
                            department: DEPARTMENTS[dep],
                            email: email,
                            experience: exp,
                            qualification: qual,
                            image: imagePath
                        });
                    }
                }
            });
        }
    });
}

// Add static textual descriptions from the actual site
extractedData['cse'].description = "Welcome to the Department of CSE. The department aims to develop software professionals equipped to innovate and solve complex problems.";
extractedData['cse'].vision = "To be a center of excellence in computer science education.";
extractedData['cse'].mission = ["Impart quality education", "Foster innovation", "Industry interaction"];

extractedData['ece'].description = "Communication Technology is driving our lives like never before. The ECE department empowers students to build advanced hardware and software systems.";
extractedData['ece'].vision = "To enable students to provide solutions to complex problems by educating them with strong fundamentals.";
extractedData['ece'].mission = ["Provide advanced tech training", "Promote high-quality research", "Develop sustainable systems"];

extractedData['eee'].description = "The Department of Electrical & Electronics Engineering strives to produce outstanding engineers who can address current and future energy demands.";
extractedData['eee'].vision = "To become a prime hub for engineering innovations in power and energy systems.";
extractedData['eee'].mission = ["Offer theoretical and practical knowledge", "Enhance problem-solving abilities", "Encourage sustainable engineering"];

extractedData['mech'].description = "Emphasizing a rigorous curriculum that integrates theoretical knowledge with extensive practical applications in machinery and modern manufacturing.";
extractedData['mech'].vision = "To produce versatile mechanical engineering graduates ready for complex challenges.";
extractedData['mech'].mission = ["Strong foundation in thermodynamics", "Practical skills in labs", "Entrepreneurial thinking"];

extractedData['civil'].description = "Building the foundations of the future. Our Civil Engineering department offers world-class training in construction and structural design.";
extractedData['civil'].vision = "To construct a sustainable and technically sound future.";
extractedData['civil'].mission = ["Quality structural education", "Green building research", "Modern planning tools"];

extractedData['it'].description = "In the age of information, our IT department focuses heavily on networking, databases, and agile application development paradigms.";
extractedData['it'].vision = "To lead the charge in the digital transformation of tomorrow.";
extractedData['it'].mission = ["Foster coding expertise", "Understand data architecture", "Global perspective"];

extractedData['auto'].description = "Driving the future of mobility. The Automobile Engineering department focuses on sustainable, electric, and high-performance vehicle design.";
extractedData['auto'].vision = "To become a premier center for automotive engineering excellence.";
extractedData['auto'].mission = ["Deep mechanical principles", "Hands-on vehicular training", "Push towards EV tech"];

extractedData['mca'].description = "The MCA program bridges the gap between software development theory and advanced enterprise IT solutions.";
extractedData['mca'].vision = "To mold elite software architects.";
extractedData['mca'].mission = ["Advanced application deployment", "Enterprise architectures", "Agile leadership"];

extractedData['science&humanities'].description = "The cornerstone of engineering. Providing strong fundamentals in physics, chemistry, mathematics, and professional English.";
extractedData['science&humanities'].vision = "To empower engineers with the fundamental laws of nature.";
extractedData['science&humanities'].mission = ["Rigorous scientific method", "Mathematical mastery", "Communication skills"];

fs.writeFileSync('src/data/departmentsData.js', `export const DEPARTMENT_DATA = ${JSON.stringify(extractedData, null, 2)};\n`);
console.log('Successfully extracted staff and department data!');
