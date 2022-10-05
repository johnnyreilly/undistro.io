import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { translate } from "@docusaurus/Translate";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Política de Privacidade | UnDistro</title>
        <meta
          name="description"
          content={translate({
            id: "description",
            message:
              "Visualize, create, and manage one or more clusters in a way that is both standardized and centralized. Get early access to this product.",
          })}
        />
      </Head>
      <main className="bg-dark min-h-screen">
        <div className="contact">
          <div className="section">
            <h1 className="text-white text-4xl lg:text-5xl font-bold font-sf-pro">
              Política de Privacidade
            </h1>
          </div>
        </div>
        <div className="section text-white text-lg text-inter text-opacity-70 py-16 flex flex-col space-y-8">
          <p className="text-2xl font-bold uppercase pt-8 text-left">
            QUAIS DADOS COLETAMOS SOBRE VOCÊ?
          </p>
          <p>
            Para que possamos disponibilizar melhores serviços e um bom
            relacionamento, torna-se imprescindível a coleta de algumas
            informações pessoais. A Getup poderá coletar dados fornecidos
            diretamente por você, por terceiros ou de forma automática,
            dependendo do serviço prestado. Veja, abaixo, um pouco mais
            detalhadamente, algumas das formas de coleta de dados pessoais:
          </p>
          <div className="overflow-x-auto relative">
            <table className="w-full text-left my-16 text-primary-dark-400">
              <thead className="text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="py-3 px-2 md:px-6">
                    Atividade
                  </th>
                  <th scope="col" className="py-3 px-2 md:px-6">
                    Dados Pessoais
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary-dark border-opacity-10">
                  <td className="py-4 px-2 md:px-6">Processo de Inscrição</td>
                  <td className="py-4 px-2 md:px-6">
                    Nome; endereço; telefone; nacionalidade; gênero; e-mail; RG;
                    CPF; data de nascimento;
                  </td>
                </tr>
                <tr className="border-b border-primary-dark border-opacity-10">
                  <td className="py-4 px-2 md:px-6">
                    Atendimento - Fale Conosco
                  </td>
                  <td className="py-4 px-2 md:px-6">Nome; e-mail; telefone;</td>
                </tr>
                <tr className="border-b border-primary-dark border-opacity-10">
                  <td className="py-4 px-2 md:px-6">Trabalhe Conosco</td>
                  <td className="py-4 px-2 md:px-6">
                    Nome; RG; CPF; CTPS; Título de eleitor; Telefone; E-mail;
                    endereço, certificações e registros em Conselho; data de
                    nascimento; Nome/data de nascimento/profissão Pai, Mãe e
                    Cônjuge
                  </td>
                </tr>
                <tr className="">
                  <td className="py-4 px-2 md:px-6">
                    Cadastro de Funcionários
                  </td>
                  <td className="py-4 px-2 md:px-6">
                    Nome; RG; CPF; CTPS; Título de eleitor; Etnia; Telefone;
                    E-mail; endereço, certificações e registros em Conselho;
                    data de nascimento; Nome/data de nascimento/profissão
                    Pai,Mãe, Cônjuge
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <b>Dados pessoais fornecidos diretamente por você:</b> os dados
            pessoais inseridos ou encaminhados por você ao acessar um dos nossos
            canais (sites ou aplicativos).
          </p>
          <p>
            <b>Dados pessoais fornecidos por terceiros:</b> É possível, que a
            Getup colete: dados de bases públicas, disponibilizadas por
            autoridades (como a Receita Federal, por exemplo) ou por terceiros,
            ou até mesmo dados tornados públicos por você em websites ou rede
            sociais, sempre respeitando a sua privacidade e de acordo com a sua
            expectativa.
          </p>
          <p>
            <b>Dados pessoais coletados automaticamente:</b> também poderão ser
            coletadas uma série de informações de modo automático, como:
            características do dispositivo de acesso, do navegador, IP (com data
            e hora), origem do IP, informações sobre cliques, páginas acessadas,
            termos de procura digitado em nossos portais, dentre outros. Para
            tais coletas, poderemos utilizar algumas tecnologias padrões, como
            cookies, pixel tags, beacons e local shared objects, com o propósito
            de melhorar a sua experiência de navegação em nossos serviços, de
            acordo com os seus hábitos e as suas preferências.
          </p>
          <p>
            <b>Dados pessoais coletados indiretamente:</b> a Getup e o parceiro
            poderão executar a captura imagem e vídeo, indiretamente, através de
            gravações e divulgações de imagens relacionada ao curso. Caso seja
            necessária à coleta de dados pessoais adicionais, tomaremos o devido
            cuidado de coletar a sua autorização para tanto ou avisá-lo sobre
            tal ação. Qualquer autorização que coletarmos de você será
            acompanhada do devido grau de informação, para que você compreenda o
            que vamos fazer com as informações. Os dados pessoais coletados
            somente serão utilizados para cumprir com as finalidades informadas
            a você.
          </p>
          <p>
            <b>Dados Sensíveis:</b> A getup geralmente não coleta dados pessoais
            sensíveis, que são dados como suas crenças religiosas ou
            filosóficas, origem racial ou étnica, informações de saúde ou
            médicas (exceto para responder a uma solicitação de acomodação para
            um evento), dados genéticos ou biométricos , informações de conta
            bancária (exceto para fins de processamento de seu pedido) ou outros
            dados pessoais confidenciais semelhantes, conforme definido pela lei
            aplicável. Se a Getup precisar coletar quaisquer dados pessoais
            confidenciais de você, a Getup obterá seu consentimento para a
            coleta de tais dados pessoais conforme exigido pela lei aplicável.
          </p>
          <p>
            <b>Bases Legais:</b> Em relação aos tratamentos de dados realizados
            pela Getup estes serão fundamentados, conforme aplicável a cada
            caso, nas seguintes hipóteses legais: para execução de um contrato
            ou providências preliminares; para cumprimento de obrigações legais
            ou regulatórias; para exercício e defesa de direitos e interesses da
            Getup; ou com base em um interesse legítimo da , sempre considerando
            e respeitando os direitos e garantias fundamentais asseguradas ao
            titular dos dados.
          </p>
          <p>
            <b>Controlador do tratamento:</b> A Getup, no fornecimento de
            Serviços e na disponibilização de seu Site, atuará como controladora
            do tratamento em relação aos Dados Pessoais, sejam eles comuns ou
            sensíveis.
          </p>
          <p>
            O Usuário consente expressamente com a coleta, uso, armazenamento,
            tratamento de Dados Pessoais e fornecimento a terceiros, quando tal
            compartilhamento for necessário para o desenvolvimento dos Serviços,
            nos termos desta Cláusula e demais políticas de privacidade
            aplicáveis, para fins do art. 7º da Lei nº 12.965, de 23 de abril de
            2014 (Marco Civil da Internet), e sem prejuízo dos consentimentos e
            demais bases legais de tratamento de dados prevista na Lei nº
            13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados
            Pessoais – LGPD).
          </p>
        </div>
      </main>
    </Layout>
  );
}
