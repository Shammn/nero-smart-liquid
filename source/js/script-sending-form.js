const forms = document.querySelectorAll('.contact-form');

forms.forEach((form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const fieldName = form.querySelector('[name="name"]');
    const fieldCity = form.querySelector('[name="city"]');
    const fieldPhone = form.querySelector('[name="phone"]');

    console.log(fieldPhone);

    const name = form.name.value;
    const city = form.city.value;
    const phone = form.phone.value;

    if (!/[a-zа-яё]/i.test(name)) {
      fieldName.classList.add('field--invalid');
    }

    if (!/[a-zа-яё]/i.test(city)) {
      fieldCity.classList.add('field--invalid');
    }

    if (!/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/.test(phone)) {
      fieldPhone.classList.add('field--invalid');
    }
  })
})
