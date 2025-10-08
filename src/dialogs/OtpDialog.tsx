import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface OTPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function OTPDialog({ open, onOpenChange }: OTPDialogProps) {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [error, setError] = useState<string>("");
  const otpContainerRef = useRef<HTMLDivElement>(null);

  // Countdown timer
  useEffect(() => {
    if (!open) return;
    setOtpValue("");
    setError("");
    setTimeLeft(60);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  // Submit on Enter key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleVerifyOTP();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, otpValue]);

  const handleVerifyOTP = (): void => {
    const otp = otpValue.trim();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    if (otp.length < 6) {
      setError("OTP must be 6 digits.");
      return;
    }

    setError("");
    onOpenChange(false);
    navigate("/dashboard");
  };

  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-11/12 max-w-xs sm:max-w-sm bg-white rounded-xl p-5 sm:p-7 shadow-lg border border-gray-200">
        <DialogHeader className="text-center">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-800">
            Enter OTP
          </DialogTitle>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            A 6-digit OTP has been sent to your registered email address.
          </p>
        </DialogHeader>

        <div ref={otpContainerRef} className="flex flex-col items-center mt-4">
          <InputOTP
            maxLength={6}
            onChange={(value: string) => setOtpValue(value)}
            className="space-x-1 sm:space-x-2"
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 text-center text-base sm:text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          <p className="mt-3 text-gray-500 text-sm text-center">
            Time remaining:{" "}
            <span className="font-semibold text-gray-700">{formatTime(timeLeft)}</span>
          </p>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row justify-between mt-5 gap-2 sm:gap-3">
          <Button
            variant="outline"
            className="w-full sm:w-auto px-5 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            className="w-full sm:w-auto px-5 py-2 bg-[#377DFF] text-white"
            onClick={handleVerifyOTP}
            disabled={timeLeft === 0}
          >
            Verify OTP
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
