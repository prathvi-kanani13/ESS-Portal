import backgroundImage from "../assets/background.png";
import forgot from "../assets/forgot.png";
import logo from "../assets/logo.png";

export default function ForgotPassword() {
    return (
        <div
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            <img
                src={logo}
                alt="Logo"
                className="absolute top-20 left-20 w-55 h-auto object-contain filter invert brightness-0"
            />

            <div
                className="w-[560px] h-[470px] bg-white rounded-[17px] shadow-lg bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${forgot})` }}
            ></div>

        </div>
    );
}
