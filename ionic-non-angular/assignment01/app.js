const courseNameInput = document.querySelector("#input-course-name");
const courseRatingInput = document.querySelector("#input-course-rating");
const btnAddRating = document.querySelector("#btn-add");
const ratingsList = document.querySelector("#ratings-list");

btnAddRating.addEventListener('click', () => {

    const courseName = courseNameInput.value.trim();
    const courseRating = courseRatingInput.value.trim();

    if (courseName.length <= 0 || courseRating.length <= 0 || courseRating <= 0 || courseRating > 5) {

        const alert = document.createElement('ion-alert');

        alert.header = 'Invalid Input';

        alert.message = 'Please enter valid name and rating';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        alert.present();
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${courseName}&nbsp; - </strong>&nbsp;${courseRating}/5`;

    ratingsList.appendChild(newItem);

    courseNameInput.value = '';
    courseRatingInput.value = '';

});




