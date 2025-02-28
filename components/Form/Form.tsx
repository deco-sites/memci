export interface Props {
  formTitle: string;
  buttonText: string;
}

export default function FormContent({ formTitle, buttonText }: Props) {
  return (
    <div className="w-full md:w-1/2 bg-[#F1F6F8] rounded-lg shadow-lg p-4 md:p-8">
      <h2 className="text-xl font-semibold text-center mb-6 text-secondary">
        {formTitle}
      </h2>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Nome
          </label>
          <input
            id="nome"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Vinícius Tibúrcio"
          />
        </div>

        <div>
          <label
            htmlFor="cargo"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Cargo
          </label>
          <input
            id="cargo"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Designer"
          />
        </div>

        <div>
          <label
            htmlFor="emailCorporativo"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Email corporativo
          </label>
          <input
            id="emailCorporativo"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="seu@email.com.br"
          />
        </div>

        <div>
          <label
            htmlFor="whatsapp"
            className="block text-sm font-medium text-secondary mb-1"
          >
            WhatsApp
          </label>
          <input
            id="whatsapp"
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="(99) 99999-9999"
          />
        </div>

        <div>
          <label
            htmlFor="siteEmpresa"
            className="block text-sm font-medium text-secondary mb-1"
          >
            Site da empresa
          </label>
          <input
            id="siteEmpresa"
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="www.minhaempresa.com.br"
          />
        </div>

        <button
          type="submit"
          className="w-full py-[16px] lg:py-[20px] px-[20px] lg:px-[28px] bg-[#0870FB] hover:bg-[#0099CC] text-white font-medium rounded-full transition duration-200 mt-6"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
