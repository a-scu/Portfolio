import { useState } from "react";

import { helpHttp } from "../helpers/helpHttp";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function useForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const validateForm = () => {
    const errors = {};

    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexMessage = /^.{1,512}$/;

    if (!form.name.trim()) {
      errors.name = "required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "noValid";
    }

    if (!form.email.trim()) {
      errors.email = "required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "noValid";
    }

    if (!form.message.trim()) {
      errors.message = "required";
    } else if (!regexMessage.test(form.message.trim())) {
      errors.message = "noValid";
    }

    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/scuderialexis2001@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setLoading(false);
          setSuccess(res.success);
          setTimeout(() => {
            setSuccess(null);
          }, 2000);
        });
    }
  };

  return {
    form,
    errors,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
