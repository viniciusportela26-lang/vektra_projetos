import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Levantamento Técnico",
    description:
      "Análise completa da necessidade industrial, aplicação, fabricação e operação.",
  },

  {
    number: "02",
    title: "Desenvolvimento 3D",
    description:
      "Modelagem tridimensional completa para validação estrutural e operacional.",
  },

  {
    number: "03",
    title: "Validação do Projeto",
    description:
      "Revisão técnica de montagem, usinagem, soldagem e fabricação.",
  },

  {
    number: "04",
    title: "Detalhamento Técnico",
    description:
      "Criação de desenhos técnicos completos para produção industrial.",
  },

  {
    number: "05",
    title: "Fabricação",
    description:
      "Projetos desenvolvidos para integração real com o chão de fábrica.",
  },

  {
    number: "06",
    title: "Suporte Técnico",
    description:
      "Acompanhamento técnico e suporte durante fabricação e montagem.",
  },
];

function Process() {
  return (
    <section
      id="processo"
      className="section bg-[#101726] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <p className="text-[#4A7DB8] uppercase tracking-[4px] mb-4">
            Processo
          </p>

          <h2 className="title">
            Desenvolvimento técnico estruturado para fabricação real.
          </h2>

          <p className="subtitle max-w-3xl mt-6">
            Cada projeto desenvolvido pela Vektra Projetos segue um
            fluxo técnico pensado para garantir precisão, viabilidade
            industrial e máxima eficiência produtiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                relative
                border
                border-white/10
                bg-white/5
                rounded-3xl
                p-8
                overflow-hidden
                hover:bg-white/10
                transition
              "
            >
              <div
                className="
                  absolute
                  top-0
                  right-0
                  text-[120px]
                  font-black
                  text-white/5
                  leading-none
                "
              >
                {step.number}
              </div>

              <div className="relative z-10">
                <span
                  className="
                    inline-block
                    bg-[#1E3A5F]
                    text-sm
                    px-4
                    py-2
                    rounded-full
                    mb-6
                  "
                >
                  Etapa {step.number}
                </span>

                <h3 className="text-3xl font-semibold mb-5">
                  {step.title}
                </h3>

                <p className="text-[#C7D0D9] leading-8">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
