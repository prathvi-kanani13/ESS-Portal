import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.png";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface LoginForm {
  email: string;
  password: string;
}

// Yup validation schema, errors handling
const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();

  const form = useForm<LoginForm>({  // useForm is the main hook from react-hook-form
    resolver: yupResolver(schema), // Connects the Yup schema to react-hook-form.
    defaultValues: { // form field set it to show errors 
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => { // after validation pass the data is valid so navigate the dashboard
    console.log("Form Data:", data);
    navigate("/dashboard");
  };

  return (
    <div
      className="flex h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col justify-center px-16 w-1/2 text-white">
        <div className="mb-6">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-20 left-20 w-55 h-auto object-contain filter invert brightness-0"
          />
          <h1 className="text-7xl font-semibold leading-none ml-5 mt-12">
            Login into <br /> your account
          </h1>
          <p className="mt-4 text-[22px] text-[#AFAFAF] ml-5 pt-7">
            Let us make the circle bigger!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 ml-100">
        <div className="bg-white rounded-2xl shadow-lg p-12 w-[550px] mt-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#696969] text-[25px]">User id</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                        {...field}
                        className="w-full px-4 py-6 border-[#B2B2B2] rounded-md text-[14px] placeholder:text-[17px] placeholder:text-[#C8C8C8] placeholder:font-medium focus:ring-2 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#696969] text-[25px]">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                        className="w-full px-4 py-6 border-[#B2B2B2] rounded-md text-[14px] placeholder:text-[17px] placeholder:text-[#C8C8C8] placeholder:font-medium focus:ring-2 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between gap-4 pt-4">
                <div className="text-[18px] text-gray-600">
                  <span className="font-bold">Did you?</span>{" "}
                  <button
                    type="button"
                    className="font-bold hover:underline"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password
                  </button>
                </div>

                <Button
                  type="submit"
                  className="py-7 px-14 bg-[#377DFF] text-white text-[16px] rounded-lg font-medium transition"
                >
                  LOGIN
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <p className="text-sm text-white font-medium text-center mt-20">
          © 2025 EASYPAYPACK. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
