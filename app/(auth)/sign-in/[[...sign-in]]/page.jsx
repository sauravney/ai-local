import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="banner"
            src="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to AI Course Generator
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Effortlessly generate customized courses with AI. Create
              structured lessons and resources tailored to any topic in minutes!
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to AI Course Generator
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Effortlessly generate customized courses with AI. Create
                structured lessons and resources tailored to any topic in
                minutes!
              </p>
            </div>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
