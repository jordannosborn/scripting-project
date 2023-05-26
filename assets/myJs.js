const cert3 = document.getElementById('cert3');

const cert4 = document.getElementById('cert4');

const cert3Content = document.getElementById('cert3-content');

const cert4Content = document.getElementById('cert4-content');

cert3.addEventListener('click', function handleClick() {
    cert3Content.style.display = 'block';
    cert4Content.style.display = 'none';
  });

cert4.addEventListener('click', function handleClick() {
    cert4Content.style.display = 'block';
    cert3Content.style.display = 'none';
  });

const enquiryForm = document.getElementById('enquiry-form');

const enquirySubmit = document.getElementById('enquiry-submit');

const enquiryButton = document.getElementById('enquiry-button');

enquiryButton.addEventListener('click', function handleClick() {
    enquirySubmitContent.style.display = 'block';
    enquiryFormContent.style.display = 'none'; 
    enquiryButtonContent.style.display = 'block';
  });



