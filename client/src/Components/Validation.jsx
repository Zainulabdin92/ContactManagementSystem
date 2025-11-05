export default function Validation(values){
    let errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;


    if(values?.name){
        if(values.name === ""){
            errors.name = 'Name should not be empty'
        }else if(values.name.length <3 || values.name.length>30){
            errors.name = 'Name must be between 3-30 characters'
        }else{
            errors.name = ""
        }
    }

    if(values.email === ""){
        errors.email = 'Name should not be empty'
    }else if(!email_pattern.test(values.email)){
        errors.email = 'Invalid email'
    }else{
        errors.email = ""
    }

    if(values.password === ""){
        errors.password = 'Password should not be empty'
    }
    else if(!password_pattern.test(values.password)){
        errors.password = 'Must contain 1 small and capital leter and a number to {8}'
    }
    else{
        errors.password = ""
    }
    return errors;
}