import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { translate } from "@docusaurus/Translate";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Política de Cookies | UnDistro</title>
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
              Política de Cookies
            </h1>
          </div>
        </div>
        <div className="section text-white text-lg text-inter text-opacity-70 py-16 flex flex-col space-y-8">
          <p className="text-2xl font-bold uppercase pt-8">
            Como utilizamos Cookies
          </p>
          <p>
            Cookies são arquivos ou informações que podem ser armazenadas em
            seus dispositivos quando você visita os canais Web ou utiliza os
            serviços on-line. A maioria dos navegadores da Internet aceita
            cookies; entretanto, os usuários podem configurar seus navegadores
            para recusar certos tipos de cookies ou cookies específicos.
          </p>

          <p>
            Além disso, os usuários podem apagar os cookies a qualquer momento.
          </p>
          <p>
            Permitimos que você controle e consiga desabilitar os cookies não
            essenciais, pois usamos cookies para aprender como você interage com
            o nosso conteúdo e para melhorar sua experiência ao visitar os
            nossos sites.
          </p>

          <p>
            Para entender melhor, apresentamos abaixo a relação de alguns
            cookies básicos em nossos sites, mas que não se limita a estes:
          </p>
          <ul className="list-disc ml-12 space-y-4">
            <li>
              <b>Cookies da Sessão:</b> São cookies temporários que utilizamos
              para se lembrar durante o curso das partes visitadas no nosso
              site. Eles perdem a validade quando você fecha o navegador.
            </li>

            <li>
              <b>Cookies essenciais:</b> Necessário para a operação do Site.
              Podemos usar cookies essenciais para autenticar usuários, impedir
              o uso fraudulento de contas de usuário ou oferecer recursos de
              proteção e interação do Site. • Cookies analíticos/de desempenho:
              Permite-nos reconhecer e contar o número de visitantes, vezes de
              acesso e ver como os visitantes se movem pelo Site ao usá-lo; isso
              nos ajuda a melhorar o funcionamento do site.
            </li>
            <li>
              <b>Cookies de funcionalidade:</b> Usamos para reconhecer quando
              você retorna ao site. Isso nos permite personalizar nosso conteúdo
              para você, cumprimentá-lo pelo nome e lembrar suas preferências
              (por exemplo, sua escolha de idioma ou região).
            </li>
            <li>
              <b>Cookies de segmentação:</b> Grava sua visita ao site, as
              páginas que você visitou e os links que você seguiu, pois usaremos
              essas informações para tornar o site mais relevante para seus
              interesses e avaliação estatística sobre interesse e qualidade
              nosso conteúdo.
            </li>
          </ul>

          <p>Como eu rejeito ou apago Cookies?</p>
          <p>
            Você pode escolher rejeitar ou bloquear todos ou tipos específicos
            de cookies configurados através da sua navegação ao clicar nas
            preferências de cookies nos nosso(s) site(s). Você pode modificar as
            suas preferências alterando as configurações do seu navegador. Favor
            observar que a maioria dos navegadores aceitam cookies
            automaticamente. Portanto, se você não quiser que cookies sejam
            utilizados, você talvez tenha que apagar ou bloquear cookies
            ativamente.
          </p>

          <p>
            Se você rejeitar a utilização de todos os cookies, você continuará
            conseguindo visitar os nossos sites, mas algumas das funções poderão
            não funcionar corretamente.
          </p>
        </div>
      </main>
    </Layout>
  );
}
