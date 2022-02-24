import {useFormik} from "formik";

const Registration = () =>{
    const formik = useFormik ( {
        initialValues: {
            email: "initialValuesgmail.com",
            password: "",
            age: "",
            fullname: "",
        },
        onSubmit(values) {
            console.log(`form Submit`);
            console.log(values);
            let ob = {
                name: formik.values.fullname,
                email: formik.values.email,
                age: formik.values.age,
                password: formik.values.password,
            }
            let bj = JSON.stringify(ob);
            localStorage.setItem(formik.values.fullname , bj);

        },
        validate() {
            const errors = {};

            if (formik.values.password.length < 4 ) {
                errors.password = "Password must be more than 4 characters";
            }
            if (formik.values.password.length > 20 ) {
                errors.password = "Password must be less than 20 characters";
            }
            if(formik.values.email.length <= 5) {
                errors.email = "Email must be more than 5 characters" ;
            }
            if(formik.values.email.length >= 30) {
                errors.email = "Email must be less than 30 characters" ;
            }
            if(formik.values.age < 18) {
                errors.age = "Age must be greater than 18" ;
            }
            if(formik.values.age > 120) {
                errors.age = "Age must be lesser than 120" ;
            }
            if(formik.values.fullname.length < 5) {
                errors.fullname = "Name must be more than 5 characters" ;
            }
            if(formik.values.fullname.length > 20) {
                errors.fullname = "Name must be less than 20 characters" ;
            }
            return errors;
        }
    });
    return ( 
        <div className="priceTodo">
            <div className="TodoForm">
                <form onSubmit={formik.handleSubmit} noValidate >
                    <input className="productInput"
                    type="email" name="email" value={formik.values.email}
                    onChange={formik.handleChange} /> <br/>
                    <div className="text-danger">
                        {formik.errors.email ? formik.errors.email : null}
                    </div>
                    <input  className="productInput"
                    type="password" name="password" value={formik.values.password} placeholder="password"
                    onChange={formik.handleChange} /><br/>
                    <div className="text-danger">
                        {formik.errors.password ? formik.errors.password : null}
                    </div>
                    <input className="productInput"
                    type="number" name="age" value={formik.values.age} placeholder="Age"
                    onChange={formik.handleChange} /><br/>
                    <div className="text-danger">
                        {formik.errors.age ? formik.errors.age : null}
                    </div>
                    <input className="productInput"
                    type="text" name="fullname" value={formik.values.fullname} placeholder="Fullname"
                    onChange={formik.handleChange} /><br/>
                    <div className="text-danger">
                        {formik.errors.fullname ? formik.errors.fullname : null}
                    </div>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Registration;