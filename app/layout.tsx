import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './components/styles.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | RegistryAccord Documentation',
    default: 'RegistryAccord Documentation'
  },
  description: 'Official documentation for RegistryAccord, an open protocol for creator ownership.'
}

const navbar = (
  <Navbar
    logo={<span className="font-bold">RegistryAccord</span>}
  />
)

const footer = (
  <Footer>
    <div className="flex flex-col gap-2">
      <div>RegistryAccord Documentation</div>
      <div className="text-xs text-gray-500">
        MIT {new Date().getFullYear()} © RegistryAccord
      </div>
    </div>
  </Footer>
)

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      dir="ltr" 
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body 
        suppressHydrationWarning
        // Ignore browser extension attributes that cause hydration mismatches
        data-new-gr-c-s-check-loaded="" 
        data-gr-ext-installed=""
      >
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/RegistryAccord/registryaccord-docs"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}