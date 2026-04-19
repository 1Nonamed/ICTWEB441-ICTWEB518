const $ = (el) => document.querySelector(el);

// 1. Student List
const students = ["Daniel", "John", "Sara", "Emily", "Michael"];

const studentList = $("#studentList");

students.forEach((student, i) => {
  const html = `
    <li class="p-3 border-b border-gray-200 flex justify-between">
      <span class="font-bold">Student ${i + 1}:</span>
      <span>${student}</span>
    </li>
  `;

  studentList.insertAdjacentHTML("beforeend", html);
});

// 2. Button Alert
const alertButton = $("#alertButton");

alertButton.addEventListener("click", () => {
  const alertDiv = $("#alert");

  alertDiv.classList.toggle("hidden");
  alertDiv.classList.toggle("flex");
});
