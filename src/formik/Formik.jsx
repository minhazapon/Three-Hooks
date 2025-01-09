
import { useFormik, Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const FormikForm = () => {

    const Validation = Yup.object({
        name: Yup.string().required('Name is Required'),
        email: Yup.string().email('Invalid Email Address').required('Email is Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "password is not matched").required("Please Enter Confirm password  ")
    })

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: initialValues,
        validationSchema: Validation,
        onSubmit: (values) => {
            console.log(values)
            if (values) {
                Swal.fire({
                    title: 'Sign Up Done!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        }
    })

    return (
        <div>

            <div className="flex items-center justify-center min-h-screen bg-gray-100 font-serif">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
                    <Formik>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                {errors.name && <small>{errors.name}</small>}

                            </div>

                            <div>
                                <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none 
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                {errors.email && <small>{errors.email}</small>}
                            </div>

                            <div>
                                <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="password" name="password"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                {errors.password && <small>{errors.password}</small>}
                            </div>

                            <div>
                                <label for="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input type="password" id="confirm-password" name="confirmPassword"
                                    value={values.confirmPassword}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    required className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none
                                focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                                {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
                            </div>

                            <div>
                                <button type="submit" className="w-full btn bg-cyan-700 text-white py-2 px-4 rounded-lg">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </Formik>
                </div>
            </div>

        </div>
    );
};

export default FormikForm;