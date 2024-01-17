import useForm from "../hooks/useForm";

import Button from "./Button";

import Send from "./icons-react/Send";
import Loading from "./icons-react/Loading";
import CheckMark from "./icons-react/CheckMark";
import Close from "./icons-react/Close";

export default function ContactForm() {
  const { form, errors, loading, success, handleChange, handleSubmit } =
    useForm();

  const ERROR_CODES = {
    required: "El campo es requerido",
    noValid: "El formato no es valido",
  };

  return (
    <form className="flex flex-col w-full gap-2 max-w-80">
      <label htmlFor="name" className="text-sm">
        Nombre:
      </label>
      <input
        required
        maxLength={64}
        id="name"
        name="name"
        value={form.name}
        placeholder="..."
        onChange={handleChange}
        className="w-full px-2.5 py-1.5 bg-transparent hover:border-sky-400 transition-colors ease-linear active:border-sky-400 text-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:font-extraligh border rounded outline-1 outline-transparent outline-offset-0 outline focus-visible:outline-sky-400 focus-visible:border-sky-400"
      />

      <p
        className={`font-medium text-xs ${
          errors.name ? "text-red-400" : "text-transparent"
        }`}
      >
        {ERROR_CODES[errors.name] || "..."}
      </p>

      <label htmlFor="email" className="text-sm">
        Email:
      </label>
      <input
        required
        maxLength={128}
        id="email"
        name="email"
        value={form.email}
        placeholder="..."
        onChange={handleChange}
        className="w-full px-2.5 py-1.5 bg-transparent hover:border-sky-400 transition-colors ease-linear active:border-sky-400 text-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:font-extraligh border rounded outline-1 outline-transparent outline-offset-0 outline focus-visible:outline-sky-400 focus-visible:border-sky-400"
      />

      <p
        className={`font-medium text-xs ${
          errors.email ? "text-red-400" : "text-transparent"
        }`}
      >
        {ERROR_CODES[errors.email] || "..."}
      </p>

      <label htmlFor="message" className="text-sm">
        Mensaje:
      </label>
      <textarea
        required
        maxLength={512}
        id="message"
        name="message"
        value={form.message}
        placeholder="..."
        cols={30}
        rows={10}
        onChange={handleChange}
        className="w-full px-2.5 py-1.5 bg-transparent hover:border-sky-400 transition-colors ease-linear active:border-sky-400 text-sm placeholder:text-neutral-400 placeholder:text-xs placeholder:font-extraligh border rounded outline-none outline-1 outline-transparent outline outline-offset-0 focus-visible:outline-sky-400 resize-none focus-visible:border-sky-400"
      />

      <p
        className={`font-medium text-xs ${
          errors.message ? "text-red-400" : "text-transparent"
        }`}
      >
        {ERROR_CODES[errors.message] || "..."}
      </p>

      <div className="mx-auto">
        {loading ? (
          <div className="w-fit group flex gap-2 items-center px-2.5 border py-1.5 rounded">
            <span className="text-sm font-medium truncate">Enviando</span>
            <Loading className="size-3.5 animate-spin" />
          </div>
        ) : success ? (
          <div className="w-fit group flex gap-2 items-center px-2.5 border py-1.5 rounded">
            <span className="text-sm font-medium truncate">Enviado</span>
            <CheckMark className="size-3.5 " />
          </div>
        ) : success === false ? (
          <div className="w-fit group flex gap-2 items-center px-2.5 border py-1.5 rounded">
            <span className="text-sm font-medium truncate">Error</span>
            <Close className="size-3.5 " />
          </div>
        ) : !loading && success === null ? (
          <Button onClick={handleSubmit} Icon={Send}>
            Enviar
          </Button>
        ) : (
          <div className="w-fit group flex gap-2 items-center px-2.5 border py-1.5 rounded">
            <span className="text-sm font-medium truncate">
              Error Desconocido
            </span>
            <Close className="size-3.5 " />
          </div>
        )}
      </div>
    </form>
  );
}
