function uploadSelected(subject) {

    var uploadType = document.getElementById(`upload-type-${subject}`).value;

    var fileInput = document.getElementById(`upload-${subject}`);

    var fileName = fileInput.value.split('\\').pop(); // Get the file name from the path



    // Handle the file upload based on the selected type

    switch (uploadType) {

        case 'notes':

            uploadNotes(subject, fileName);

            break;

        case 'question-bank':

            uploadQuestionBank(subject, fileName);

            break;

        case 'reference-materials':

            uploadReferenceMaterials(subject, fileName);

            break;

        case 'important-questions':

            uploadImportantQuestions(subject, fileName);

            break;

        case 'previous-question-papers':

            uploadPreviousQuestionPapers(subject, fileName);

            break;

        case 'syllabus':

            uploadSyllabus(subject, fileName);

            break;

        default:

            console.error('Invalid upload type selected');

    }

}



// Define functions to handle different types of uploads for new subjects

function uploadNotes(subject, fileName) {

    console.log(`Uploading Notes for ${subject}: ${fileName}`);

    // Add your logic for handling Notes upload

}



function uploadQuestionBank(subject, fileName) {

    console.log(`Uploading Question Bank for ${subject}: ${fileName}`);

    // Add your logic for handling Question Bank upload

}



function uploadReferenceMaterials(subject, fileName) {

    console.log(`Uploading Reference Materials for ${subject}: ${fileName}`);

    // Add your logic for handling Reference Materials upload

}



function uploadImportantQuestions(subject, fileName) {

    console.log(`Uploading Important Questions for ${subject}: ${fileName}`);

    // Add your logic for handling Important Questions upload

}



function uploadPreviousQuestionPapers(subject, fileName) {

    console.log(`Uploading Previous Question Papers for ${subject}: ${fileName}`);

    // Add your logic for handling Previous Question Papers upload

}



function uploadSyllabus(subject, fileName) {

    console.log(`Uploading Syllabus for ${subject}: ${fileName}`);

    // Add your logic for handling Syllabus upload

}

function performSearch() {

    // Get the user input from the search input

    var searchInput = document.getElementById('searchInput').value.toLowerCase();



    // Get all subject elements

    var subjects = document.querySelectorAll('.subject');



    // Loop through each subject and check if it matches the search criteria

    subjects.forEach(function (subject) {

        var subjectName = subject.querySelector('h2').innerText.toLowerCase();



        // Toggle visibility based on the search criteria

        if (subjectName.includes(searchInput)) {

            subject.style.display = 'block';

        } else {

            subject.style.display = 'none';

        }

    });

}







