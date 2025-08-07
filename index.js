#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const boxen = require('boxen');

const portfolio = {
  name: "Shreyash",
  username: "dynamicshreyashh",
  title: "Full Stack Developer & Tech Enthusiast",
  tagline: "Building innovative solutions with modern web technologies",
  email: "shreyashbhosale078@gmail.com", 
  github: "https://github.com/dynamicshreyashh",
  linkedin: "https://www.linkedin.com/in/shreyash-5a7726245/",
  portfolio: "https://shreyas-h-portfolio.vercel.app/",
  location: "Sangli, Maharashtra, India",
  
  skills: {
  Languages: ["Java", "JavaScript", "Python"],
  Backend_Development: ["Node.js", "Express.js", "REST APIs", "WebSockets", "JWT"],
  Frontend_Development: ["HTML5", "CSS3", "JavaScript (EJS)"],
  Databases: ["MongoDB", "MySQL", "Firebase"],
  Developer_Tools: ["VS Code", "Postman", "Vercel", "Netlify", "Git", "GitHub"]
},

  projects: [
    {
      name: "🤖 AI Virtual Mouse",
      description: "Innovative AI-powered virtual mouse system using computer vision",
      tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
      features: [
        "Hand gesture recognition",
        "Virtual mouse control",
        "Computer vision algorithms",
        "Real-time tracking"
      ],
      github: "https://github.com/dynamicshreyashh/Ai-Virtual-Mouse-",
      status: "🟢 Complete",
      category: "AI/ML Project",
      highlight: true
    },
    {
      name: "🏨 Event Management System",
      description: "Professional event management platform for organizing events",
      tech: ["JavaScript", "Node.js", "MongoDB", "Express.js"],
      features: [
        "Event creation & management",
        "User registration system",
        "Admin dashboard",
        "Booking management"
      ],
      github: "https://github.com/dynamicshreyashh/Event-Management-Sytsem",
      status: "🟢 Complete",
      category: "Internship Work"
    },
    {
      name: "🛡️ VanguardOps",
      description: "Operations management system with modern architecture",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Operations tracking",
        "User management",
        "Dashboard analytics",
        "Real-time updates"
      ],
      github: "https://github.com/dynamicshreyashh/VanguardOps",
      status: "🟢 Complete",
      category: "Full Stack Web App"
    },
    {
      name: "✈️ WanderLust Travel Platform",
      description: "Interactive travel platform with real-time location tracking",
      tech: ["JavaScript", "React.js", "Node.js", "Maps API"],
      features: [
        "Destination exploration",
        "Real-time location tracking",
        "Travel information hub",
        "Interactive maps"
      ],
      github: "https://github.com/dynamicshreyashh/WanderLust-Travel-Platform",
      status: "🟢 Complete",
      category: "Web Platform",
      highlight: true
    },
    {
      name: "🍳 Recipe Vault",
      description: "Full-stack MERN application for recipe management",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      features: [
        "Recipe creation & editing",
        "Ingredients management",
        "User authentication",
        "Recipe search & filter"
      ],
      github: "https://github.com/dynamicshreyashh/Recipe-Vault",
      status: "🟢 Complete",
      category: "MERN Stack App",
      highlight: true
    }
  ],
  
  experience: [
    {
      role: "Full Stack Developer",
      company: "Internship & Personal Projects",
      duration: "2023 - Present",
      location: "Sangli, Maharashtra",
      description: "Developing full-stack web applications and exploring AI/ML technologies",
      achievements: [
        "Built 5+ full-stack applications using MERN stack",
        "Developed AI-powered computer vision project",
        "Completed professional internship in event management",
        "Specialized in JavaScript ecosystem and modern web development"
      ]
    }
  ],
  
  about: [
    "🚀 Passionate Full Stack Developer from Sangli, Maharashtra",
    "💻 Specialized in MERN stack and modern JavaScript technologies", 
    "🤖 Exploring AI/ML and computer vision applications",
    "🎯 Love building practical solutions that solve real-world problems",
    "📚 Always learning new technologies and improving my skills",
    "🌟 Open to collaboration and new opportunities"
  ],
  
  stats: {
    repositories: "10+",
    languages: "5+",
    projects_completed: "5+",
    contributions: "Active"
  }
};

function showWelcome() {
  console.clear();
  console.log(
    chalk.cyan(
      figlet.textSync(portfolio.username, {
        font: 'Small',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
  
  console.log(
    boxen(
      chalk.white.bold(`👋 Welcome to ${portfolio.name}'s Portfolio CLI!\n`) +
      chalk.gray(`${portfolio.title}\n`) +
      chalk.blue(`📍 ${portfolio.location}\n\n`) +
      chalk.yellow(`"${portfolio.tagline}"\n\n`) +
      chalk.green(`🎮 Use arrow keys to navigate • Press Enter to select`),
      {
        padding: 1,
        margin: 1,
        borderStyle: 'double',
        borderColor: 'cyan',
        backgroundColor: '#001122'
      }
    )
  );
}

function showPersonalInfo() {
  console.log(
    boxen(
      chalk.white.bold('👤 About Me\n\n') +
      portfolio.about.map(point => chalk.white(`${point}`)).join('\n') + '\n\n' +
      chalk.cyan.bold('📊 Quick Stats\n') +
      chalk.yellow(`🗂️  Repositories: ${portfolio.stats.repositories}\n`) +
      chalk.yellow(`💻 Languages: ${portfolio.stats.languages}\n`) +
      chalk.yellow(`🚀 Projects: ${portfolio.stats.projects_completed}\n`) +
      chalk.yellow(`📈 Contributions: ${portfolio.stats.contributions}`),
      {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'green',
        width: 80
      }
    )
  );
}

function showSkills() {
  let skillsText = chalk.white.bold('💻 Technical Skills\n\n');
  
  Object.entries(portfolio.skills).forEach(([category, skills]) => {
    skillsText += chalk.cyan.bold(`${category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' ')}:\n`);
    skillsText += skills.map(skill => chalk.yellow(`  • ${skill}`)).join('\n') + '\n\n';
  });

  console.log(
    boxen(skillsText, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'yellow',
      width: 70
    })
  );
}


function showProjects() {
  let projectText = chalk.white.bold('🚀 Featured Projects\n\n');
  
  portfolio.projects.forEach((project, index) => {
    const highlight = project.highlight ? '⭐ ' : '';
    projectText += chalk.cyan.bold(`${highlight}${index + 1}. ${project.name}\n`);
    projectText += chalk.white(`   ${project.description}\n`);
    projectText += chalk.gray(`   Category: ${project.category}\n`);
    projectText += chalk.magenta(`   Tech Stack: ${project.tech.join(', ')}\n`);
    projectText += chalk.green(`   Status: ${project.status}\n`);
    
    if (project.features && project.features.length > 0) {
      projectText += chalk.blue(`   Features:\n`);
      project.features.slice(0, 2).forEach(feature => {
        projectText += chalk.blue(`     • ${feature}\n`);
      });
    }
    
    projectText += chalk.blue(`   🔗 GitHub: ${project.github}\n\n`);
  });

  console.log(
    boxen(projectText, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'magenta',
      width: 90
    })
  );
}

async function showProjectDetails() {
  const projectChoices = portfolio.projects.map((project, index) => ({
    name: `${project.name} - ${project.category}`,
    value: index
  }));

  const { selectedProject } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedProject',
      message: 'Which project would you like to explore?',
      choices: [...projectChoices, { name: '← Back to Main Menu', value: 'back' }]
    }
  ]);

  if (selectedProject === 'back') {
    return;
  }

  const project = portfolio.projects[selectedProject];
  
  let detailText = chalk.cyan.bold(`${project.name}\n\n`);
  detailText += chalk.white(`${project.description}\n\n`);
  detailText += chalk.yellow.bold('🛠️ Technology Stack:\n');
  detailText += project.tech.map(tech => chalk.yellow(`  • ${tech}`)).join('\n') + '\n\n';
  
  if (project.features) {
    detailText += chalk.blue.bold('✨ Key Features:\n');
    detailText += project.features.map(feature => chalk.blue(`  • ${feature}`)).join('\n') + '\n\n';
  }
  
  detailText += chalk.green(`📊 Status: ${project.status}\n`);
  detailText += chalk.magenta(`📂 Category: ${project.category}\n`);
  detailText += chalk.blue(`🔗 Repository: ${project.github}`);

  console.log(
    boxen(detailText, {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'cyan',
      width: 80
    })
  );
}


function showExperience() {
  let expText = chalk.white.bold('💼 Professional Experience\n\n');
  
  portfolio.experience.forEach((exp, index) => {
    expText += chalk.cyan.bold(`${exp.role}\n`);
    expText += chalk.yellow(`${exp.company} | ${exp.duration}\n`);
    expText += chalk.gray(`📍 ${exp.location}\n\n`);
    expText += chalk.white(`${exp.description}\n\n`);
    
    expText += chalk.green.bold('🏆 Key Achievements:\n');
    exp.achievements.forEach(achievement => {
      expText += chalk.green(`  • ${achievement}\n`);
    });
    expText += '\n';
  });

  console.log(
    boxen(expText, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'blue',
      width: 85
    })
  );
}

function showContact() {
  console.log(
    boxen(
      chalk.white.bold('📫 Let\'s Connect!\n\n') +
      chalk.green('I\'m always open to discussing new opportunities,\ncollaborations, or just having a tech chat! 🤝\n\n') +
      chalk.cyan('📧 Email: ') + chalk.white(portfolio.email) + '\n' +
      chalk.cyan('💼 LinkedIn: ') + chalk.white(portfolio.linkedin) + '\n' +
      chalk.cyan('🐙 GitHub: ') + chalk.white(portfolio.github) + '\n' +
      chalk.cyan('🌐 Portfolio: ') + chalk.white(portfolio.portfolio) + '\n' +
      chalk.cyan('📍 Location: ') + chalk.white(portfolio.location) + '\n\n' +
      chalk.yellow('💡 Open for: Full-time roles, internships, freelance projects!'),
      {
        padding: 1,
        margin: 1,
        borderStyle: 'double',
        borderColor: 'green',
        width: 70
      }
    )
  );
}

async function showMenu() {
  const choices = [
    '👤 About Me',
    '💻 Technical Skills', 
    '🚀 All Projects',
    '🔍 Project Details',
    '💼 Experience',
    '📫 Contact & Social',
    '🎯 GitHub Profile',
    '🚪 Exit'
  ];

  const { selection } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'What would you like to explore?',
      choices: choices,
      pageSize: choices.length
    }
  ]);

  switch (selection) {
    case '👤 About Me':
      showPersonalInfo();
      await continuePrompt();
      break;
    case '💻 Technical Skills':
      showSkills();
      await continuePrompt();
      break;
    case '🚀 All Projects':
      showProjects();
      await continuePrompt();
      break;
    case '🔍 Project Details':
      await showProjectDetails();
      await continuePrompt();
      break;
    case '💼 Experience':
      showExperience();
      await continuePrompt();
      break;
    case '📫 Contact & Social':
      showContact();
      await continuePrompt();
      break;
    case '🎯 GitHub Profile':
      console.log(
        boxen(
          chalk.cyan.bold('🐙 GitHub Profile\n\n') +
          chalk.white(`Visit my GitHub to see all my projects and contributions:\n`) +
          chalk.blue.bold(`${portfolio.github}\n\n`) +
          chalk.yellow('⭐ Don\'t forget to star the repositories you find interesting!'),
          {
            padding: 1,
            margin: 1,
            borderStyle: 'round',
            borderColor: 'blue'
          }
        )
      );
      await continuePrompt();
      break;
    case '🚪 Exit':
      console.log(
        boxen(
          chalk.green.bold('Thanks for exploring my portfolio! 🙏\n\n') +
          chalk.white('Hope to connect with you soon!\n') +
          chalk.cyan(`- ${portfolio.name} 👨‍💻`),
          {
            padding: 1,
            margin: 1,
            borderStyle: 'double',
            borderColor: 'green'
          }
        )
      );
      process.exit(0);
  }
}

async function continuePrompt() {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'continue',
      message: 'Press Enter to return to main menu...'
    }
  ]);
  await run();
}


async function run() {
  showWelcome();
  await showMenu();
}

if (require.main === module) {
  run().catch(console.error);
}

module.exports = { run };