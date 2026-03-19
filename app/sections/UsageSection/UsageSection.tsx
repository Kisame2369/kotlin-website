import { useState } from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { cardCn } from "@rescui/card";
import { ThemeProvider } from "@rescui/ui-contexts";
import cn from "classnames";
import { Section, Container } from "../../components/layout/layout";
import "./UsageSection.css";

import gradleLogo from "~/assets/companies/gradle.svg";
import cordaLogo from "~/assets/companies/corda.svg";
import evernoteLogo from "~/assets/companies/evernote.svg";
import courseraLogo from "~/assets/companies/coursera.svg";
import springLogo from "~/assets/companies/spring.svg";
import atlassianLogo from "~/assets/companies/atlassian.svg";

const testimonials = [
  {
    company: "Gradle",
    logo: gradleLogo,
    url: "https://blog.gradle.org/kotlin-meets-gradle",
    text: "Gradle is introducing Kotlin as a language for writing build scripts",
  },
  {
    company: "Corda",
    logo: cordaLogo,
    url: "https://www.corda.net/2017/01/10/kotlin/",
    text: "Corda is an open-source distributed ledger platform, supported by major banks, and built entirely in Kotlin",
  },
  {
    company: "Evernote",
    logo: evernoteLogo,
    url: "https://blog.evernote.com/tech/2017/01/26/android-state-library/",
    text: "Evernote recently integrated Kotlin into their Android client",
  },
  {
    company: "Coursera",
    logo: courseraLogo,
    url: "https://building.coursera.org/blog/2016/03/16/becoming-bilingual-coursera/",
    text: "Coursera Android app is partially written in Kotlin",
  },
  {
    company: "Spring",
    logo: springLogo,
    url: "https://spring.io/blog/2017/01/04/introducing-kotlin-support-in-spring-framework-5-0",
    text: "Spring makes use of Kotlin's language features to offer more concise APIs",
  },
  {
    company: "Atlassian",
    logo: atlassianLogo,
    url: "https://twitter.com/danlew42/status/809065097339564032",
    text: "All new code in the Trello Android app is in Kotlin",
  },
];

function UsageSectionContent() {
  const textCn = useTextStyles();
  const [sortByName, setSortByName] = useState(false);

  const sortedTestimonials = sortByName
    ? [...testimonials].sort((a, b) => a.company.localeCompare(b.company))
    : testimonials;
return (
    <Section className="usage-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Kotlin Usage Highlights</h2>

        <div
          className="kto-offset-top-16"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            mode="outline"
            size="s"
            onClick={() => setSortByName((prev) => !prev)}
          >
            Sort: {sortByName ? "A-Z" : "Default"}
          </Button>
        </div>

        <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
          {sortedTestimonials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                cardCn({ theme: "light", mode: "classic", isClickable: true }),
                "usage-section__card",
                "kto-col-4 kto-col-md-6 kto-col-sm-12"
              )}
            >
              <img
                src={item.logo}
                alt={item.company}
                className={cn("usage-section__logo", {
                  "usage-section__logo_spring": item.company === "Spring",
                })}
              />
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-8")}>
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function UsageSection() {
  return (
    <ThemeProvider theme="light">
      <UsageSectionContent />
    </ThemeProvider>
  );
}