export interface Props {
  title?: string;
  description?: string;
}

export default function FormsFooter({
  title = "Vamos conversar!",
  description = "Nos conte sobre o seu projeto e entenda melhor como podemos colaborar."
}: Props) {
  return (
    <div class="relative">
      {/* Image Background */}
      <div class="absolute inset-0 overflow-hidden">
        <img 
          src="https://assets.decocache.com/derivative/9c51b37a-0a0b-41e8-bebc-98bea5946f87/Jubarte-I-(1).jpg"
          alt="Background"
          class="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div class="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        {/* Contact Section */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Side - Text */}
          <div class="flex flex-col justify-center">
            <h2 class="text-white font-sans font-normal text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-none mb-6">
              {title}
            </h2>
            <p class="text-white/90 text-lg lg:text-xl leading-relaxed max-w-lg">
              {description}
            </p>
          </div>

          {/* Right Side - Form */}
          <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl max-w-md mx-auto lg:mx-0">
            <form class="space-y-4">
              {/* Name Field */}
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-0 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email Field */}
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-0 focus:border-transparent transition-all duration-200"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  class="w-full px-4 py-3 bg-[#F5F5F5] border-0 rounded-lg focus:bg-white focus:ring-0 focus:border-transparent transition-all duration-200 resize-none text-[#999999] placeholder-[#999999]"
                  placeholder="Conte-nos sobre seu projeto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div class="border-t border-white/20 pt-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {/* Logo */}
            <div class="md:col-span-2">
              <img 
                src="https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg" 
                alt="Deriva Logo" 
                class="h-12 lg:h-16"
              />
            </div>

            {/* Social Media Icons */}
            <div class="flex justify-center md:justify-end space-x-6">
              {/* Instagram */}
              <a href="https://www.instagram.com/deriva_co?igsh=eWl4anFkc3JkYzBh" class="text-white/80 hover:text-white transition-colors duration-200">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/deriva-earth" class="text-white/80 hover:text-white transition-colors duration-200">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>



              {/* YouTube */}
              <a href="#" class="text-white/80 hover:text-white transition-colors duration-200">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div class="text-center md:text-right text-white/60 text-sm">
              © 2025 Deriva. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
