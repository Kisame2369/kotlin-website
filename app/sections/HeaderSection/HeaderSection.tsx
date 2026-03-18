import { useState, useEffect } from "react";
import React from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import cn from "classnames";
import { Section, Container } from "../../components/layout/layout";
import "./HeaderSection.css";

const cardsData = [
  {
    id: 1,
    title: "Multiplatform Mobile",
    subTitle: "Share the logic of your Android and iOS apps while keeping UX native",
    link: "#",
  },
  {
    id: 2,
    title: "Server-side",
    subTitle: "Modern development experience with familiar JVM technology",
    link: "#",
  },
  {
    id: 3,
    title: "Web Frontend",
    subTitle: "Extend your projects to web",
    link: "#",
  },
  {
    id: 4,
    title: "Android",
    subTitle: "Recommended by Google for building Android apps",
    link: "#",
  },
];

export function HeaderSection() {
  const textCn = useTextStyles();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    // Устанавливаем начальное значение
    handleResize();

    // Слушаем изменение размера экрана
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? cardsData.slice(0, 2) : cardsData;

  return (
    <div>
      <Section className="header-section">
        <Container>
          <h1 className={textCn("rs-hero")}>
            A modern programming language that makes developers happier
          </h1>

          <div className="header-section__actions">
            <div>
              <Button size="l" href="#">Get started</Button>
              <Button mode="outline" size="l" href="#" className="header-section__why-btn">
                Why Kotlin
              </Button>
            </div>

            <div className="header-section__contributors">
              <p className={textCn("rs-text-2")}>
                Developed by{" "}
                <a className={textCn("rs-link")} href="https://www.jetbrains.com/">
                  JetBrains
                </a>{" "}
                & Open-source{" "}
                <a
                  className={textCn("rs-link")}
                  href="https://github.com/JetBrains/kotlin/graphs/contributors"
                >
                  Contributors
                </a>
              </p>
            </div>
          </div>

          <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
            {visibleCards.map((card) => (
              <a
                key={card.id}
                href={card.link}
                className={cn(
                  cardCn({ theme: "dark", mode: "classic", isClickable: true }),
                  "kto-col-3 kto-col-md-6 kto-col-sm-12"
                )}
              >
                <h2 className={cn(textCn("rs-h3"), "kto-offset-top-16")}>
                  {card.title}
                </h2>
                <p className={cn(textCn("rs-text-2"), "kto-offset-top-16")}>
                  {card.subTitle}
                </p>
              </a>
            ))}
          </div>

          <p className={cn(textCn("rs-text-2"), "kto-offset-top-16")}>
            <a className={textCn("rs-link")} href="/docs/multiplatform.html">
              Multiplatform for Other Platforms
            </a>
            {", "}
            <a className={textCn("rs-link")} href="/docs/data-science-overview.html">
              Data Science
            </a>
          </p>
        </Container>
      </Section>
    </div>
  );
}