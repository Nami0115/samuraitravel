const imageInput = document.getElementById('imageFile');
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', function() {
	if (imageInput.files[0]) {
		let fileReader = new FileReader();
		fileReader.onload = function() {
			imagePreview.innerHTML = `<img src="${fileReader.result}" class="mb-3">`;
		}
		fileReader.readAsDataURL(imageInput.files[0]);
	} else {
		imagePreview.innerHTML = '';
	}
});