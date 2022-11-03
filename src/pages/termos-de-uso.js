import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { translate } from "@docusaurus/Translate";
import Link from '@docusaurus/Link';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Termos de Uso | UnDistro</title>
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
              Termos de Uso
            </h1>
          </div>
        </div>
        <div className="section text-white text-lg text-inter text-opacity-70 py-16 flex flex-col space-y-8">
          <p>
            Este Termos de Uso estabelece as regras para utilização do site da
            Undistro. Informamos que através da sua aceitação você está
            aceitando as condições apresentadas neste Termos. Se você não
            concorda com os termos e condições apresentados, não finalize seu
            cadastro. A utilização do site, bem como o cadastro de informações
            através do nosso site implicam em concordância com as cláusulas aqui
            apresentadas. Caso persista alguma dúvida sobre este documento entre
            em contato através do email contato@getup.io.
          </p>
          <p className="text-2xl font-bold uppercase pt-8">1. A UnDistro</p>
          <p>
            Este Termos de Uso regula o uso do site da Undistro( "Undistro") um
            produto da empresa Get Up Plataforma e Computação em Nuvem, empresa
            inscrita no CNPJ sob n 18.366.718/0001-61, e com endereço eletrônico
            www.undistro.io e você, pessoa física ou jurídica, regularmente
            inscrita no CPF ou CNPJ, doravante denominado usuário.
          </p>
          <p>
            <b>
              A contratação dos serviços prestados pela Undistro é objeto de
              contrato específico com regras e cláusulas determinadas em
              instrumento próprio.
            </b>
          </p>
          <p className="text-2xl font-bold uppercase pt-8">
            2. Cadastro de Contato
          </p>
          <p>
            O seu cadastro de contato através do Formulário no site, incluindo
            seu seu nome e e-mail, atribui-lhe a condição de usuário do site e
            implica a aceitação plena e sem reservas deste e todos os demais
            termos publicados, além da sua autorização para receber os
            informativos e notícias enviados pela Undistro através do site (
            <Link to="https://undistro.io">www.undistro.io</Link>) e também
            aceitação das demais políticas:
          </p>
          <ul className="list-disc ml-8">
            <li>
              <Link to="/privacy-policy">Política de Privacidade</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Política de Cookies</Link>
            </li>
          </ul>
          <p>
            Você pode se descadastrar e cessar o recebimento de e-mails a
            qualquer momento.
          </p>
          <p className="text-2xl font-bold uppercase pt-8">
            3. Definição do Produto
          </p>
          <p>
            A Undistro é um produto que é composto por diversos projetos anexos
            que visam auxiliar na administração diária de clusters Kubernetes e
            integra ainda outras ferramentas open source dando ainda maior
            visibilidade sobre os ambientes.
          </p>
          <p className="text-2xl font-bold uppercase pt-8">
            4. Marcas Registradas e Direitos Autorais
          </p>
          <p>
            As marcas registradas, logotipos e marcas de serviço exibidas neste
            site são de propriedade da Getup. A Getup também detém os direitos
            de propriedade intelectual no HTML, texto, imagens de áudio, vídeos,
            ou outro conteúdo disponibilizado neste site,incluíndo, mas não se
            limitando aos conteúdos do blog e Kubicast. A Getup proíbe
            estritamente a redistribuição ou cópia de qualquer parte deste site
            ou conteúdo deste site sem permissão por escrito da Getup. A Getup
            autoriza você a exibir em seu computador, baixar e imprimir páginas
            deste site desde que: (a) o aviso de direitos autorais apareça em
            todas essas impressões, (b) as informações não serão alteradas, (c)
            o conteúdo é usado apenas para uso pessoal, educacional e não
            comercial, e (d) você não redistribui ou copia as informações para
            nenhuma outra mídia.
          </p>
          <p className="text-2xl font-bold uppercase pt-8">5. LGPD</p>
          <p>
            A Getup, no fornecimento de Serviços e na disponibilização de seu
            Site, atuará como controladora do tratamento em relação aos Dados
            Pessoais, sejam eles comuns ou sensíveis. Nenhum dos Serviços
            oferecidos pela Getup abrangem o Tratamento de Dados, como operadora
            na definição legal.
          </p>
          <p>
            A Getup obriga-se, sempre que aplicável, a atuar em conformidade com
            a Legislação vigente sobre proteção de dados relativos a uma pessoa
            física (“Titular”) identificada ou identificável (“Dados Pessoais”)
            e as determinações de órgãos reguladores/fiscalizadores sobre a
            matéria, em especial a Lei 13.709/2018 - LGPD (“Lei Geral de
            Proteção de Dados”), além das demais normas e políticas de proteção
            de dados.
          </p>
          <p className="text-2xl font-bold uppercase pt-8">
            6. Limitação de Garantia
          </p>
          <p>
            O usuário expressamente entende e concorda que a Getup não terá
            qualquer responsabilidade, porque não é responsável, por quaisquer
            danos patrimoniais ou morais, incluindo, sem limitação, danos por
            lucros cessantes, perda de fundo de comércio ou de informações ou
            outras perdas intangíveis resultantes das informações disponíveis
            neste site, incluíndo, mas não se limitando ao Blog, Podcast e
            conteúdos divulgados em mídias sociais
          </p>
          <p>
            A Getup protege os dados pessoais do usuário observando padrões de
            cuidado técnico e economicamente razoáveis considerando as
            tecnologias atuais disponíveis. O usuário reconhece que não pode
            haver expectativa quanto à segurança total na internet e que a Getup
            não poderá ser responsabilizada em caso de invasão de websites ou
            outros atos ilegais de terceiros (hackers).
          </p>
          <p className="text-2xl font-bold uppercase pt-8">
            7. Disposições Gerais
          </p>
          <p>
            A Getup poderá alterar este Termos de Uso a qualquer momento,
            bastando, para tanto, publicar sua versão revisada no site.
          </p>
          <p>
            O usuário entende e concorda que pela natureza dos serviços prestados
            pela Undistro, planos e serviços oferecidos podem ser descontinuados
            ou modificados, sem obrigação de qualquer espécie de notificação
            prévia.
          </p>
          <p>
            O usuário entende e concorda que qualquer exemplo ou menção ao uso
            de tecnologia presente no site que não seja Getup ou Undistro tem
            caráter meramente informativo e não constitui aprovação ou
            recomendação.
          </p>
          <p>
            O usuário fica ciente de que a obrigação formalizada é constituída
            em solo nacional, esteja ou não em território estrangeiro, de sorte
            que estes Termos são regido pela legislação brasileira.
          </p>
          <p>
            A Getup espera do usuário que ele não utilize os serviços para
            quaisquer fins ou meios ilegais, difamatórios, discriminatórios,
            abusivos, ofensivos, obscenos, agressivos, injuriosos, enganosos,
            violentos ou de assédio, ameaça ou uso de falsa identidade
            brasileira e eventuais tratados internacionais firmados pelo Brasil,
            sujeitando-se à legislação pertinente.
          </p>
          <p>
            Ainda que eventual determinação legal anule ou torne ineficaz
            qualquer condição do presente documento, as demais disposições
            permanecerão válidas.
          </p>
          <p className="text-2xl font-bold uppercase pt-8">8. Foro</p>
          <p>
            Fica eleito o foro da cidade de São Paulo no estado de São Paulo,
            como único competente para dirimir eventuais controvérsias entre as
            partes ou para a execução deste Instrumento, com renúncia expressa a
            qualquer outro foro, por mais privilegiado que seja.
          </p>
        </div>
      </main>
    </Layout>
  );
}
