const form = document.querySelector('#enrollment-form');

const input_name = document.querySelector('#name');
const input_email = document.querySelector('#email');
const input_website = document.querySelector('#website');
const input_image = document.querySelector('#image');
const input_gender = document.getElementsByClassName('gender');
const input_skills = document.getElementsByClassName('skills');


const btn_enroll = document.querySelector('#btn-enroll');
const btn_reset = document.querySelector('#btn-reset');
const enrolled = document.querySelector('.student-table');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = input_name.value;  
    const email = input_email.value;  
    const website = input_website.value;  
    const image = input_image.value;
    //const gender = input_gender.value;
    //const input_skills = input_skills.value;  

    
    

    const record = document.createElement("tr");
    //record.classList.add("record");
    enrolled.appendChild(record);

    const L_data = document.createElement("td");
    record.appendChild(L_data);

    const R_data = document.createElement("td");
    record.appendChild(R_data);

    const enrolled_image = document.createElement("img");
    
    R_data.appendChild(enrolled_image);
    enrolled_image.src = image;
    input_image.value = "";

    const enrolled_name = document.createElement("div");
    record.classList.add("enrolled-name");
    L_data.appendChild(enrolled_name);
    enrolled_name.innerText = "Name: " + name;
    input_name.value = "";

    const enrolled_gender = document.createElement("div");
    L_data.appendChild(enrolled_gender);
    for(i=0; i<=1; i++){
        if(input_gender[i].checked === true){
            enrolled_gender.innerText = "Gender: " + input_gender[i].value;
            input_gender[i].checked = false;
        }
    }

    const enrolled_email = document.createElement("div");
    record.classList.add("enrolled-email");
    L_data.appendChild(enrolled_email);
    enrolled_email.innerText = "Email: " + email;
    input_email.value = "";

    const enrolled_website = document.createElement("div");
    record.classList.add("enrolled-website");
    L_data.appendChild(enrolled_website);
    enrolled_website.innerText = "Website: " + website;
    input_website.value = "";

    const enrolled_skills = document.createElement("div");
    L_data.appendChild(enrolled_skills);
    var str = '';
    for(i=0; i<=2; i++){
        if(input_skills[i].checked === true){
            str += input_skills[i].value + " ";
            input_skills[i].checked = false;
        }
    }
    enrolled_skills.innerText = "Skills: " + str;

    








    


});