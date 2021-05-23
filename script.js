const list = document.querySelector('#my-list')
const form = document.querySelector('.form');
const cancelBtn = document.querySelector('[value="Cancel"]');
let addBtn = document.querySelector('[value="Save"]');
let elementToEdit,
     isEditMode = false;

function toggleForm() {
  form.classList.toggle('visible')
}

function saveTodo() {
  let textarea = document.querySelector('textarea');
  let todo = `<li>
                <span>
                ${textarea.value}</span>
                <input type="button" value="" onclick="editTodo(this)" class="edit-btn">
                <input type="button" value="&times;" onclick="deleteTodo(this)" class="delete-btn">
              </li>`;
  if (isEditMode) {
     elementToEdit.children[0].innerText = textarea.value;
     isEditMode = false;
  }
  if (textarea.value.trim() === "") {
    todo = null;
  } else {
    list.insertAdjacentHTML('beforeend', todo);
  }
  textarea.value = null;
  toggleForm();
  console.log(textarea.value)
 }

function editTodo(editBtn) {
  isEditMode = true;
  elementToEdit = editBtn.parentElement;
  let textarea = document.querySelector('textarea');
  toggleForm();
  textarea.value = elementToEdit.innerText.trim();
 }

function deleteTodo(deleteBtn) {
  list.removeChild(deleteBtn.parentElement)
}