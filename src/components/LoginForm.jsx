
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../context/ToastContext.jsx";
import { login } from "../api/mockApi.js";

export default function LoginForm() {

const mutation = useMutation({
  mutationFn: login,
  onSuccess: () => {
    showToast("Welcome back!", "success");
  },
  onError: (error) => {
    const message =
      error.response?.data?.message || "Something went wrong";
    showToast(message, "error");
  },
});
}