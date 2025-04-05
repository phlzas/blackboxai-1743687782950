// Get course ID from URL
const urlParams = new URLSearchParams(window.location.search);
const courseId = parseInt(urlParams.get('id'), 10);

// Sample course data (same as in courses.js)
const courses = [
  { 
    id: 1, 
    title: "Web Development Fundamentals", 
    description: "Learn HTML, CSS, and JavaScript to build modern websites.", 
    duration: "8 weeks",
    instructor: "Alex Johnson",
    price: "$199",
    syllabus: [
      "HTML5 and Semantic Markup",
      "CSS3 and Flexbox/Grid",
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Responsive Design",
      "Basic API Integration",
      "Project: Personal Portfolio"
    ]
  },
  { 
    id: 2, 
    title: "Data Science Essentials", 
    description: "Introduction to Python, Pandas, and data visualization.", 
    duration: "10 weeks",
    instructor: "Maria Garcia",
    price: "$249",
    syllabus: [
      "Python Basics",
      "NumPy and Pandas",
      "Data Cleaning Techniques",
      "Matplotlib and Seaborn",
      "Basic Statistics",
      "Introduction to Machine Learning",
      "Project: Data Analysis Report"
    ]
  },
  { 
    id: 3, 
    title: "Mobile App Development", 
    description: "Build cross-platform apps with React Native.", 
    duration: "12 weeks",
    instructor: "Sam Wilson",
    price: "$299",
    syllabus: [
      "React Fundamentals",
      "React Native Components",
      "Navigation",
      "State Management",
      "API Integration",
      "App Deployment",
      "Project: Todo App"
    ]
  },
  { 
    id: 4, 
    title: "UI/UX Design Principles", 
    description: "Master Figma and design thinking methodologies.", 
    duration: "6 weeks",
    instructor: "Jamie Chen",
    price: "$179",
    syllabus: [
      "Design Thinking",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Figma Tools",
      "Design Systems",
      "Project: Redesign a Website"
    ]
  },
  { 
    id: 5, 
    title: "Cloud Computing", 
    description: "AWS and Azure fundamentals for developers.", 
    duration: "8 weeks",
    instructor: "Taylor Smith",
    price: "$229",
    syllabus: [
      "Cloud Concepts",
      "AWS EC2 and S3",
      "Azure Virtual Machines",
      "Serverless Computing",
      "Database Services",
      "Security Best Practices",
      "Project: Deploy a Web App"
    ]
  },
  { 
    id: 6, 
    title: "Machine Learning Basics", 
    description: "Introduction to neural networks and TensorFlow.", 
    duration: "10 weeks",
    instructor: "Jordan Lee",
    price: "$279",
    syllabus: [
      "Python for ML",
      "NumPy and Pandas",
      "Supervised Learning",
      "Neural Networks",
      "TensorFlow Basics",
      "Model Evaluation",
      "Project: Image Classifier"
    ]
  }
];

function displayCourseDetails() {
  const course = courses.find(c => c.id === courseId);
  const courseDetailsElement = document.getElementById("course-details");

  if (course) {
    // Create syllabus list items
    const syllabusItems = course.syllabus.map(item => 
      `<li class="flex items-start mb-2">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>${item}</span>
      </li>`
    ).join('');

    courseDetailsElement.innerHTML = `
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">${course.title}</h1>
        <p class="text-gray-600 mb-4">${course.description}</p>
        <div class="flex flex-wrap gap-4 mb-6">
          <div class="bg-gray-100 px-4 py-2 rounded-lg">
            <span class="text-gray-500 text-sm">Duration</span>
            <p class="font-medium">${course.duration}</p>
          </div>
          <div class="bg-gray-100 px-4 py-2 rounded-lg">
            <span class="text-gray-500 text-sm">Instructor</span>
            <p class="font-medium">${course.instructor}</p>
          </div>
          <div class="bg-gray-100 px-4 py-2 rounded-lg">
            <span class="text-gray-500 text-sm">Price</span>
            <p class="font-medium">${course.price}</p>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Course Syllabus</h2>
        <ul class="list-none">
          ${syllabusItems}
        </ul>
      </div>

      <div class="flex gap-4">
        <a href="./index.html" class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          Back to Courses
        </a>
        <a href="../Payment.html" class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          Enroll Now
        </a>
      </div>
    `;
  } else {
    courseDetailsElement.innerHTML = `
      <div class="text-center py-8">
        <h2 class="text-xl font-bold text-gray-800 mb-2">Course Not Found</h2>
        <p class="text-gray-600 mb-4">The requested course could not be found.</p>
        <a href="/courses.html" class="text-green-500 hover:underline">Browse all courses</a>
      </div>
    `;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', displayCourseDetails);