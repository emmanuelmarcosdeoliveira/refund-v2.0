import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-300">
        <div className="absolute inset-0 bg-gradient-to-br from-green-200/10 via-transparent to-green-100/5" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100/10 px-4 py-1.5 text-sm font-semibold text-green-100">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              Sistema de Reembolso
            </span>
            <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-balance text-gray-100 md:text-7xl">
              Simplifique seus reembolsos com{" "}
              <span className="bg-gradient-to-r from-green-100 to-green-200 bg-clip-text text-transparent">
                Refund
              </span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-pretty text-gray-200 md:text-2xl">
              A plataforma para gerenciar solicitações de reembolso. <br />{" "}
              Rápido, transparente e sem complicações.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="group flex h-12 items-center gap-2 rounded-lg bg-green-100 px-8 text-base font-semibold text-white transition-colors hover:bg-green-200"
              >
                Começar Agora
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-gray-300 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance text-gray-100 md:text-5xl">
              Funcionalidades que transformam processos
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-pretty text-gray-200">
              Tudo que você precisa para gerenciar reembolsos de forma eficiente
              e profissional
            </p>
          </div>

          <div className="grid gap-8 max-sm:grid-cols-1 md:grid-cols-2">
            {/* Feature Card 1 */}
            <div className="group rounded-xl border-2 border-gray-300 bg-white p-8 transition-all hover:border-green-100 hover:shadow-lg">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-100/10 text-green-100">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-100">
                Criação Rápida
              </h3>
              <p className="leading-relaxed text-gray-200">
                Funcionários criam solicitações de reembolso em segundos,
                anexando comprovantes e detalhes da despesa.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="group rounded-xl border-2 border-gray-300 bg-white p-8 transition-all hover:border-green-100 hover:shadow-lg">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-200/10 text-green-200">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-100">
                Aprovação
              </h3>
              <p className="leading-relaxed text-gray-200">
                Gerentes revisam e aprovam solicitações com visualização
                completa de documentos e histórico.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="group rounded-xl border-2 border-gray-300 bg-white p-8 transition-all hover:border-green-100 hover:shadow-lg">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-100/10 text-green-100">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-100">
                Preview de Imagens
              </h3>
              <p className="leading-relaxed text-gray-200">
                Visualize comprovantes em alta qualidade diretamente na
                plataforma, sem downloads desnecessários.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="group rounded-xl border-2 border-gray-300 bg-white p-8 transition-all hover:border-green-100 hover:shadow-lg">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-200/10 text-green-200">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-100">
                Perfis Personalizados
              </h3>
              <p className="leading-relaxed text-gray-200">
                Sistema com dois perfis distintos: Funcionário para solicitar e
                Gerente para aprovar reembolsos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Profiles Section */}
      <section className="border-b border-gray-300 bg-gray-400/30 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance text-gray-100 md:text-5xl">
              Dois perfis, uma solução completa
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-pretty text-gray-200">
              Cada usuário tem acesso às ferramentas certas para sua função
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Employee Profile */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-300 bg-white">
              <div className="bg-gradient-to-br from-green-100/10 to-green-100/5 p-8">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold text-gray-100">
                  Perfil Funcionário
                </h3>
                <p className="text-lg text-gray-200">
                  Solicite reembolsos de forma simples e rápida
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-green-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-100">
                        Criar Solicitações
                      </p>
                      <p className="text-sm text-gray-200">
                        Preencha formulários intuitivos com todos os detalhes da
                        despesa
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-green-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-100">
                        Anexar Comprovantes
                      </p>
                      <p className="text-sm text-gray-200">
                        Faça upload de notas fiscais e recibos em diversos
                        formatos
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-green-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-100">
                        Histórico Pessoal
                      </p>
                      <p className="text-sm text-gray-200">
                        Acesse todo o histórico de reembolsos anteriores
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manager Profile */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-300 bg-white">
              <div className="bg-gradient-to-br from-green-200/10 to-green-200/5 p-8">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-200 text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold text-gray-100">
                  Perfil Gerente
                </h3>
                <p className="text-lg text-gray-200">
                  Gerencie e aprove solicitações com eficiência
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-green-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-100">
                        Revisar Solicitações
                      </p>
                      <p className="text-sm text-gray-200">
                        Visualize todas as solicitações pendentes em um painel
                        centralizado
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-green-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-100">
                        Preview de Comprovantes
                      </p>
                      <p className="text-sm text-gray-200">
                        Abra e visualize imagens de comprovantes em alta
                        qualidade
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 shrink-0 text-green-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-100">
                        Aprovar ou Rejeitar
                      </p>
                      <p className="text-sm text-gray-200">
                        Tome decisões rápidas com todas as informações
                        necessárias
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-balance text-gray-100 md:text-5xl">
              Como funciona o Refund?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-pretty text-gray-200">
              Um processo simples e transparente do início ao fim
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-white">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-gray-100">
                    Funcionário cria a solicitação
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-200">
                    O funcionário acessa sua conta, preenche um formulário
                    simples com os detalhes da despesa (valor, categoria,
                    descrição) e faz o upload do comprovante.{" "}
                  </p>
                  <div className="rounded-lg border border-gray-300 bg-white p-4">
                    <p className="text-sm font-medium text-gray-100">
                      💡 <span className="font-bold">Dica:</span> Tire fotos
                      claras dos comprovantes para agilizar a aprovação!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl font-bold text-white">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-gray-100">
                    Gerente recebe a notificação
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-200">
                    No painel de controle, ele visualiza todas as solicitações,
                    organizadas por, valor e prioridade, facilitando a gestão do
                    fluxo de aprovações.
                  </p>
                  <div className="rounded-lg border border-gray-300 bg-white p-4">
                    <p className="text-sm font-medium text-gray-100">
                      ⚡ <span className="font-bold">Rápido:</span> Vé em tempo
                      Real em mantêm todos atualizados!
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-200 text-2xl font-bold text-white">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-gray-100">
                    Análise e preview do comprovante
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-200">
                    O gerente clica na solicitação e visualiza todos os
                    detalhes. Com um clique no comprovante, abre-se um preview
                    em alta qualidade da imagem, permitindo verificar a
                    autenticidade e conformidade do documento sem precisar fazer
                    download.
                  </p>
                  <div className="rounded-lg border border-gray-300 bg-white p-4">
                    <p className="text-sm font-medium text-gray-100">
                      🔍 <span className="font-bold">Zoom: </span>
                      Resolução de imagens de alta qualidade!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-300 bg-gradient-to-br from-green-100/5 via-transparent to-green-200/5 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-balance text-gray-100 md:text-5xl">
              Pronto para revolucionar seus reembolsos?
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-pretty text-gray-200">
              Simplifique o processos de reembolso com o Refund. Comece
              gratuitamente hoje mesmo!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="group flex h-14 items-center gap-2 rounded-lg bg-green-100 px-10 text-lg font-semibold text-white transition-colors hover:bg-green-200"
              >
                Experimentar Grátis
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
