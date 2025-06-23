const studentCreateForm = document.getElementById("student-create-form");
const msg = document.querySelector(".msg");

// Define the alert function
function createAlert(message, type = "danger") {
  return `<p style="color: red; background: #ffe0e0; padding: 10px; border-radius: 5px;">${message}</p>`;
}

// Submit Student Form
studentCreateForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());
  console.log(data);

  // form validation
  if (!data.name || !data.father || !data.mother || !data.roll) {
    msg.innerHTML = createAlert("All fields are required");
  } else {
    let oldData = [];
    // check data exists or not
    if (localStorage.getItem("students")) {
      oldData = JSON.parse(localStorage.getItem("students"));
    }
    oldData.push({
      // push new Data
      ...data,
      id: createID(),
      createAt: Data.now(),
      updateAt: null,
    });

    // send data to ls
    localStorage.setItem("students", JSON.stringify(oldData));
  }
};
