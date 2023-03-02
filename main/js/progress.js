const imageInput = document.querySelector('#image_input');
const displayImage = document.querySelector('#display_image');

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    const img = new Image();

    img.addEventListener('load', function() {

      // automatically adjust the image so it fits the border 
      const MAX_WIDTH = 500;
      const MAX_HEIGHT = 500;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      displayImage.innerHTML = `<img src="${reader.result}" style="width:${width}px;height:${height}px">`;
    });

    img.src = reader.result;
  });

  reader.readAsDataURL(file);
});