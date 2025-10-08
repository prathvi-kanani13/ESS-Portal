import backgroundImage from "../assets/background.png";
import forgot from "../assets/forgot.png";
import logo from "../assets/logo.png";

export default function ForgotPassword() {
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center px-4"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <img
                src={logo}
                alt="Logo"
                className="absolute top-6 md:top-12 left-6 md:left-16 w-28 md:w-40 lg:w-48 h-auto object-contain filter invert brightness-0"
            />

            <div
                className="w-full max-w-md md:max-w-xl h-64 md:h-[470px] bg-white rounded-[17px] shadow-lg 
                           bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${forgot})` }}
            ></div>
        </div>
    );
}
