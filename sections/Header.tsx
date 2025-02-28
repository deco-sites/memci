import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

/**
 * @title {{{alt}}}
 */
interface Media {
  icon: ImageWidget;
  url?: string;
  alt?: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    buttons: CTA[];
  };

  social?: {
    medias: Media[];
  };
}

export default function Header({
  logo = {
    src: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    buttons: [
      { id: "change-me-1", href: "/", text: "Change me", outline: false },
      { id: "change-me-2", href: "/", text: "Change me", outline: true },
    ],
  },
  social = {
    medias: [{ icon: "ArrowLeft", url: "http://" }],
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end max-w-[1448px] mx-auto">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
        <a href="/">
          <Image
            src={logo.src || ""}
            width={140.34}
            height={27.12}
            alt={logo.alt}
          />
        </a>

        <div class="hidden items-center justify-end font-medium lg:flex w-full">
          <ul class="flex gap-12">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="leading-4 text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul class="flex pl-12">
            {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-medium btn btn-secondary rounded-full ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))}
          </ul>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button text-secondary p-0"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50 overflow-hidden">
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay text-secondary"
        />

        <div class="flex flex-col gap-2 min-h-full w-full bg-base-100 text-base-content">
          <div class="flex justify-between items-center px-4 pl-0 border border-[#F2F7FF]">
            <a class="p-4" href="/">
              <Image
                src={logo.src || ""}
                width={100}
                height={28}
                alt={logo.alt}
              />
            </a>

            <ul class="p-4 flex items-center gap-3">
              {navigation.buttons?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href ?? "#"}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-medium btn btn-secondary rounded-full ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </ul>
            <label
              htmlFor="mobile-drawer-nav"
              aria-label="close sidebar"
              class="drawer-overlay font-thin text-[32px]"
            >
              <Icon
                id="Close-icon"
                class="text-secondary font-medium"
                width="16"
                height="16"
              />
            </label>
          </div>

          <ul class="menu px-4">
            {navigation?.links.map((link) => (
              <li>
                <a
                  class="text-2xl font-medium text-secondary px-0"
                  href={link.url}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div class="px-4">
            <div class="mb-[18px] mt-12">
              <label class="text-secondary font-normal">
                Nos siga nas redes sociais
              </label>
            </div>
            <ul class="flex items-center gap-4">
              {social.medias.map((social) => (
                <li>
                  <a href={social.url}>
                    <Image
                      width={24}
                      height={24}
                      class="object-fit z-10"
                      sizes="(max-width: 24px) 100vw, 30vw"
                      src={social.icon}
                      alt={social.alt}
                      decoding="async"
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </nav>
  );
}
