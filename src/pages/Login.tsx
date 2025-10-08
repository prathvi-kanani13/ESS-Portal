import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.png";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import OTPDialog from "../dialogs/OtpDialog";

interface LoginForm {
  employeeId: string;
  password: string;
}

const schema = yup.object({
  employeeId: yup.string().required("Employee ID is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);

  const form = useForm<LoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      employeeId: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Login data:", data);
    setOtpDialogOpen(true);
  };

  return (
    <div
      className="flex min-h-screen w-full bg-cover bg-center flex-col md:flex-row relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img
        src={logo}
        alt="Logo"
        className="absolute top-6 md:top-12 left-6 md:left-16 w-28 md:w-40 lg:w-48 h-auto object-contain filter invert brightness-0"
      />

      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-16 w-full md:w-1/2 text-white text-center md:text-left">
        <div className="mt-24 md:mt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Login into <br className="hidden md:block" /> your account
          </h1>
          <p className="mt-4 text-[18px] md:text-[22px] text-[#AFAFAF] pt-4">
            Let us make the circle bigger!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end justify-center w-full md:w-1/2 px-4 md:px-8 lg:px-20">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12 w-full max-w-sm sm:max-w-md md:max-w-[500px] lg:max-w-[550px] mt-10 md:mt-20">
          {/* HTML forms automatically submit when you press Enter inside any input field */}
          <Form {...form}>     
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 md:space-y-8"
            >
              <FormField
                control={form.control}
                name="employeeId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#696969] text-[20px] md:text-[22px]">
                      Employee ID
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your Employee ID"
                        autoFocus
                        {...field}
                        className="w-full px-4 py-4 md:py-6 border-[#B2B2B2] rounded-md text-[14px] md:text-[16px] placeholder:text-[#C8C8C8] placeholder:font-medium focus:ring-2 focus:outline-none"
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
                    <FormLabel className="text-[#696969] text-[20px] md:text-[22px]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                        className="w-full px-4 py-4 md:py-6 border-[#B2B2B2] rounded-md text-[14px] md:text-[16px] placeholder:text-[#C8C8C8] placeholder:font-medium focus:ring-2 focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                <div className="text-[16px] md:text-[18px] text-gray-600">
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
                  className="py-5 md:py-7 px-10 md:px-14 bg-[#377DFF] text-white text-[16px] rounded-lg font-medium transition"
                >
                  LOGIN
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-6 md:mt-10">
          <p className="text-sm text-white font-medium text-center">
            © 2025 EASYPAYPACK. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* OTP Dialog */}
      <OTPDialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen} />
    </div>
  );
}
