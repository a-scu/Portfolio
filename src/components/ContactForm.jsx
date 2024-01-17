import useForm from "../hooks/useForm";
import Button from "./Button";
import Loading from "./Loading";

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
          <span class="w-fit group flex gap-1 items-center px-2.5 border py-1.5 text-sm font-medium truncate border-white rounded">
            Enviando
            <Loading className="size-3.5 animate-spin" />
          </span>
        ) : success ? (
          <span class="w-fit group flex gap-1 items-center px-2.5 border py-1.5 text-sm font-medium truncate border-white rounded">
            Enviado
            <ion-icon name="checkmark" class="size-3.5"></ion-icon>
          </span>
        ) : success === false ? (
          <span class="w-fit group flex gap-1 items-center px-2.5 border py-1.5 text-sm font-medium truncate border-white rounded">
            Error
            <ion-icon name="close" class="size-3.5"></ion-icon>
          </span>
        ) : !loading && success === null ? (
          <Button onClick={handleSubmit} icon="send">
            Enviar
          </Button>
        ) : (
          <span class="w-fit group flex gap-1 items-center px-2.5 border py-1.5 text-sm font-medium truncate border-white rounded">
            Error Desconocido
            <ion-icon name="close" class="size-3.5"></ion-icon>
          </span>
        )}
      </div>
    </form>
  );
}
