import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
}

export default function BlogPosts({
  title = "FAQs",
  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  cta,
  questions = [
    {
      title: "Question #1 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #2 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #3 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #4 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
    {
      title: "Question #5 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Vivamus at nulla eros. Sed nec malesuada mauris. Curabitur id ex sed neque rutrum tincidunt. Sed sed lectus nec libero eleifend luctus. Aenean convallis feugiat elit, non tincidunt eros vehicula sed. Phasellus pretium urna sit amet risus interdum tempor.",
    },
  ],
}: Props) {
  return (
    <div class="container lg:mx-auto px-4 lg:px-0 text-sm py-12 lg:py-28 max-w-7xl" style="overflow-x: hidden !important;">
      <style dangerouslySetInnerHTML={{
        __html: `
          .faq-border-gradient {
            border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%) 1 !important;
          }
          .faq-border-gradient-top {
            border-top: 1px solid;
            border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%) 1 !important;
          }
          .faq-border-gradient-bottom {
            border-bottom: 1px solid;
            border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 100%) 1 !important;
          }
          @media (max-width: 1023px) {
            .faq-mobile-container {
              overflow-x: hidden !important;
              max-width: 100vw !important;
              width: 100% !important;
            }
            .faq-mobile-container * {
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
          }
        `
      }} />
      {/* Desktop Layout */}
      <div class="hidden lg:flex lg:flex-row gap-10 lg:gap-20 justify-between">
        <div class="flex-none space-y-6 lg:w-2/5">
          <p class="text-4xl leading-snug">
            {title}
          </p>
          <p class="text-lg">
            {description}
          </p>
          {cta && (
            <a
              key={cta?.id}
              id={cta?.id}
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn btn-primary ${
                cta.outline && "btn-outline"
              }`}
            >
              {cta?.text}
            </a>
          )}
        </div>
        <div class="flex-auto faq-border-gradient-top">
          {questions?.map((question) => (
            <details class="faq-border-gradient-bottom group">
              <summary class="text-lg cursor-pointer py-6 flex ">
                <span class="flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <Icon
                    id="ChevronDown"
                    width={32}
                    height={33}
                    class="stroke-2"
                  />
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div class="block lg:hidden w-full overflow-x-hidden faq-mobile-container">
        <div class="space-y-6 mb-8 w-full">
          <p class="text-3xl leading-snug w-full">
            {title}
          </p>
          <p class="text-base leading-relaxed w-full">
            {description}
          </p>
          {cta && (
            <a
              key={cta?.id}
              id={cta?.id}
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn btn-primary w-full text-center ${
                cta.outline && "btn-outline"
              }`}
            >
              {cta?.text}
            </a>
          )}
        </div>
        <div class="faq-border-gradient-top w-full">
          {questions?.map((question) => (
            <details class="faq-border-gradient-bottom group w-full">
              <summary class="text-base cursor-pointer py-4 flex items-start w-full">
                <span class="flex-auto pr-3 leading-relaxed w-full">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180 mt-1">
                  <Icon
                    id="ChevronDown"
                    width={24}
                    height={24}
                    class="stroke-2"
                  />
                </span>
              </summary>
              <div
                class="leading-relaxed mb-4 group-open:animate-fadeIn px-1 w-full"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
