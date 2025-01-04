const validateForm = (id: string, value: string) => {
    switch (id) {
        case 'name':
            if (value.length === 0) return "Name is required";
            if (value.length < 3) return "Name should have at least three characters";
            if (!/^[a-zA-Z\s]+$/.test(value)) return "Name cannot contain numbers or special characters";
            return "";
        case 'email':
            if(value.length==0)return "Email is required!";
            if(!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(value))return "Email is invalid";
            return "";
        case 'phone':
            if(value.length==0)return "Phone number is required";
            if(value.length!=10) return "Phone number should contain atleast 10 digits";
            if(!/^[0-9]*$/.test(value))return "Phone number is invalid!";
            return "";
        case 'message':
            if(value.length==0)return "Message is required";
            return "";
         default:
            return "";
    }
};

export { validateForm };
