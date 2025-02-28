
import FormContent from "../components/Form/Form.tsx";
import { AvailableIcons } from "../components/ui/Icon.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface FormSectionProps {
  icon?: AvailableIcons;
  title: string;
  subtitle: string;
  formTitle: string;
  buttonText: string;
}

export default function Form({
  icon = 'Graphic',
  title = 'Alcance clientes e impulsione suas vendas com inteligência de mercado e listas B2B!',
  subtitle = 'Tenha um mailing eficaz com uma captação humanizada e alcance resultados favoráveis.',
  formTitle = 'Preencha seus dados aqui',
  buttonText = 'Quero falar com um especialista!'
}: FormSectionProps) {

  return (
    <section className="rounded-2xl py-12 px-4 md:px-8 lg:px-16 bg-secondary m-[16px]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {icon && (
            <div className="mb-4">
              <Icon id={icon} size={36} />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1F8F6] mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-[#F1F8F6]">
            {subtitle}
          </p>
        </div>
        <FormContent formTitle={formTitle} buttonText={buttonText} />
      </div>
    </section>
  );
};
