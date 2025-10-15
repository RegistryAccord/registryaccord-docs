import { generateStaticParamsFor, importPage } from 'nextra/pages'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export default async function Page({ params }: { params: Promise<{ mdxPath: string[] }> }) {
  const resolvedParams = await params
  const { default: MDXContent } = await importPage(resolvedParams.mdxPath)
  return <MDXContent />
}