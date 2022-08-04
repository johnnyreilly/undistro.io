import {
  Button,
  ButtonGroup,
  IconButton,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Blog, Location, Mail, Podcast, Search } from "./Icons";

const footerContent = [
  {
    title: "Fale Conosco",
    items: [
      {
        label: "Formulário de Contato",
        href: "/contact",
        icon: Mail,
        alt: "Contact",
      },
      {
        label: `Alameda Campinas 802\nJardim Paulista, São Paulo - SP\n01404-001`,
        href: "#",
        icon: Location,
        alt: "Address",
      },
    ],
  },
  {
    title: "Faça parte do\nnosso time",
    items: [
      { label: "jobs@getup.io", href: "#", icon: Mail, alt: "Jobs" },
      {
        label: "Oportunidades",
        href: "#",
        icon: Search,
        alt: "Oportunidades",
      },
    ],
  },
  {
    title: "Conteúdo",
    items: [
      { label: "Kubicast", href: "/kubicast", icon: Podcast, alt: "Podcast" },
      {
        label: "Blog",
        href: "https://blog.getupcloud.com",
        icon: Blog,
        alt: "Blog",
      },
    ],
  },
];

const FooterSection = ({ title, items }: any) => (
  <Stack spacing="4" minW="36" flex="1" flexBasis="content">
    <Text
      fontSize="md"
      fontWeight="bold"
      textTransform="uppercase"
      color="subtle"
    >
      {title}
    </Text>
    <Stack spacing="3" shouldWrapChildren>
      {items.map((item: any) => (
        <Button
          key={item.label}
          textAlign="left"
          whiteSpace="pre-line"
          color="primary.500"
          fontSize="xs"
          variant="link"
        >
          <IconButton
            as="a"
            href="#"
            aria-label={item.alt}
            color="secondary.500"
            bg="primary.500"
            icon={<item.icon className="w-6 h-6" />}
            className="mr-2"
            isRound
          />
          <span>{item.label}</span>
        </Button>
      ))}
    </Stack>
  </Stack>
);

export const Footer = () => (
  <footer
    className="pt-32 max-w-[80vw] 2xl:max-w-7xl mx-auto"
    role="contentinfo"
  >
    <Stack
      spacing="8"
      direction={{ base: "column", xl: "row" }}
      justify="space-between"
    >
      <Stack spacing={{ base: "6", md: "8" }} align="start">
        <Img src="/img/getup.svg" />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="Facebook"
            color="primary.500"
            icon={<FaFacebookSquare fontSize="1.625rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Instagram"
            color="primary.500"
            icon={<FaInstagram fontSize="1.625rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            color="primary.500"
            icon={<FaLinkedin fontSize="1.625rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            color="primary.500"
            icon={<FaTwitterSquare fontSize="1.625rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "12", md: "8" }}
        color="primary.500"
      >
        {footerContent.map((section: any) => (
          <FooterSection key={section.title} {...section} />
        ))}
      </Stack>
    </Stack>
    <div className="py-24 font-bold">
      <div className="flex justify-center divide-x mb-8">
        <Text
          className="pr-4"
          fontSize="sm"
          color="primary.500"
          textAlign="center"
        >
          Termos & Condições
        </Text>
        <Text
          className="pl-4"
          fontSize="sm"
          color="primary.500"
          textAlign="center"
        >
          Política de Privacidade
        </Text>
      </div>
      <Text fontSize="sm" color="primary.500" textAlign="center">
        &copy; Copyrights @ Getup
      </Text>
    </div>
  </footer>
);
