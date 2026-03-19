import { useState } from "react";
import Button from "@rescui/button";
import { useTextStyles } from "@rescui/typography";
import { ThemeProvider } from "@rescui/ui-contexts";
import { TabList, Tab, TabSeparator } from "@rescui/tab-list";
import cn from "classnames";
import { Section, Container } from "../../components/layout/layout";
import "./WhyKotlinSection.css";

import multiplatformImg from "../../assets/images/index/multiplatform.svg";

const tabs = [
  {
    title: "Concise",
    code: `data class Employee(
   val name: String,
   val email: String,
   val company: String
) // + automatically generated equals(), hashCode(), toString(), and copy()

object MyCompany {                                // A singleton
   const val name: String = "MyCompany"
}

fun main() {                                      // Function at the top level
   val employee = Employee("Alice",               // No \`new\` keyword
      "alice@mycompany.com", MyCompany.name)
   println(employee)
}`,
  },
  {
    title: "Safe",
    code: `fun reply(condition: Boolean): String? =          // Nullability is part of Kotlin's type system
   if (condition) "I'm fine" else null

fun error(): Nothing =                            // Always throw an exception
   throw IllegalStateException("Shouldn't be here")

fun main() {
   val condition = true
   val message = reply(condition)
   println(message?.replace("fine", "okay"))
   if (message != null) {
      println(message.uppercase())
   }

   val nonNull: String =
   reply(condition = true) ?: error()
   println(nonNull)
}`,
  },
  {
    title: "Expressive",
    code: `fun main() {
   val map = mapOf(1 to "one", 2 to "two")
   for ((k, v) in map) {
       println("$k -> $v")
   }

   fun obtainKnowledge() = Pair("The Answer", 42)

   val (description, answer) = obtainKnowledge()
   println("$description: $answer")

   getText()?.let {
      sendEmailTo("alice@example.com", it)
   }

   createEmptyWindow()
      .apply {
         width = 300
         height = 200
         isVisible = true
      }.also { w ->
         showWindow(w)
      }
}`,
  },
  {
    title: "Interoperable",
    code: `// Use any existing JVM library or framework
// Call Kotlin code from Java without an issue

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
   runApplication<DemoApplication>(*args)
}

@RestController
class MessageResource {
   @GetMapping
   fun index(): List<Message> = listOf(
      Message("1", "Hello!"),
      Message("2", "Bonjour!"),
      Message("3", "Privet!"),
   )
}

data class Message(val id: String?, val text: String)`,
  },
  {
    title: "Multiplatform",
    code: `// Common
expect fun randomUUID(): String

expect class PlatformSocket(
       url: String
) {
    fun openSocket(listener: PlatformSocketListener)
    fun closeSocket(code: Int, reason: String)
    fun sendMessage(msg: String)
}

interface PlatformSocketListener {
    fun onOpen()
    fun onFailure(t: Throwable)
    fun onMessage(msg: String)
    fun onClosing(code: Int, reason: String)
}`,
  },
];

const sections = [
  {
    title: <>A productive way to write server&#8209;side applications</>,
    description:
      "Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.",
    buttonText: "Learn more",
    buttonLink: "/lp/server-side/",
    media: "youtube",
    youtubeId: "8xAH7RU0Y44",
  },
  {
    title: "Cross-platform layer for native applications",
    description: (
      <>
        Share application logic between web, mobile, and desktop platforms while
        keeping an experience native to users.
        <br />
        <br />
        Save time and get the benefit of unlimited access to features specific
        to these platforms.
      </>
    ),
    buttonText: "Learn about Kotlin Multiplatform",
    buttonLink: "/docs/multiplatform.html",
    media: "image",
  },
  {
    title: (
      <>
        Big, friendly and helpful
        <br />
        community
      </>
    ),
    description:
      "Kotlin has great support and many contributors in its fast-growing global community. " +
      "Enjoy the benefits of a rich ecosystem with a wide range of community libraries. " +
      "Help is never far away — consult extensive community resources or ask the Kotlin team directly.",
    buttonText: "Join the community",
    buttonLink: "/community/",
    media: "youtube",
    youtubeId: "JGvk4M0Rfxo",
  },
];

function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div className="why-kotlin-section__youtube">
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

function ProgrammingLanguage() {
  const textCn = useTextStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48">
      <div className="kto-col-4 kto-col-md-12">
        <h3 className={textCn("rs-h2")}>
          Modern, concise and safe programming language
        </h3>
        <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
          Easy to pick up, so you can create powerful applications immediately.
        </p>
        <div className="kto-offset-top-32">
          <Button mode="outline" size="l" href="/docs/getting-started.html">
            Get started
          </Button>
        </div>
      </div>

      <div className="kto-col-8 kto-col-md-12">
        <TabList value={activeIndex} onChange={(v) => setActiveIndex(v)}>
          {tabs.map((tab, i) => (
            <Tab key={i}>{tab.title}</Tab>
          ))}
        </TabList>
        <TabSeparator />
        <pre className="programming-language__code kto-offset-top-16">
          <code>{tabs[activeIndex].code}</code>
        </pre>
      </div>
    </div>
  );
}

function WhyKotlinContent() {
  const textCn = useTextStyles();

  return (
    <Section className="why-kotlin-section">
      <Container>
        <h2 className={textCn("rs-hero")}>Why Kotlin</h2>

        <ProgrammingLanguage />

        {sections.map((section, index) => (
          <div
            key={index}
            className="kto-grid kto-grid-gap-32 kto-offset-top-96 kto-offset-top-md-48"
          >
            <div className="kto-col-4 kto-col-md-12">
              <h3 className={textCn("rs-h2")}>{section.title}</h3>
              <p className={cn(textCn("rs-text-2"), "kto-offset-top-32")}>
                {section.description}
              </p>
              <div className="kto-offset-top-32">
                <Button mode="outline" size="l" href={section.buttonLink}>
                  {section.buttonText}
                </Button>
              </div>
            </div>

            <div className="kto-col-8 kto-col-md-12">
              {section.media === "youtube" && section.youtubeId && (
                <YouTubeEmbed id={section.youtubeId} />
              )}
              {section.media === "image" && (
                <img
                  src={multiplatformImg}
                  alt="Kotlin Multiplatform"
                  className="why-kotlin-section__image"
                />
              )}
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export function WhyKotlinSection() {
  return (
    <ThemeProvider theme="light">
      <WhyKotlinContent />
    </ThemeProvider>
  );
}