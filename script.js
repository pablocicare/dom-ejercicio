const list = document.querySelector(".js-list");
const input = document.querySelector(".js-input-search");  
const searchVisibility = document.querySelector(".js-hover");
const clear = document.querySelector(".js-button");
const searchWrapper = document.querySelector(".search-wrapper");

function color() {
	searchWrapper.classList.add('active');
}

function hover() {
	searchVisibility.style.display="flex";
}

//así agregas eventos al html (variable referenciada + evento = funcion)
searchWrapper.onclick = function (e) {
    e.stopPropagation();
    hover();
  }

  document.body.onclick = function() {
    searchVisibility.style.display="none";
		searchWrapper.classList.remove('active');
  }

function addItem(){
	const item = document.createElement("li"); 
	if (input.value.length === 0) {
	return;
	} 
	else { 
		item.innerHTML = input.value;
		list.appendChild(item);
		item.classList.add("list-items");
		item.innerHTML = `
		<span>
		<i class="fa fa-search"></i>
		<span>${input.value}</span>
		</span>
		<i class="fa fa-times">`;
		input.value = ""; 
		} 
};

function enter() {
	if (event.which == 13 || event.key == "Enter") {
		return addItem();
  }
    return;
	}

function removeItem(){
		list.innerHTML = null;
}

input.addEventListener("click", hover);
input.addEventListener("click", color);
input.addEventListener("keydown", enter);
clear.addEventListener("click", removeItem);