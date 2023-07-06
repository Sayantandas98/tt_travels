import Link from "next/link"
import { getServerSession } from "next-auth";
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { authOptions } from "./api/auth/[...nextauth]/route";
// import { LoginButton, LogoutButton } from "@/components/loginButton";
export default async function IndexPage() {
  const sss=await getServerSession(authOptions)
  console.log(sss)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
        {/* <p>{JSON.stringify(sss)}</p> */}
        <h1>{sss?.user?.name}</h1>
        {/* <LoginButton/>
        <LogoutButton/> */}
      </div>
    </section>
  )
}
