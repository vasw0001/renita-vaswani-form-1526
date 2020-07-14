let em = document.getElementById('email');
let fn = document.getElementById('fullname');
let msg = document.getElementById('message');
let submit = document.getElementById('submit-data');

let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 
// event-handler
function handleForm() 

{
	
	// empty buckets, one for inputs, the other for errors
	let uinput = {};
	let errors = [];
    
    
    // validating if user input exist at all
	if (fn.value !== '') {	
		 
			uinput.fullname = fn.value;	
	} 
    
    else {
		errors.push('Full name is missing');
	}
    
     // validating if user input exist at all
	if (msg.value !== '') {	
		 
			uinput.message = msg.value;	
	} 
    
    else {
		errors.push('Message is missing');
	}
    
    
    //validating email
    if (em.value !== '') {
		
		// validate email format
		if (pattern.test(em.value)) {
			uinput.email = em.value;
		} else {
			errors.push('Invalid email!');
		}
		
	} else {
		errors.push('Email is missing');
	}
    
    
    
    
   
	
    
    
    
    // printing either feedback or errors
	if (errors.length === 0) {
		console.log('COLLECTED DATA', uinput);
	} 
    else {
    
		console.log('ERRORS', errors);
	}
    
        
}
    

submit.addEventListener('click', handleForm);
