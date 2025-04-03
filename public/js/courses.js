// Sample course data
const courses = [
  { 
    id: 1, 
    title: "Web Development Fundamentals", 
    description: "Learn HTML, CSS, and JavaScript to build modern websites.", 
    duration: "8 weeks",
    instructor: "Alex Johnson",
    price: "$199"
  },
  { 
    id: 2, 
    title: "Data Science Essentials", 
    description: "Introduction to Python, Pandas, and data visualization.", 
    duration: "10 weeks",
    instructor: "Maria Garcia",
    price: "$249"
  },
  { 
    id: 3, 
    title: "Mobile App Development", 
    description: "Build cross-platform apps with React Native.", 
    duration: "12 weeks",
    instructor: "Sam Wilson",
    price: "$299"
  },
  { 
    id: 4, 
    title: "UI/UX Design Principles", 
    description: "Master Figma and design thinking methodologies.", 
    duration: "6 weeks",
    instructor: "Jamie Chen",
    price: "$179"
  },
  { 
    id: 5, 
    title: "Cloud Computing", 
    description: "AWS and Azure fundamentals for developers.", 
    duration: "8 weeks",
    instructor: "Taylor Smith",
    price: "$229"
  },
  { 
    id: 6, 
    title: "Machine Learning Basics", 
    description: "Introduction to neural networks and TensorFlow.", 
    duration: "10 weeks",
    instructor: "Jordan Lee",
    price: "$279"
  }
];

// Pagination setup
const coursesPerPage = 3;
let currentPage = 1;

function displayCourses() {
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const coursesToDisplay = courses.slice(startIndex, endIndex);
  
  const courseListElement = document.getElementById("course-list");
  courseListElement.innerHTML = '';

  coursesToDisplay.forEach(course => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("bg-white", "p-6", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition-shadow");
    courseElement.innerHTML = `
      <h2 class="text-xl font-bold text-gray-800 mb-2">${course.title}</h2>
      <p class="text-gray-600 mb-3">${course.description}</p>
      <div class="flex justify-between text-sm text-gray-500 mb-4">
        <span>Duration: ${course.duration}</span>
        <span>${course.price}</span>
      </div>
      <a href="course-details.html?id=${course.id}" 
         class="block w-full text-center py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
        View Details
      </a>
    `;
    courseListElement.appendChild(courseElement);
  });

  displayPagination();
}

function displayPagination() {
  const paginationElement = document.getElementById("pagination");
  const totalPages = Math.ceil(courses.length / coursesPerPage);
  paginationElement.innerHTML = '';

  // Previous button
  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerHTML = `&laquo;`;
    prevButton.classList.add("px-4", "py-2", "border", "rounded-l", "hover:bg-gray-100");
    prevButton.onclick = () => {
      currentPage--;
      displayCourses();
    };
    paginationElement.appendChild(prevButton);
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("px-4", "py-2", "border-t", "border-b", "hover:bg-gray-100");
    if (i === currentPage) {
      pageButton.classList.add("bg-green-500", "text-white");
    }
    pageButton.onclick = () => {
      currentPage = i;
      displayCourses();
    };
    paginationElement.appendChild(pageButton);
  }

  // Next button
  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.innerHTML = `&raquo;`;
    nextButton.classList.add("px-4", "py-2", "border", "rounded-r", "hover:bg-gray-100");
    nextButton.onclick = () => {
      currentPage++;
      displayCourses();
    };
    paginationElement.appendChild(nextButton);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', displayCourses);