
import { useFormik } from "formik";

const initialValue = {

    name: '',
    email: '',
    password: '',
    confirmPassword: ''

}

const Formik = () => {


    return (
        <div>

            <div class="flex items-center justify-center min-h-screen bg-gray-100 font-serif">
                <div class="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
                    <form class="space-y-4">

                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirmPassword" required class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <button type="submit" class="w-full btn bg-cyan-700 text-white py-2 px-4 rounded-lg">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Formik;